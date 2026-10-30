export interface IPageResult<T> {
  items: readonly T[];
  hasMore: boolean;
  total: number;
}
