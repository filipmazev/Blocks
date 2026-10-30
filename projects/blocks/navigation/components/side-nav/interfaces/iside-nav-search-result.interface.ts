import { ISideNavSearchEntry } from './iside-nav-search-entry.interface';

/** Internal flat search derivation; paths contain stable navigation item IDs. */
export interface ISideNavSearchResult {
  entries: readonly ISideNavSearchEntry[];
  target?: string;
  label?: string;
}
