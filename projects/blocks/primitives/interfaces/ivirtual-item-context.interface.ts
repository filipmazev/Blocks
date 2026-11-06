/**
 * Template data for a mounted virtual item. Indices/count describe the supplied items, not an entire remote result set.
 * @typeParam T - Consumer-owned item data.
 */
export interface IVirtualItemContext<T> {
  /** Current item supplied through let-item. */
  $implicit: T;
  /** Zero-based index in the supplied collection. */
  index: number;
  /** Number of supplied items, including temporarily unmounted items. */
  count: number;
}
