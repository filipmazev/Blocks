import type { FrameCallback } from '@effects/runtime/types/frame-scheduler.types';

import { FRAME_SCHEDULER } from '@effects/runtime/constants/frame-scheduler.constants';

/**
 * Subscribe to the shared lazy clock; no work is scheduled without a browser animation frame API.
 * @param callback - Receives elapsed seconds (capped at 0.064) and a monotonic timestamp in milliseconds. Return false to stop.
 * @returns Idempotent cleanup function; call it on cancellation or teardown. The clock stops after its last subscriber leaves.
 */
export function subscribeFrame(callback: FrameCallback): () => void {
  return FRAME_SCHEDULER.subscribe(callback);
}
