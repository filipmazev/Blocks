import { INavigationTreeGroup } from '../../../interfaces/inavigation-tree-group.interface';

/** Internal search derivation; all paths contain stable navigation item IDs. */
export interface ISideNavSearchResult {
  groups: readonly INavigationTreeGroup[];
  path: readonly string[];
  target?: string;
  label?: string;
}
