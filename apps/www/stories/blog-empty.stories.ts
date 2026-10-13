import type { Meta, StoryObj } from "./types";
import BlogIndexPage from "../src/components/BlogIndexPage.astro";
const meta = {
  title: "Pages/Blog/Empty",
  component: BlogIndexPage,
  args: { locale: "en", posts: [] },
} satisfies Meta;
export default meta;
export const Empty: StoryObj = {};
