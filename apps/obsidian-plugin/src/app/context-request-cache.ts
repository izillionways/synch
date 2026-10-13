interface ContextRequestCacheDeps {
  getContextKey(): string;
  onInvalidate(): void;
  onSettled(): void;
  intervalMs: number;
}

/** Coordinates requests without owning their domain data or error policy. */
export class ContextRequestCache {
  private contextKey: string | undefined;
  private generation = 0;
  private checkedAt: number | null = null;
  private pending: Promise<void> | null = null;

  constructor(private readonly deps: ContextRequestCacheDeps) {}

  syncContext(): void {
    const next = this.deps.getContextKey();
    if (next === this.contextKey) return;
    this.contextKey = next;
    this.invalidate();
  }

  invalidate(): void {
    this.generation += 1;
    this.checkedAt = null;
    this.pending = null;
    this.deps.onInvalidate();
  }

  run<T>(
    load: () => Promise<T>,
    onSuccess: (value: T) => void,
    onError: (error: unknown) => void,
    force = false,
  ): Promise<void> {
    this.syncContext();
    if (this.pending) return this.pending;
    if (!force && this.checkedAt !== null &&
      Date.now() - this.checkedAt < this.deps.intervalMs) {
      return Promise.resolve();
    }

    const generation = this.generation;
    const isCurrent = () => {
      this.syncContext();
      return generation === this.generation;
    };
    this.pending = (async () => {
      try {
        const value = await (async () => load())();
        if (isCurrent()) onSuccess(value);
      } catch (error) {
        if (isCurrent()) onError(error);
      } finally {
        // An invalidated request must not clear a newer request's pending state.
        if (isCurrent()) {
          this.checkedAt = Date.now();
          this.pending = null;
          this.deps.onSettled();
        }
      }
    })();
    return this.pending;
  }
}
