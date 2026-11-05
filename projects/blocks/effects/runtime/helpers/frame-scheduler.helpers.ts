import type { FrameCallback } from '@effects/runtime/types/frame-scheduler.types';

import { FRAME_SCHEDULER } from '@effects/runtime/constants/frame-scheduler.constants';

/**
 * All effects share one lazy clock. Returning false removes the callback.
 * @param callback - Frame callback receiving animation timing; the returned function unsubscribes it.
 */
export function subscribeFrame(callback: FrameCallback): () => void {
  return FRAME_SCHEDULER.subscribe(callback);
}
