import { INavigationItem } from './inavigation-item.interface';

/** Internal disclosure request. The owner coordinates the single submenu surface. */
export interface INavigationExpandRequest {
  /** Navigation item associated with this request or result. */
  item: INavigationItem;
  /** Element from which the navigation interaction originated. */
  origin: HTMLElement;
  /** Whether the request originated from keyboard interaction. */
  keyboard: boolean;
  /** Whether the interaction remains within the current navigation level. */
  inLevel: boolean;
}
