import type { Meta, StoryObj } from "./types";
import Component from "../src/components/SecretGenerator.astro";

const meta = {
  title: "Components/Secret generator",
  component: Component,
  args: { locale: "en" },
  parameters: { layout: "padded" },
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
