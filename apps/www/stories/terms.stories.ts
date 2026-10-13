import type { Meta, StoryObj } from "./types";
import Component from "../src/pages/terms.astro";

const meta = {
  title: "Pages/Legal/Terms",
  component: Component,
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
