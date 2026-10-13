import type { Meta, StoryObj } from "./types";
import Component from "../src/components/PricingPage.astro";

const meta = {
  title: "Pages/Pricing",
  component: Component,
  args: { locale: "en" },
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
