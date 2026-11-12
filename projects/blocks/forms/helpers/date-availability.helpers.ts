import type { IDateMetadata, IDateRange } from '@filip.mazev/blocks/core';

/**
 * Retain verified dates while replacing metadata returned by a newer request in the same calendar context.
 * @param current - Previously loaded dates; undefined starts an empty collection.
 * @param incoming - New metadata, whose entries replace previous entries with the same date.
 * @param range - Refreshed request range; previous entries inside it are replaced, including an empty response.
 * @returns A new collection without mutating either source.
 */
export function mergeDateMetadata(
  current: readonly IDateMetadata[] | undefined,
  incoming: readonly IDateMetadata[],
  range: IDateRange
): readonly IDateMetadata[] {
  const dates = new Map(
    current?.filter((entry) => !range.start || !range.end || entry.date < range.start || entry.date > range.end).map((entry) => [entry.date, entry])
  );

  for (const entry of incoming) dates.set(entry.date, entry);

  return [...dates.values()];
}
