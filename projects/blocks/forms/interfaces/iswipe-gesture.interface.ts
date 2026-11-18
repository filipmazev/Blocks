import type { GestureVelocity } from '@filip.mazev/blocks/effects/runtime';
import type { SwipeSide } from '@forms/types/swipe-actions.types';

/** Owned in-progress gesture, retained separately from the spring's rendered position. */
export interface ISwipeGesture {
  /** Owning pointer; unrelated touches cannot complete or cancel it. */
  readonly pointerId: number;
  /** Initial client coordinates used to distinguish scroll from horizontal intent. */
  readonly x: number;
  /** Initial vertical client coordinate. */
  readonly y: number;
  /** Rendered position at pointer down, allowing interruption without a jump. */
  readonly start: number;
  /** Destination before this gesture, restored on cancellation. */
  readonly destination: number;
  /** Recent signed velocity with pause and reversal handling. */
  readonly velocity: GestureVelocity;
  /** Whether horizontal intent has been claimed and capture acquired. */
  claimed: boolean;
  /** Locked physical action group for this gesture; reversal can close it but cannot reveal the other side. */
  side: SwipeSide | null;
}
