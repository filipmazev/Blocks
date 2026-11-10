import type { ResolvableText } from '@filip.mazev/blocks/core';

/** One route, browsing action, or descriptive entry in a breadcrumb trail. */
export interface IBreadcrumbTrailItem {
  /** Visible label; plain text and translation keys update with the active adapter language. */
  label: ResolvableText;
  /** Optional Angular router destination. Omission renders text unless action is true. Empty strings remain valid router destinations. */
  route?: string;
  /** Render a button that emits selected instead of navigating. Defaults to false; takes precedence over route. */
  action?: boolean;
  /** Prevent activation while preserving the label. Defaults to false. */
  disabled?: boolean;
}
