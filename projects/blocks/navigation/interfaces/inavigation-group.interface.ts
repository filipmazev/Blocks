import { INavigationItem } from './inavigation-item.interface';

/** A UI section containing flat, visible menu entries. */
export interface INavigationGroup {
  id: string;
  title: string;
  items: INavigationItem[];
}
