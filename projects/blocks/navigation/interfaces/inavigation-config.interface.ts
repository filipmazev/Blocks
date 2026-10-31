import { INavigationItem } from './inavigation-item.interface';
import { INavigationSectionConfig } from './inavigation-section-config.interface';
import { ITopNavConfig } from '../components/top-nav/interfaces/itop-nav-config.interface';
import { ISideNavConfig } from '../components/side-nav/interfaces/iside-nav-config.interface';

/** Application-wide navigation defaults supplied with provideNavigation. */
export interface INavigationConfig {
  /** Optional ordered sections. Unlisted section IDs are appended automatically. */
  sections?: readonly INavigationSectionConfig[];
  /** Include hidden routes in breadcrumbs. Defaults to false. */
  includeHiddenInBreadcrumbs?: boolean;
  /** Optional custom sibling ordering; defaults to metadata order, then label. */
  sortItems?: (a: INavigationItem, b: INavigationItem) => number;
  /** Optional shared side-nav defaults, overridden by an instance's config. */
  sideNav?: ISideNavConfig;
  /** Optional shared top-nav defaults, overridden by an instance's config. */
  topNav?: ITopNavConfig;
}
