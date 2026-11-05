import { INavigationSearchEntry } from './inavigation-search-entry.interface';

/** Internal flat search derivation; paths contain stable navigation item IDs. */
export interface INavigationSearchResult {
  /** Navigation search entries contained in this result. */
  entries: readonly INavigationSearchEntry[];
  /** Visible or resolved label presented to the user. Optional. */
  label?: string;
}
