import { BxPlacement, ResolvableText } from '@filip.mazev/blocks/core';

/** Instance values override BX_POPOVER_DEFAULTS, then the documented library defaults. */
export interface IPopoverConfig {
  /** Optional preferred placement. Defaults to bottom; flips to stay in the viewport. */
  placement?: BxPlacement;
  /** Optional gap from the trigger in pixels. Defaults to 8. */
  offset?: number;
  /** Optional dialog name, supporting translation keys. Defaults to Details. */
  ariaLabel?: ResolvableText;
  /** Optional focus transfer to the first tabbable element or the panel. Defaults to true. */
  autoFocus?: boolean;
  /** Optional outside-pointer dismissal. Defaults to true. */
  closeOnOutside?: boolean;
  /** Optional Escape dismissal. Defaults to true. */
  closeOnEscape?: boolean;
  /** Optional dismissal when focus moves outside the trigger and panel. Defaults to true. */
  closeOnFocusOutside?: boolean;
}
