import { INavigationItem } from '../../../interfaces/inavigation-item.interface';

/** Internal disclosure request. The owner coordinates the single submenu surface. */
export interface ISideNavExpandRequest {
  item: INavigationItem;
  origin: HTMLElement;
  keyboard: boolean;
  inLevel: boolean;
}
