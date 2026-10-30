import { INavigationItem } from './inavigation-item.interface';
import { INavigationSectionConfig } from './inavigation-section-config.interface';

/** A resolved section retaining nested items for hierarchical navigation. */
export interface INavigationTreeGroup extends Omit<INavigationSectionConfig, 'title'> {
  /** Translated heading. */
  title: string;
  /** Visible roots in this section; same-section descendants remain nested. */
  items: INavigationItem[];
}
