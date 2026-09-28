/** Fallback for ordinary sync conflicts after automatic text merging. */
export type SyncConflictPolicy = "conflict-copy" | "prefer-remote";

export function normalizeSyncConflictPolicy(value: unknown): SyncConflictPolicy {
  return value === "prefer-remote" ? "prefer-remote" : "conflict-copy";
}
