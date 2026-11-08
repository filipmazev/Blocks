import type { GestureVelocity } from '@filip.mazev/blocks/effects/runtime';

import type { ITabGeometry } from './itab-geometry.interface';

/** A tab-selection gesture; preview geometry never owns committed selection. */
export interface ITabDrag {
  /** Pointer captured while intent is resolved; native touch panning may cancel capture. */
  pointerId: number;
  /** Trigger where the gesture began. */
  origin: HTMLButtonElement;
  /** Starting client x coordinate in CSS pixels. */
  startX: number;
  /** Starting client y coordinate in CSS pixels. */
  startY: number;
  /** Horizontal grab offset from the initial trigger center in CSS pixels. */
  grabOffset: number;
  /** Selection before the gesture, used to detect external changes. */
  committedValue: string | null;
  /** Whether horizontal movement has passed the drag-intent threshold. */
  moved: boolean;
  /** Whether a mouse/pen press or stationary touch hold has enabled selection dragging. */
  armed: boolean;
  /** Most recent horizontal client coordinate in CSS pixels. */
  lastX: number;
  /** Most recent vertical client coordinate in CSS pixels. */
  lastY: number;
  /** Recent horizontal motion, sampled in viewport coordinates so scrolling does not create false momentum. */
  velocity: GestureVelocity;
  /** Timestamp of the latest pointer event in milliseconds. */
  lastTime: number;
  /** Enabled release candidate; velocity projection may advance it before a successful release. */
  candidate: ITabGeometry;
  /** Enabled triggers measured together before painting. */
  geometry: readonly ITabGeometry[];
  /** Cancels the hold timer and removes gesture-scoped touch, context-menu, blur and visibility listeners. */
  cleanup: () => void;
}
