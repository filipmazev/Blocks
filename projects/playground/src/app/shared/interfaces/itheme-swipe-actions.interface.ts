import type { ISwipeAction } from '@filip.mazev/blocks/forms';

/** Commands for managing one locally saved theme. */
export interface IThemeSwipeActions {
  /** Commands exposed by dragging right. */
  readonly right: readonly ISwipeAction[];
  /** Commands exposed by dragging left. */
  readonly left: readonly ISwipeAction[];
}
