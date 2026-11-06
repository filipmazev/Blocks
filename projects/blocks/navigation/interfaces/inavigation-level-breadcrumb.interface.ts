/** Internal ancestor action that returns to a browsing level without navigating to a page. */
export interface INavigationLevelBreadcrumb {
  /** Visible or resolved label presented to the user. */
  label: string;
  /** Ordered navigation item IDs leading to this entry. */
  path: readonly string[];
  /** Section root to reopen, if it was explicitly entered; absent returns to the full navigation root. */
  section?: string;
}
