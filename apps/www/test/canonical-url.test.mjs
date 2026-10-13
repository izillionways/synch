import assert from "node:assert/strict";
import { test } from "node:test";
import { canonicalRedirectUrl } from "../src/lib/canonical-url.ts";

test("normalizes protocol, hostname and page path in one hop, preserving query strings", () => {
  for (const input of [
    "http://www.synch.run/ko?ref=test%2Fvalue",
    "http://synch.run/ko?ref=test%2Fvalue",
    "https://www.synch.run/ko?ref=test%2Fvalue",
    "https://synch.run/ko?ref=test%2Fvalue",
  ]) {
    const target = canonicalRedirectUrl(new URL(input));
    assert.equal(target?.href, "https://synch.run/ko/?ref=test%2Fvalue");
    assert.equal(canonicalRedirectUrl(target), null);
  }
});

test("canonical pages and static files do not redirect", () => {
  for (const path of ["/", "/ko/", "/blog/free-obsidian-sync/", "/robots.txt", "/sitemap-0.xml", "/_astro/site.css"]) {
    assert.equal(canonicalRedirectUrl(new URL(`https://synch.run${path}`)), null);
  }
});

test("HTTP root and files move to HTTPS without adding a slash to files", () => {
  for (const path of ["/", "/robots.txt", "/sitemap-index.xml", "/_astro/site.js"]) {
    assert.equal(canonicalRedirectUrl(new URL(`http://synch.run${path}`))?.href, `https://synch.run${path}`);
  }
});

test("development and preview domains keep their protocol and host", () => {
  for (const origin of ["http://localhost:4321", "http://127.0.0.1:4321", "http://[::1]:4321", "https://synch-www.example.workers.dev"]) {
    assert.equal(canonicalRedirectUrl(new URL(`${origin}/ko`))?.href, `${origin}/ko/`);
    assert.equal(canonicalRedirectUrl(new URL(`${origin}/ko/`)), null);
  }
});

test("Astro internal endpoints keep their path", () => {
  for (const path of ["/__astro_static_paths", "/__astro_prerender", "/__astro_static_images", "/__astro_image_transform", "/_image", "/_actions/checkout", "/@vite/client", "/.well-known/security.txt"]) {
    assert.equal(canonicalRedirectUrl(new URL(`http://localhost:4321${path}`)), null);
  }
});

test("localized legal aliases go directly to the shared canonical document", () => {
  for (const locale of ["ko", "ja", "de", "zh-cn", "zh-tw"]) {
    for (const document of ["terms", "privacy"]) {
      for (const slash of ["", "/"]) {
        const target = canonicalRedirectUrl(new URL(`http://www.synch.run/${locale}/${document}${slash}?ref=footer`));
        assert.equal(target?.href, `https://synch.run/${document}/?ref=footer`);
        assert.equal(canonicalRedirectUrl(target), null);
      }
    }
  }
});
