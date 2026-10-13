import { afterEach, expect, it, vi } from "vitest";
import { ContextRequestCache } from "./context-request-cache";

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}

function fixture() {
  const context = { key: "account-a" };
  const onInvalidate = vi.fn();
  const onSettled = vi.fn();
  const onSuccess = vi.fn();
  const onError = vi.fn();
  const cache = new ContextRequestCache({
    getContextKey: () => context.key,
    intervalMs: 30_000,
    onInvalidate,
    onSettled,
  });
  return { cache, context, onInvalidate, onSettled, onSuccess, onError };
}

afterEach(() => vi.restoreAllMocks());

it("deduplicates even forced requests and expires the cache from completion", async () => {
  const now = vi.spyOn(Date, "now").mockReturnValue(0);
  const { cache, onSuccess, onError } = fixture();
  const result = deferred<string>();
  const load = vi.fn(() => result.promise);
  const pending = cache.run(load, onSuccess, onError);
  expect(cache.run(load, onSuccess, onError, true)).toBe(pending);
  now.mockReturnValue(10_000);
  result.resolve("loaded");
  await pending;
  now.mockReturnValue(39_999);
  await cache.run(load, onSuccess, onError);
  expect(load).toHaveBeenCalledTimes(1);
  now.mockReturnValue(40_000);
  await cache.run(load, onSuccess, onError);
  expect(load).toHaveBeenCalledTimes(2);
  await cache.run(load, onSuccess, onError, true);
  expect(load).toHaveBeenCalledTimes(3);
});

it("throttles failures and allows a forced retry after a synchronous loader error", async () => {
  const { cache, onSuccess, onError } = fixture();
  const load = vi.fn((): Promise<string> => { throw new Error("offline"); });
  await cache.run(load, onSuccess, onError);
  await cache.run(load, onSuccess, onError);
  expect(load).toHaveBeenCalledTimes(1);
  await cache.run(load, onSuccess, onError, true);
  expect(load).toHaveBeenCalledTimes(2);
  expect(onError).toHaveBeenCalledTimes(2);
  expect(onSuccess).not.toHaveBeenCalled();
});

it.each(["success", "failure"])("discards a late %s when context changes without another read", async (outcome) => {
  const { cache, context, onSuccess, onError, onSettled } = fixture();
  const result = deferred<string>();
  const pending = cache.run(() => result.promise, onSuccess, onError);
  context.key = "account-b";
  if (outcome === "success") result.resolve("old");
  else result.reject(new Error("old"));
  await pending;
  expect(onSuccess).not.toHaveBeenCalled();
  expect(onError).not.toHaveBeenCalled();
  expect(onSettled).not.toHaveBeenCalled();
});

it.each(["invalidate", "switch-away-and-back"])("keeps the newer request pending after %s", async (action) => {
  const { cache, context, onSuccess, onError, onSettled } = fixture();
  const old = deferred<string>();
  const current = deferred<string>();
  const previous = cache.run(() => old.promise, onSuccess, onError);
  if (action === "invalidate") cache.invalidate();
  else {
    context.key = "account-b";
    cache.syncContext();
    context.key = "account-a";
  }
  const load = vi.fn(() => current.promise);
  const pending = cache.run(load, onSuccess, onError);
  old.resolve("old");
  await previous;
  expect(onSuccess).not.toHaveBeenCalled();
  expect(onSettled).not.toHaveBeenCalled();
  expect(cache.run(load, onSuccess, onError)).toBe(pending);
  expect(load).toHaveBeenCalledTimes(1);
  current.resolve("current");
  await pending;
  expect(onSuccess).toHaveBeenCalledExactlyOnceWith("current");
  expect(onSettled).toHaveBeenCalledTimes(1);
});
