import type { GestureVelocity } from '@filip.mazev/blocks/effects/runtime';
import type { SwipeSide } from '@forms/types/swipe-actions.types';

/** One horizontal trackpad burst, sharing the pointer gesture's rendered spring position. */
export interface ISwipeWheelGesture {
  /** Destination before the burst; cancellation restores it. */
  readonly destination: number;
  /** Recent signed movement in CSS pixels and milliseconds. */
  readonly velocity: GestureVelocity;
  /** Action group owned by this wheel burst; reversing is limited to collapse. */
  readonly side: SwipeSide;
  /** Rendered starting position so a new burst can interrupt an unfinished collapse without jumping. */
  readonly start: number;
  /** Last signed native delta, used to distinguish a new impulse from a decaying wheel tail. */
  lastDelta: number;
  /** This burst reached the closed boundary; remaining same-direction momentum cannot open another side. */
  collapsed: boolean;
  /** Commit threshold dispatched the command; remaining wheel input is consumed without invoking again. */
  committed: boolean;
  /** Intentional post-entrance input has unlocked stretch; pre-entrance momentum is excluded. */
  stretchIntent: boolean;
  /** Largest opening delta; continuation must ease off before a renewed outward push can unlock stretch. */
  revealDeltaPeak: number;
  /** Smallest outward delta after entrance completion and sufficient deceleration, or null before that boundary. */
  continuationDelta: number | null;
  /** Most recent native event; retained for a completed full swipe. */
  event: WheelEvent;
  /** Bounded accumulated native distance before stretch resistance is applied. */
  rawPosition: number;
  /** Accumulated visual input position, independent from the eased rendered position. */
  position: number;
}
