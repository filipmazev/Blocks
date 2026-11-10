import type { BxPlacement, ResolvableText } from '@filip.mazev/blocks/core';

/** Shared overflow behavior for route breadcrumbs, page containers, navigation levels, and search-result paths. */
export interface IBreadcrumbTrailConfig {
  /** Maximum visible entries, excluding overflow. Defaults to 3; finite values round down and clamp to 2. Null removes this limit; compact trails still fit their available width. */
  maxVisibleItems?: number | null;
  /** Translatable accessible name of the overflow action and its menu. Defaults to Show hidden breadcrumbs. */
  overflowLabel?: ResolvableText;
  /** Optional translated action text replacing the horizontal ellipsis icon. Omission retains the icon; empty text still retains the accessible name. */
  overflowText?: ResolvableText;
  /** Allow pointer hover to open hidden ancestors. Defaults to true; click, touch, and keyboard opening remain available when false. */
  openOnHover?: boolean;
  /** Preferred overflow-menu placement. Defaults to bottom; shared overlay positioning flips it to fit the viewport. */
  placement?: BxPlacement;
}
