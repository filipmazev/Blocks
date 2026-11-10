import type { IBreadcrumbTrailItem } from './ibreadcrumb-trail-item.interface';

/** Internal translated presentation retaining the original breadcrumb and its complete-trail index. */
export interface IResolvedBreadcrumbTrailItem {
  /** Unmodified input breadcrumb. */
  item: IBreadcrumbTrailItem;
  /** Translated display label. */
  label: string;
  /** Position in the full input trail. */
  index: number;
}
