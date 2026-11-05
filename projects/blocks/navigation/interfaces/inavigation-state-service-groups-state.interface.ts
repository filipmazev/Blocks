import type { IIconData } from '@filip.mazev/blocks/icons';

import { INavigationItem } from '@navigation/interfaces/inavigation-item.interface';

/** Resolved navigation section with translated presentation and visible items. */
export interface INavigationStateServiceGroupsState {
  /** Visible navigation roots in this resolved section. */
  items: INavigationItem[];
  /** Translated section heading. */
  title: string;
  /** Optional section icon inherited from its configuration. */
  icon?: IIconData | undefined;
  /** Stable section identifier used by browsing and expansion state. */
  id: string;
  /** Optional section sort position; omission preserves the shared ordering policy. */
  order?: number | undefined;
  /** Optional permission to collapse this section. */
  collapsible?: boolean | undefined;
  /** Optional initial section-collapse preference. */
  collapsed?: boolean | undefined;
  /** Optional inclusion of this section in breadcrumb navigation. */
  showInBreadcrumbs?: boolean | undefined;
}
