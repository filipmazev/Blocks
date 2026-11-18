import type { SwipeSide } from '@forms/types/swipe-actions.types';

/** Retained physical presentation of an asynchronous full-swipe command. */
export interface ISwipeFullActionState {
  /** Stable command identifier, shared with the action definition. */
  readonly id: string;
  /** Physical side that owns the expanded command. */
  readonly side: SwipeSide;
  /** Pending requests remain locked; rejected requests expose an explicit retry. */
  readonly status: 'pending' | 'error';
}
