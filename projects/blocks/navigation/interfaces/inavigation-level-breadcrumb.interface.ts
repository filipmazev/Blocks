/** Internal ancestor action that opens a browsing panel without navigating to a page. */
export interface INavigationLevelBreadcrumb {
  /** Visible or resolved label presented to the user. */
  label: string;
  /** Ordered navigation item IDs leading to this entry. */
  path: readonly string[];
  /** Section to which this navigation item belongs. Optional. */
  section?: string;
}
