/** Stable identity of an item across append, filtering, and responsive regrouping. */
export type VirtualItemKey = string | number;

/** Row-based responsive grid or ordinary vertical list rendering. */
export type VirtualCollectionLayout = 'grid' | 'list';

/**
 * Extract a unique, stable item identity. Index is supplied for application integration, not recommended as identity for changing collections.
 * @typeParam T - Consumer-owned item data.
 */
export type VirtualTrackBy<T> = (item: T, index: number) => VirtualItemKey;
