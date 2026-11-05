import { FrameScheduler } from '@effects/runtime/classes/frame-scheduler';

/** Lazy shared frame clock; constructing it does not request browser animation work. */
export const FRAME_SCHEDULER: FrameScheduler = new FrameScheduler();
