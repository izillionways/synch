import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import vm from "node:vm";

const page = await readFile(new URL("../src/components/BillingSuccessPage.astro", import.meta.url), "utf8");
// Exercise the actual inline script, including late responses after removal.
const script = page.match(/<script is:inline type="module">([\s\S]*?)<\/script>/)[1];
const flush = () => new Promise(resolve => setImmediate(resolve));

function setup(fetchStatus) {
  const timers = new Map();
  const requests = [];
  const elements = new Map();
  for (const selector of ["#message", "#actions", "#spinner", "#actions a"]) {
    const classes = new Set(selector === "#actions" ? ["hidden"] : []);
    elements.set(selector, {
      textContent: "Waiting", href: "",
      classList: { add: name => classes.add(name), remove: name => classes.delete(name), contains: name => classes.has(name) },
    });
  }
  const location = { origin: "https://preview.example", search: "?organizationId=studio", href: "https://preview.example/billing/success" };
  let component;
  let time = 0;
  const context = vm.createContext({
    URL, URLSearchParams, AbortController,
    Date: { now: () => time },
    HTMLElement: class {
      dataset = { apiUrl: "", fallbackMessage: "Still waiting", vaultsUrl: "https://preview.example/vaults" };
      querySelector(selector) { return elements.get(selector); }
    },
    customElements: { get: () => component, define: (_, value) => { component = value; } },
    location,
    window: {
      location,
      setTimeout: callback => { const id = timers.size + 1; timers.set(id, callback); return id; },
      clearTimeout: id => timers.delete(id),
    },
    fetch: async (url, options) => {
      requests.push({ url, ...options });
      return { ok: true, json: () => fetchStatus() };
    },
  });
  vm.runInContext(script, context);
  const element = new component();
  element.connectedCallback();
  return { element, elements, requests, timers, location, advance: value => { time = value; } };
}

test("disconnect cancels the next poll and aborts its request scope", async () => {
  const state = setup(async () => ({ active: false }));
  await flush();
  assert.equal(state.timers.size, 1);
  state.element.disconnectedCallback();
  assert.equal(state.timers.size, 0);
  assert.equal(state.requests[0].signal.aborted, true);
});

test("a late active response cannot redirect after disconnect or affect a remount", async () => {
  let resolve;
  const pending = new Promise(done => { resolve = done; });
  let calls = 0;
  const state = setup(() => ++calls === 1 ? pending : Promise.resolve({ active: false }));
  await flush();
  state.element.disconnectedCallback();
  state.element.connectedCallback();
  await flush();
  resolve({ active: true });
  await flush();
  assert.equal(state.location.href, "https://preview.example/billing/success");
  assert.equal(state.timers.size, 1, "only the remounted poll schedules a timer");
  assert.equal(state.requests[1].signal.aborted, false);
});

test("connected confirmation still reveals the fallback and redirects on activation", async () => {
  let active = false;
  const state = setup(async () => ({ active }));
  await flush();
  const tick = async () => {
    const [id, callback] = state.timers.entries().next().value;
    state.timers.delete(id);
    await callback();
  };
  state.advance(13000);
  await tick();
  assert.equal(state.elements.get("#actions").classList.contains("hidden"), false);
  assert.equal(state.elements.get("#message").textContent, "Still waiting");
  active = true;
  await tick();
  assert.equal(state.location.href, "https://preview.example/vaults?organizationId=studio");
  assert.equal(state.timers.size, 0);
});
