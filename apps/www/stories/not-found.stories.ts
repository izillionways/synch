import type { Meta, StoryObj } from "./types";
import Component from "../src/components/NotFoundPage.astro";

const meta = {
  title: "Pages/Not found",
  component: Component,
  args: { locale: "en" },
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
