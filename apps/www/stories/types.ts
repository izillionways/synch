import type { AstroRenderer } from "@storybook-astro/framework";
import type {
  ComponentAnnotations,
  StoryAnnotations,
} from "storybook/internal/types";

// The Astro framework exports its renderer but no CSF3 Meta/StoryObj aliases.
export type Meta = ComponentAnnotations<AstroRenderer>;
export type StoryObj = StoryAnnotations<AstroRenderer>;
