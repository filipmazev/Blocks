import type { SwipeActionSource } from '@forms/types/swipe-actions.types';

import type { ISwipeAction } from './iswipe-action.interface';

/** Activation of a configured command by button, context command or committed full swipe. */
export interface ISwipeActionEvent {
  /** Current configured command, including its stable identifier. */
  readonly action: ISwipeAction;
  /** Explicit capsule/context activation or a completed full swipe (pointer release or trackpad threshold crossing). */
  readonly source: SwipeActionSource;
  /** Whether this explicit activation retries a previously rejected handler. Omitted or false on the first attempt. */
  readonly retry?: boolean;
  /** Native activation event: button click, pointer release or last trackpad event. */
  readonly event: MouseEvent;
}
