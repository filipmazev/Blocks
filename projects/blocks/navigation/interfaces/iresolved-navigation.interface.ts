import { IBreadcrumbItem } from './ibreadcrumb-item.interface';
import { INavigationItem } from './inavigation-item.interface';

/**
 * Describes the resolved navigation contract.
 */
export interface IResolvedNavigation {
  /** Navigation item resolved for the active route. Optional. */
  current?: INavigationItem;
  /** Ordered breadcrumbs leading to the active navigation item. */
  breadcrumbs: IBreadcrumbItem[];
}
