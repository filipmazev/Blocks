import type { FrameCallback } from '@effects/runtime/scheduler';
/**
 * Describes the frame entry contract.
 */
export interface IFrameEntry {
  /** Callback invoked by the shared animation-frame scheduler. */
  callback: FrameCallback;
}
