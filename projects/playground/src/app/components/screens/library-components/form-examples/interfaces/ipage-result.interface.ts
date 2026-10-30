export interface IPageResult<T> {
  items: readonly T[];
  hasMore: boolean;
  total: number;
  /** Total selectable results in the entire filtered scope, excluding disabled options and groups. */
  selectableTotal: number;
}
