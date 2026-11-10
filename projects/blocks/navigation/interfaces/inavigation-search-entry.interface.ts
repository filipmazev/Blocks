import type { IBreadcrumbTrailItem } from '@filip.mazev/blocks/primitives';

import { INavigationItem } from './inavigation-item.interface';

/** One ranked search result with its complete ancestor context. */
export interface INavigationSearchEntry {
  /** Navigation item associated with this request or result. */
  item: INavigationItem;
  /** Ordered navigation item IDs leading to this entry. */
  path: readonly string[];
  /** Resolved contextual text used when matching a navigation search. */
  context: string;
  /** Optional structured parent path with native ancestor destinations; context remains available for existing text-only consumers. */
  breadcrumbs?: readonly IBreadcrumbTrailItem[];
  /** Search relevance score used when ordering matching entries. */
  score: number;
}
