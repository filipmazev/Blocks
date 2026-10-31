import { INavigationItem } from '../../../interfaces/inavigation-item.interface';

/** One ranked search result with its complete ancestor context. */
export interface INavigationSearchEntry {
  item: INavigationItem;
  path: readonly string[];
  context: string;
  score: number;
}
