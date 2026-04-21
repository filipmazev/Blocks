import { INavigationItem } from "./inavigation-item.interface";
import { INavigationSectionConfig } from "./inavigation-section-config.interface";

export interface INavigationConfig {
  sections?: INavigationSectionConfig[];
  includeHiddenInBreadcrumbs?: boolean;
  sortItems?: (a: INavigationItem, b: INavigationItem) => number;
}