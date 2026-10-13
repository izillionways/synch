import type { Meta, StoryObj } from "./types";
import Component from "../src/pages/blog/index.astro";

const meta = {
  title: "Pages/Blog/Index",
  component: Component,
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
