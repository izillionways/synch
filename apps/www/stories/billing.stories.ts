import type { Meta, StoryObj } from "./types";
import BillingSettingsPage from "../src/components/BillingSettingsPage.astro";
import { billing, json, loading, session } from "./mocks";

const meta = {
  title: "Pages/Billing",
  component: BillingSettingsPage,
  args: { locale: "en" },
  parameters: {
    msw: { handlers: { session: [json("/api/auth/get-session", session)] } },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const PlusMonthly: Story = {};
export const PlusAnnual: Story = {
  parameters: {
    msw: {
      handlers: {
        billing: [
          json("/v1/billing/status", { ...billing, billingInterval: "annual" }),
        ],
      },
    },
  },
};
export const Starter: Story = {
  parameters: {
    msw: {
      handlers: {
        billing: [
          json("/v1/billing/status", { ...billing, planId: "starter" }),
        ],
      },
    },
  },
};
export const Free: Story = {
  parameters: {
    msw: {
      handlers: {
        billing: [
          json("/v1/billing/status", {
            ...billing,
            active: false,
            planId: "free",
            status: "inactive",
            billingInterval: null,
            periodEnd: null,
          }),
        ],
      },
    },
  },
};
export const Canceling: Story = {
  parameters: {
    msw: {
      handlers: {
        billing: [
          json("/v1/billing/status", { ...billing, cancelAtPeriodEnd: true }),
        ],
      },
    },
  },
};
export const Member: Story = {
  parameters: {
    msw: {
      handlers: {
        billing: [
          json("/v1/billing/status", { ...billing, canManageBilling: false }),
        ],
      },
    },
  },
};
export const Loading: Story = {
  parameters: {
    msw: { handlers: { billing: [loading("/v1/billing/status")] } },
  },
};
export const SignedOut: Story = {
  parameters: {
    msw: {
      handlers: {
        session: [json("/api/auth/get-session", null)],
        billing: [json("/v1/billing/status", {}, 401)],
      },
    },
  },
};
export const Error: Story = {
  parameters: {
    msw: { handlers: { billing: [json("/v1/billing/status", {}, 503)] } },
  },
};
