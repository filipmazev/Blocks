/** Translated navigation labels recomputed when configuration or the active language changes. */
export interface INavigationStateServiceTextState {
  /** Accessible name of the navigation region after translation. */
  ariaLabel: string;
  /** Translated placeholder displayed in the navigation search field. */
  searchPlaceholder: string;
  /** Accessible name of the navigation search field after translation. */
  searchLabel: string;
  /** Accessible name of the action that clears the search query. */
  clearSearchLabel: string;
  /** Translated status text displayed when no navigation items match. */
  emptyText: string;
  /** Accessible name of the action that opens the navigation panel. */
  openLabel: string;
  /** Accessible name of the action that closes the navigation panel. */
  closeLabel: string;
  /** Accessible name of the action that collapses the navigation rail. */
  collapseLabel: string;
  /** Accessible name of the action that expands the navigation rail. */
  expandLabel: string;
  /** Translated label identifying a nested navigation menu. */
  submenuLabel: string;
  /** Accessible name of the action returning to the previous navigation level. */
  backLabel: string;
  /** Accessible name of the current navigation path. */
  pathLabel: string;
  /** Translated label identifying search results. */
  resultLabel: string;
}
