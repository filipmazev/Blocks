/**
 * Vertical and horizontal scroll offsets retained for a locked scroll container.
 */
export interface IScrollLockOffset {
  /** Scroll position along the block axis when the lock was acquired. */
  readonly top: number;
  /** Scroll position along the inline axis when the lock was acquired. */
  readonly left: number;
}
