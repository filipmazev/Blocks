import { IBreadcrumbItem } from "./ibreadcrumb-item.interface";
import { INavigationItem } from "./inavigation-item.interface";

export interface IResolvedNavigation {
  current?: INavigationItem;
  breadcrumbs: IBreadcrumbItem[];
}