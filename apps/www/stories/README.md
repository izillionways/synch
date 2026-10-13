# Website Storybook

Run from the repository root:

```sh
pnpm -C apps/www storybook             # http://localhost:6007
pnpm -C apps/www build:storybook       # apps/www/storybook-static
pnpm -C apps/www typecheck:storybook
```

This catalog is for manual English visual review. The viewport menu offers
Desktop (1440 × 900) and Mobile (390 × 844). The addon panel is initially hidden
to leave room for whole pages; open it from the toolbar when needed.

Stories render the existing Astro pages/components, Tailwind stylesheet, and
Markdown/MDX content. Coverage includes home, pricing, Cloudflare and Docker
self-hosting guides, blog index/article/empty state, legal pages, 404, billing,
billing confirmation, header, footer, and secret generator. Billing scenarios
cover free, Starter, Plus, annual/monthly, canceling, member access, loading,
signed-out, and error states. Delayed confirmation uses the production 12-second
fallback; let its interaction finish before inspecting it.

MSW supplies browser API data. Unmocked API requests (including billing mutations)
return a preview error instead of reaching a backend. The Storybook config also
clears `PUBLIC_API_URL` for its browser and server renderers, so local `.env`
settings cannot select a production billing API. No credentials are required.
The home page's demo video still uses its public external player/CDN.

Use the sidebar to move between pages. Normal page links are unchanged, and the
Astro container uses a synthetic request URL, so navigation is not an end-to-end
routing test. Reload story resets the current scenario. Static builds prerender
Astro props: use the dev server for editable Controls.

`.storybook/main.ts` explicitly registers MDX and its server renderer because
framework 1.12's static prerender pipeline does not inherit project integrations.
Remove this adapter once upstream supports that pipeline. Content collections
are read from the real project; `BlogPost.astro` chooses one English article as
a representative detail page. `types.ts` provides CSF3 aliases for the framework's
exported renderer type.

The MSW worker is in `.storybook/public`, separate from production assets.
Regenerate it after an MSW upgrade:

```sh
pnpm -C apps/www exec msw init .storybook/public --save
```

The API UI has a separate Storybook on port 6006:
`pnpm -C apps/api storybook`. Neither catalog adds screenshot baselines or CI
visual regression checks.
