import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import { test } from "node:test";

// Keep the adapter boundary observable while exercising the real Worker entrypoint.
const adapterUrl = `data:text/javascript,${encodeURIComponent('export function handle(request) { return new Response(request.url, { headers: { "x-adapter": "called" } }); }')}`;
const hooks = registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "@astrojs/cloudflare/handler") {
      return { url: adapterUrl, shortCircuit: true };
    }
    if (specifier === "./lib/canonical-url") {
      return { url: new URL("../src/lib/canonical-url.ts", import.meta.url).href, shortCircuit: true };
    }
    return nextResolve(specifier, context);
  },
});
const { default: worker } = await import("../src/worker.ts");
hooks.deregister();

test("Worker redirects GET, HEAD and POST before the adapter handles assets", async () => {
  for (const method of ["GET", "HEAD", "POST"]) {
    const response = await worker.fetch(new Request("http://www.synch.run/ko?ref=search", { method }), {}, {});
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), "https://synch.run/ko/?ref=search");
    assert.equal(response.headers.has("x-adapter"), false);
  }
});

test("canonical pages, static assets and build RPCs reach the adapter", async () => {
  for (const url of ["https://synch.run/ko/", "https://synch.run/robots.txt", "http://localhost:4321/__astro_prerender"]) {
    const response = await worker.fetch(new Request(url), {}, {});
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("x-adapter"), "called");
    assert.equal(await response.text(), url);
  }
});
