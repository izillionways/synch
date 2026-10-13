import type { Meta, StoryObj } from "./types";
import Component from "../src/pages/self-hosting.astro";

const meta = {
  title: "Pages/Self hosting/Cloudflare",
  component: Component,
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
