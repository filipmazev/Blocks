import type { IIconData } from '@filip.mazev/blocks/icons';

import { INavigationItem } from '@navigation/interfaces/inavigation-item.interface';

/** Resolved groups state used by NavigationStateService. */
export interface INavigationStateServiceGroupsState {
  /** Resolved items value. */
  items: INavigationItem[];
  /** Resolved title value. */
  title: string;
  /** Resolved icon value. */
  icon?: IIconData | undefined;
  /** Resolved id value. */
  id: string;
  /** Resolved order value. */
  order?: number | undefined;
  /** Resolved collapsible value. */
  collapsible?: boolean | undefined;
  /** Resolved collapsed value. */
  collapsed?: boolean | undefined;
  /** Resolved show In Breadcrumbs value. */
  showInBreadcrumbs?: boolean | undefined;
}
