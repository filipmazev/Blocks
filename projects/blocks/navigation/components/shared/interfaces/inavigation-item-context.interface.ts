import { INavigationItem } from '../../../interfaces/inavigation-item.interface';

/** Item presentation context. The surrounding link/button retains routing, semantics and keyboard behavior. */
export interface INavigationItemContext {
  /** Resolved navigation item. */
  $implicit: INavigationItem;
  /** Whether this is the active Angular route. */
  active: boolean;
  /** Whether only the item's icon should be displayed. */
  collapsed: boolean;
}
