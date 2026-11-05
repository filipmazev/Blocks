/**
 * Describes the touch press contract.
 */
export interface ITouchPress {
  /** Pointer identifier associated with this pending long-press interaction. */
  pointerId: number;
  /** Horizontal coordinate in the owning coordinate system, in CSS pixels. */
  x: number;
  /** Vertical coordinate in the owning coordinate system, in CSS pixels. */
  y: number;
  /** Timer handle used to schedule the long-press action. */
  timer: number;
  /** Whether the long press has already opened the context menu. */
  opened: boolean;
  /** Controller used to remove listeners when this pointer interaction completes. */
  events: AbortController;
}
