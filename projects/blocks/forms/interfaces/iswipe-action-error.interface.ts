import type { ISwipeAction } from './iswipe-action.interface';

/** A command handler failed; owners can surface feedback and offer retry. */
export interface ISwipeActionError {
  /** Command whose synchronous handler threw or whose promise rejected. */
  readonly action: ISwipeAction;
  /** Original application error, preserved without interpretation. */
  readonly error: unknown;
}
