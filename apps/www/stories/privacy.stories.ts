import type { Meta, StoryObj } from "./types";
import Component from "../src/pages/privacy.astro";

const meta = {
  title: "Pages/Legal/Privacy",
  component: Component,
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
