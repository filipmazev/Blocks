/**
 * Keep at least one named tag visible before the overflow count.
 *
 * @param value - Consumer-provided selected-tag limit; invalid or absent values use the shared default.
 */
export function visibleTagLimit(value: number | string): number {
  const count = Number(value);

  return Number.isFinite(count) ? Math.max(1, Math.floor(count)) : 1;
}
