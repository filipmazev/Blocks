import type { ResolvableText } from '@filip.mazev/blocks/core';

import type { IModalHeaderPatch } from './imodal-header-patch.interface';
import type { IModalStylePatch } from './imodal-style-patch.interface';

/** Runtime changes supported by an existing modal. Omitted and undefined properties retain their current values. */
export interface IModalPatch {
  /** Replace the translatable close-action name without changing visibility, guards, or lifetime. Undefined retains the current label. */
  closeLabel?: ResolvableText;
  /** Partial heading update; null removes the configured heading and icon. Custom header slots remain mounted. */
  header?: IModalHeaderPatch | null;
  /** Prevent user dismissal through Escape, the close button, backdrop, and swipe. Programmatic close remains available. */
  disableClose?: boolean;
  /** Prevent backdrop dismissal without changing other dismissal routes. */
  disableCloseOnBackdropClick?: boolean;
  /** Prevent navigation-triggered dismissal. */
  disableCloseOnNavigation?: boolean;
  /** Apply the existing close guard only to cancellation when true, or also to confirmation when false. */
  closeGuardOnlyOnCancel?: boolean;
  /** Merge presentation overrides without changing layout, mounting, or entrance/exit animation. */
  style?: IModalStylePatch;
  /** Replace content classes; null clears them. */
  contentClasses?: string | null;
  /** Replace inline content styles; null clears them. */
  contentStyles?: string | null;
}
