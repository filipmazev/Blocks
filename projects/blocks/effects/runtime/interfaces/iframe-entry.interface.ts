import type { FrameCallback } from '@effects/runtime/types/frame-scheduler.types';
/**
 * Describes the frame entry contract.
 */
export interface IFrameEntry {
  /** Callback invoked by the shared animation-frame scheduler. */
  callback: FrameCallback;
}
