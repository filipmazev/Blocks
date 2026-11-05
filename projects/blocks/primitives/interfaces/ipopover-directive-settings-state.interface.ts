import type { BxPlacement, ResolvableText } from '@filip.mazev/blocks/core';

/** Resolved settings state used by PopoverDirective. */
export interface IPopoverDirectiveSettingsState {
  /** Resolved placement value. */
  placement: BxPlacement;
  /** Resolved offset value. */
  offset: number;
  /** Resolved aria Label value. */
  ariaLabel: ResolvableText;
  /** Whether auto Focus is enabled in the resolved state. */
  autoFocus: boolean;
  /** Whether close On Outside is enabled in the resolved state. */
  closeOnOutside: boolean;
  /** Whether close On Escape is enabled in the resolved state. */
  closeOnEscape: boolean;
  /** Whether close On Focus Outside is enabled in the resolved state. */
  closeOnFocusOutside: boolean;
}
