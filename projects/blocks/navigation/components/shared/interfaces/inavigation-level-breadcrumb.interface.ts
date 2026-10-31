/** Internal ancestor action that opens a browsing panel without navigating to a page. */
export interface INavigationLevelBreadcrumb {
  label: string;
  path: readonly string[];
  section?: string;
}
