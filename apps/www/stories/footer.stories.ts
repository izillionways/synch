import type { Meta, StoryObj } from "./types";
import Component from "../src/components/Footer.astro";

const meta = {
  title: "Components/Footer",
  component: Component,
  args: { locale: "en" },
  parameters: { layout: "padded" },
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
