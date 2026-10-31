import { INavigationSearchEntry } from './inavigation-search-entry.interface';

/** Internal flat search derivation; paths contain stable navigation item IDs. */
export interface INavigationSearchResult {
  entries: readonly INavigationSearchEntry[];
  label?: string;
}
