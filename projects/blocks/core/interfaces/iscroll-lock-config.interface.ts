/**
 * Describes the scroll lock config contract.
 */
export interface IScrollLockConfig {
  /**
   * Elements whose descendants may keep receiving scroll input while page scrolling is locked. Use it for an overlay panel that must stay scrollable when
   * automatic nested-scroller detection is not enough. Optional.
   */
  allowTouchInputOn?: Element[];
  /**
   * Whether locked scrolling also ignores nested scroll containers, leaving only `allowTouchInputOn` elements usable. Optional; ordinary pages and panels keep
   * their nested scrollers usable without it.
   */
  handleExtremeOverflow?: boolean;
  /**
   * Presentation duration of the owning overlay in milliseconds. Retained for existing callers; scroll prevention now starts with the lock itself instead of
   * waiting for the transition to finish. Optional.
   */
  animationDuration?: number;
  /**
   * Whether touch gestures outside allowed elements are prevented. `false` opts this owner out of touch prevention in favor of wheel and offset locking;
   * omission keeps touch prevention enabled. Optional.
   */
  handleTouchInput?: boolean;
  /** Whether touch prevention applies only to narrow touch viewports instead of every device. Optional. */
  mobileOnlyTouchPrevention?: boolean;
}
