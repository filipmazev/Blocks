import { IIconData } from '@filip.mazev/blocks/icons';

import { INavMeta } from './inav-meta.interface';

/**
 * Describes the navigation item contract.
 */
export interface INavigationItem {
  /** Stable identifier used to distinguish this item from its peers. */
  id: string;
  /** Router destination associated with this navigation entry. */
  route: string;
  /** Visible or resolved label presented to the user. */
  label: string;
  /** Optional icon rendered alongside this item. */
  icon?: IIconData;
  /** Section to which this navigation item belongs. Optional. */
  section?: string;
  /** Whether this item currently participates in rendering or presentation. */
  visible: boolean;
  /** Optional breadcrumb inclusion from route metadata. Defaults to the section setting, then true. */
  showInBreadcrumbs?: boolean;
  /** Nested navigation items below this entry. Optional. */
  children?: INavigationItem[];
  /** Data supplied to, or returned from, the owning component. Optional. */
  data?: INavMeta;
}
