import type { Meta, StoryObj } from "./types";
import Component from "./BlogPost.astro";

const meta = {
  title: "Pages/Blog/Article",
  component: Component,
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
