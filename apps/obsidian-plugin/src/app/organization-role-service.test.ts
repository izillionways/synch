import { beforeEach, expect, it, vi } from "vitest";
import { resetObsidianMocks, setRequestUrlMock } from "../test-stubs/obsidian";
import { SynchOrganizationRoleService } from "./organization-role-service";

beforeEach(() => {
  resetObsidianMocks();
  vi.restoreAllMocks();
});

function fixture() {
  const context = { organizationId: "shared", token: "token", authenticated: true };
  const refreshUi = vi.fn();
  const service = new SynchOrganizationRoleService({
    getOrganizationId: () => context.organizationId,
    getApiBaseUrl: () => "https://api.synch.run",
    hasAuthenticatedSession: () => context.authenticated,
    getAuthSessionToken: () => context.token,
    refreshUi,
  });
  return { context, refreshUi, service };
}

it("uses the connected organization role and caches checks", async () => {
  const request = vi.fn(async () => ({ status: 200, json: { organizations: [
    { id: "personal", name: "Personal", role: "owner" },
    { id: "shared", name: "Shared", role: "member" },
  ] } }));
  setRequestUrlMock(request);
  const { service, refreshUi } = fixture();
  expect(service.getOrganizationRole()).toBeNull();
  await service.ensureOrganizationRoleCheck();
  await service.ensureOrganizationRoleCheck();
  expect(service.getOrganizationRole()).toBe("member");
  expect(request).toHaveBeenCalledTimes(1);
  expect(refreshUi).toHaveBeenCalledTimes(1);
});

it("discards a late role response after the account changes", async () => {
  let finish!: (value: unknown) => void;
  setRequestUrlMock(vi.fn(() => new Promise((resolve) => { finish = resolve; })));
  const { service, context } = fixture();
  const pending = service.ensureOrganizationRoleCheck();
  context.token = "other-account";
  finish({ status: 200, json: { organizations: [
    { id: "shared", name: "Shared", role: "owner" },
  ] } });
  await pending;
  expect(service.getOrganizationRole()).toBeNull();
});

it("hides management when role lookup fails and throttles retries", async () => {
  const request = vi.fn(async () => { throw new Error("offline"); });
  setRequestUrlMock(request);
  const { service } = fixture();
  await service.ensureOrganizationRoleCheck();
  await service.ensureOrganizationRoleCheck();
  expect(service.getOrganizationRole()).toBeNull();
  expect(request).toHaveBeenCalledTimes(1);
});

it("clears the role immediately on organization changes and sign-out", async () => {
  setRequestUrlMock(vi.fn(async () => ({ status: 200, json: { organizations: [
    { id: "shared", name: "Shared", role: "owner" },
  ] } })));
  const { service, context } = fixture();
  await service.ensureOrganizationRoleCheck();
  expect(service.getOrganizationRole()).toBe("owner");
  context.organizationId = "another";
  expect(service.getOrganizationRole()).toBeNull();
  await service.ensureOrganizationRoleCheck();
  expect(service.getOrganizationRole()).toBeNull();
  context.organizationId = "shared";
  await service.ensureOrganizationRoleCheck();
  expect(service.getOrganizationRole()).toBe("owner");
  context.authenticated = false;
  expect(service.getOrganizationRole()).toBeNull();
});


it.each([404, 401, 403, 503])("distinguishes an unavailable organization API from HTTP %s", async (status) => {
  const request = vi.fn(async () => ({ status, json: {} }));
  setRequestUrlMock(request);
  const { service, context } = fixture();
  await service.ensureOrganizationRoleCheck();
  await service.ensureOrganizationRoleCheck();
  expect(service.getOrganizationRole()).toBeNull();
  expect(service.isOrganizationRoleApiUnavailable()).toBe(status === 404);
  expect(request).toHaveBeenCalledTimes(1);

  context.token = "other-account";
  expect(service.isOrganizationRoleApiUnavailable()).toBe(false);
});

it("clears the unavailable API state after a successful retry", async () => {
  const now = vi.spyOn(Date, "now").mockReturnValue(1_000);
  setRequestUrlMock(vi.fn(async () => ({ status: 404, json: {} })));
  const { service } = fixture();
  await service.ensureOrganizationRoleCheck();
  expect(service.isOrganizationRoleApiUnavailable()).toBe(true);

  now.mockReturnValue(31_000);
  setRequestUrlMock(vi.fn(async () => ({ status: 200, json: { organizations: [
    { id: "shared", name: "Shared", role: "member" },
  ] } })));
  await service.ensureOrganizationRoleCheck();
  expect(service.isOrganizationRoleApiUnavailable()).toBe(false);
  expect(service.getOrganizationRole()).toBe("member");
});
