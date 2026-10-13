import { beforeEach, expect, it, vi } from "vitest";
import { resetObsidianMocks, setRequestUrlMock } from "../test-stubs/obsidian";
import { SynchSubscriptionService } from "./subscription-service";

beforeEach(() => {
  resetObsidianMocks();
  vi.restoreAllMocks();
});
it("uses the selected vault's organization and ignores a previous organization's late response", async () => {
  let organizationId = "personal";
  let finishPersonal!: (value: unknown) => void;
  const status = (planId: string) => ({
    status: 200,
    json: {
      planId,
      billingInterval: "monthly",
      active: true,
      status: "active",
      cancelAtPeriodEnd: false,
      periodEnd: null,
    },
  });
  setRequestUrlMock(
    vi.fn(async (input: unknown) => {
      const url = new URL((input as { url: string }).url);
      if (url.searchParams.get("organizationId") === "personal")
        return new Promise((resolve) => {
          finishPersonal = resolve;
        });
      expect(url.searchParams.get("organizationId")).toBe("shared");
      return status("plus");
    }),
  );
  const service = new SynchSubscriptionService({
    getOrganizationId: () => organizationId,
    getApiBaseUrl: () => "https://api.synch.run",
    hasAuthenticatedSession: () => true,
    getAuthSessionToken: () => "token",
    refreshUi: vi.fn(),
  });
  const previous = service.ensureSubscriptionStatusCheck();
  organizationId = "shared";
  await service.ensureSubscriptionStatusCheck();
  expect(service.getSubscriptionStatus()).toMatchObject({
    state: "loaded",
    planId: "plus",
  });
  finishPersonal(status("starter"));
  await previous;
  expect(service.getSubscriptionStatus()).toMatchObject({
    state: "loaded",
    planId: "plus",
  });
});

function fixture() {
  const context = { token: "token", authenticated: true };
  const refreshUi = vi.fn();
  const service = new SynchSubscriptionService({
    getApiBaseUrl: () => "https://api.synch.run",
    hasAuthenticatedSession: () => context.authenticated,
    getAuthSessionToken: () => context.token,
    refreshUi,
  });
  return { context, service, refreshUi };
}

const billingResponse = {
  status: 200,
  json: {
    planId: "plus", billingInterval: "monthly", active: true,
    status: "active", cancelAtPeriodEnd: false, periodEnd: null,
  },
};

it.each(["account-change", "sign-out", "clear"])("discards pending billing results after %s without a UI read", async (action) => {
  let finish!: (value: unknown) => void;
  setRequestUrlMock(vi.fn(() => new Promise((resolve) => { finish = resolve; })));
  const { context, service, refreshUi } = fixture();
  const pending = service.ensureSubscriptionStatusCheck();
  if (action === "account-change") context.token = "new-token";
  else if (action === "sign-out") context.authenticated = false;
  else service.clearSubscriptionStatus();
  finish(billingResponse);
  await pending;
  expect(refreshUi).not.toHaveBeenCalled();
  expect(service.getSubscriptionStatus()).toEqual({ state: "idle" });
});

it("deduplicates checks, caches failures, and allows a manual retry", async () => {
  let fail!: (error: unknown) => void;
  const request = vi.fn(() => new Promise<unknown>((_resolve, reject) => { fail = reject; }));
  setRequestUrlMock(request);
  const { service } = fixture();
  const pending = service.ensureSubscriptionStatusCheck();
  const retry = service.retrySubscriptionStatusCheck();
  expect(service.getSubscriptionStatus()).toEqual({ state: "checking" });
  expect(request).toHaveBeenCalledTimes(1);
  fail(new Error("offline"));
  await Promise.all([pending, retry]);
  expect(service.getSubscriptionStatus()).toMatchObject({ state: "failed" });
  await service.ensureSubscriptionStatusCheck();
  expect(request).toHaveBeenCalledTimes(1);
  request.mockImplementation(async () => billingResponse);
  await service.retrySubscriptionStatusCheck();
  expect(request).toHaveBeenCalledTimes(2);
  expect(service.getSubscriptionStatus()).toMatchObject({ state: "loaded", planId: "plus" });
});
