import { INavigationLevelBreadcrumb } from './inavigation-level-breadcrumb.interface';

/** Internal request to return to an ancestor panel while preserving keyboard focus and scroll bookmarks. */
export interface INavigationLevelRequest {
  /** Breadcrumb identifying the requested navigation level. */
  breadcrumb: INavigationLevelBreadcrumb;
  /** Whether the request originated from keyboard interaction. */
  keyboard: boolean;
}
