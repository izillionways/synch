import type { Meta, StoryObj } from "./types";
import Component from "../src/pages/self-hosting-docker.astro";

const meta = {
  title: "Pages/Self hosting/Docker",
  component: Component,
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
