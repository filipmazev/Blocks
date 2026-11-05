/**
 * Summaries never abbreviate based on a configured threshold below two items.
 *
 * @param value - Requested multiselect summary count; invalid values resolve to the shared supported threshold.
 */
export function summaryThreshold(value: number | string): number {
  const count = Number(value);

  return Number.isFinite(count) ? Math.max(2, Math.floor(count)) : 2;
}
