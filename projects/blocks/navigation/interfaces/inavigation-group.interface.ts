import { INavigationItem } from './inavigation-item.interface';

/** A UI section containing flat, visible menu entries. */
export interface INavigationGroup {
  /** Stable identifier used to distinguish this item from its peers. */
  id: string;
  /** Title or heading displayed for this item. */
  title: string;
  /** Ordered items belonging to this group. */
  items: INavigationItem[];
}
