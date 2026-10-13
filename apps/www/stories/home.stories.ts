import type { Meta, StoryObj } from "./types";
import Component from "../src/components/HomePage.astro";
import { json, session } from "./mocks";

const meta = {
  title: "Pages/Home",
  component: Component,
  args: { locale: "en" },
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const SignedIn: Story = {
  parameters: { msw: { handlers: [json("/api/auth/get-session", session)] } },
};
