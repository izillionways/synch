import mdx from "@astrojs/mdx";
import type { Integration } from "@storybook-astro/framework/integrations";
import type { StorybookConfig } from "@storybook-astro/framework";

// The Astro renderer has a separate SSR Vite instance. Process environment
// overrides also reach that instance, unlike preview-only Vite defines.
process.env.PUBLIC_API_URL = "";

// Framework 1.12 does not auto-load MDX into its static prerender server.
// Register it explicitly in every renderer pipeline; remove this adapter when
// upstream includes project integrations in createStorySsrViteServer.
const mdxIntegration: Integration = {
  name: "mdx",
  dependencies: ["@astrojs/mdx"],
  options: {},
  renderer: {
    server: { name: "astro:jsx", entrypoint: "@astrojs/mdx/server.js" },
  },
  storybookEntryPreview: undefined,
  resolveClient: () => undefined,
  loadIntegration: async () => mdx(),
};

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.ts"],
  framework: {
    name: "@storybook-astro/framework",
    options: { integrations: [mdxIntegration] },
  },
  staticDirs: ["./public", "../public"],
  core: { disableTelemetry: true },
  async viteFinal(config) {
    // Keep previews independent of a developer's production API environment.
    return {
      ...config,
      define: {
        ...config.define,
        "import.meta.env.PUBLIC_API_URL": JSON.stringify(""),
      },
    };
  },
};
export default config;
