import { OrganizationApiUnavailableError, RemoteVaultClient } from "@synch/sync-client/remote";
import { ContextRequestCache } from "./context-request-cache";
import { defaultHttpClient } from "../adapters/http";

interface OrganizationRoleServiceDeps {
  getOrganizationId(): string | undefined;
  getApiBaseUrl(): string;
  hasAuthenticatedSession(): boolean;
  getAuthSessionToken(): string;
  refreshUi(): void;
}

export class SynchOrganizationRoleService {
  private readonly client = new RemoteVaultClient(defaultHttpClient);
  private role: string | null = null;
  private apiUnavailable = false;
  private readonly cache = new ContextRequestCache({
    getContextKey: () => JSON.stringify([
      this.deps.getApiBaseUrl(),
      this.deps.getAuthSessionToken(),
      this.deps.hasAuthenticatedSession(),
      this.deps.getOrganizationId(),
    ]),
    intervalMs: 30_000,
    onInvalidate: () => {
      this.role = null;
      this.apiUnavailable = false;
    },
    onSettled: () => this.deps.refreshUi(),
  });

  constructor(private readonly deps: OrganizationRoleServiceDeps) {}

  getOrganizationRole(): string | null {
    this.cache.syncContext();
    return this.role;
  }

  isOrganizationRoleApiUnavailable(): boolean {
    this.cache.syncContext();
    return this.apiUnavailable;
  }

  async ensureOrganizationRoleCheck(): Promise<void> {
    this.cache.syncContext();
    const organizationId = this.deps.getOrganizationId();
    if (!this.deps.hasAuthenticatedSession() || !organizationId) return;
    await this.cache.run(
      () => this.client.listOrganizations(
        this.deps.getApiBaseUrl(),
        this.deps.getAuthSessionToken(),
      ),
      (organizations) => {
        this.apiUnavailable = false;
        this.role = organizations.find((org) => org.id === organizationId)?.role ?? null;
      },
      (error) => {
        this.role = null;
        this.apiUnavailable = error instanceof OrganizationApiUnavailableError;
      },
    );
  }
}
