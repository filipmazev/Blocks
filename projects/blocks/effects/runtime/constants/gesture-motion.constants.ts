/** Shared gesture sampling in milliseconds, with velocity expressed in coordinate units per second. */
export const GESTURE_MOTION = {
  velocityWindow: 40,
  staleVelocity: 100,
  maxVelocity: 2500,
  projectionTime: 0.16
} as const;
