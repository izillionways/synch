import { OrganizationApiUnavailableError, RemoteVaultClient } from "@synch/sync-client/remote";
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
  private contextKey = "";
  private role: string | null = null;
  private apiUnavailable = false;
  private checkedAt: number | null = null;
  private pending: Promise<void> | null = null;

  constructor(private readonly deps: OrganizationRoleServiceDeps) {}

  getOrganizationRole(): string | null {
    this.checkContext();
    return this.role;
  }

  isOrganizationRoleApiUnavailable(): boolean {
    this.checkContext();
    return this.apiUnavailable;
  }

  async ensureOrganizationRoleCheck(): Promise<void> {
    this.checkContext();
    const organizationId = this.deps.getOrganizationId();
    if (!this.deps.hasAuthenticatedSession() || !organizationId) return;
    if (this.pending) return this.pending;
    if (this.checkedAt !== null && Date.now() - this.checkedAt < 30_000) return;

    const contextKey = this.contextKey;
    this.pending = this.client.listOrganizations(
      this.deps.getApiBaseUrl(),
      this.deps.getAuthSessionToken(),
    ).then((organizations) => {
      this.checkContext();
      if (contextKey !== this.contextKey) return;
      this.apiUnavailable = false;
      this.role = organizations.find((org) => org.id === organizationId)?.role ?? null;
    }).catch((error: unknown) => {
      this.checkContext();
      if (contextKey !== this.contextKey) return;
      this.role = null;
      this.apiUnavailable = error instanceof OrganizationApiUnavailableError;
    }).finally(() => {
      if (contextKey !== this.contextKey) return;
      this.checkedAt = Date.now();
      this.pending = null;
      this.deps.refreshUi();
    });
    await this.pending;
  }

  private checkContext(): void {
    const next = JSON.stringify([
      this.deps.getApiBaseUrl(),
      this.deps.getAuthSessionToken(),
      this.deps.hasAuthenticatedSession(),
      this.deps.getOrganizationId(),
    ]);
    if (next === this.contextKey) return;
    this.contextKey = next;
    this.role = null;
    this.apiUnavailable = false;
    this.checkedAt = null;
    this.pending = null;
  }
}
