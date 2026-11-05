/**
 * Describes the scroll lock config contract.
 */
export interface IScrollLockConfig {
  /** Elements that may continue receiving touch input while page scrolling is locked. Optional. */
  allowTouchInputOn?: Element[];
  /** Whether to compensate for content whose overflow requires additional scroll-lock handling. Optional. */
  handleExtremeOverflow?: boolean;
  /** Animation duration in milliseconds, used to coordinate visual transitions and cleanup. Optional. */
  animationDuration?: number;
  /** Whether scroll locking also prevents touch gestures outside the allowed elements. Optional. */
  handleTouchInput?: boolean;
  /** Whether touch prevention is limited to mobile devices. Optional. */
  mobileOnlyTouchPrevention?: boolean;
}
