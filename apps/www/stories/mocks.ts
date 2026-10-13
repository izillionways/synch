import { http, HttpResponse, delay } from "msw";
import type { JsonBodyType } from "msw";

export const json = (path: string, value: JsonBodyType, status = 200) =>
  http.get(`*${path}`, () => HttpResponse.json(value, { status }));
export const loading = (path: string) =>
  http.get(`*${path}`, async () => {
    await delay("infinite");
  });
export const session = {
  user: { id: "alex", name: "Alex Morgan", email: "alex@example.com" },
};
export const billing = {
  active: true,
  planId: "plus",
  status: "active",
  billingInterval: "monthly",
  periodEnd: "2026-10-29T12:00:00Z",
  cancelAtPeriodEnd: false,
  canManageBilling: true,
  availablePlusIntervals: ["monthly", "annual"],
};
export const defaults = [
  json("/api/auth/get-session", null),
  json("/v1/organizations", {
    organizations: [{ id: "studio", name: "Design studio", role: "owner" }],
  }),
  json("/v1/billing/status", billing),
  // PUBLIC_API_URL is cleared in Storybook, so API calls use this origin.
  // Relative matchers leave external /v1/ media URLs (such as Mux) alone.
  ...["/api/*", "/v1/*"].map((path) =>
    http.all(path, () =>
      HttpResponse.json(
        { message: "This action is not enabled in this preview." },
        { status: 501 },
      ),
    ),
  ),
];
