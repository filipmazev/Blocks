import { INavigationItem } from './inavigation-item.interface';

/** One ranked search result with its complete ancestor context. */
export interface INavigationSearchEntry {
  /** Navigation item associated with this request or result. */
  item: INavigationItem;
  /** Ordered navigation item IDs leading to this entry. */
  path: readonly string[];
  /** Resolved contextual text used when matching a navigation search. */
  context: string;
  /** Search relevance score used when ordering matching entries. */
  score: number;
}
