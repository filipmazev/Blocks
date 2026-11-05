/** Frame callback receiving elapsed seconds and timestamp; false removes it from the shared clock. */
export type FrameCallback = (deltaSeconds: number, timestamp: number) => boolean;
