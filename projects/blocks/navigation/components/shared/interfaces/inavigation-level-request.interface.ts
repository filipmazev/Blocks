import { INavigationLevelBreadcrumb } from './inavigation-level-breadcrumb.interface';

/** Internal request to return to an ancestor panel while preserving keyboard focus and scroll bookmarks. */
export interface INavigationLevelRequest {
  breadcrumb: INavigationLevelBreadcrumb;
  keyboard: boolean;
}
