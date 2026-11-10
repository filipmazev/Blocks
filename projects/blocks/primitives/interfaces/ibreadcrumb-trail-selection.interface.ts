import type { IBreadcrumbTrailItem } from './ibreadcrumb-trail-item.interface';

/** Activation of a visible or overflow breadcrumb, retaining its position in the complete input trail. */
export interface IBreadcrumbTrailSelection {
  /** Original application-owned item; the component does not mutate it. */
  item: IBreadcrumbTrailItem;
  /** Zero-based position in the complete items input, including entries hidden in the overflow menu. */
  index: number;
  /** Native activation event; detail is zero for keyboard-generated clicks. */
  event: MouseEvent;
}
