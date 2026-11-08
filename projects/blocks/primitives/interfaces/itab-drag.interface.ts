import type { ITabGeometry } from './itab-geometry.interface';

/** A tab-selection gesture; preview geometry never owns committed selection. */
export interface ITabDrag {
  /** Pointer captured only after horizontal drag intent is established. */
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
  /** Nearest enabled trigger; committed on a successful release. */
  candidate: ITabGeometry;
  /** Enabled triggers measured together before painting. */
  geometry: readonly ITabGeometry[];
  /** Removes gesture-scoped blur and visibility listeners. */
  cleanup: () => void;
}
