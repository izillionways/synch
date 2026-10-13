import type { Meta, StoryObj } from "./types";
import Component from "../src/components/Header.astro";
import { json, session } from "./mocks";

const meta = {
  title: "Components/Header",
  component: Component,
  args: { locale: "en" },
  parameters: { layout: "padded" },
} satisfies Meta;
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const SignedIn: Story = {
  parameters: { msw: { handlers: [json("/api/auth/get-session", session)] } },
};
