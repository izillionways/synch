import type { Meta, StoryObj } from "./types";
import { waitFor } from "storybook/test";
import BillingSuccessPage from "../src/components/BillingSuccessPage.astro";
import { json } from "./mocks";

const meta = {
  title: "Pages/Billing confirmation",
  component: BillingSuccessPage,
  args: { locale: "en" },
  // Remain in the confirmation page instead of navigating out of Storybook.
  parameters: {
    msw: { handlers: [json("/v1/billing/status", { active: false })] },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Waiting: Story = {};
export const DelayedConfirmation: Story = {
  // The production page reveals its fallback after 12 seconds.
  play: async ({ canvasElement }) => {
    await waitFor(
      () => {
        const actions = canvasElement.querySelector("#actions");
        if (!actions || actions.classList.contains("hidden"))
          throw new Error("Waiting for the confirmation fallback");
      },
      { timeout: 16000 },
    );
  },
};
