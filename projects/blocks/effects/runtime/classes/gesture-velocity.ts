import { GESTURE_MOTION } from '@effects/runtime/constants/gesture-motion.constants';

/** Tracks recent scalar gesture velocity independently of rendering and committed application state. */
export class GestureVelocity {
  private position: number;
  private timestamp: number;
  private speed: number = 0;

  /**
   * Begin sampling a gesture in a consistent coordinate space.
   * @param position - Initial coordinate, usually CSS pixels.
   * @param timestamp - Initial monotonic event timestamp in milliseconds.
   */
  constructor(position: number, timestamp: number) {
    if (!Number.isFinite(position) || !Number.isFinite(timestamp)) throw new RangeError('Gesture coordinates and timestamps must be finite.');

    this.position = position;
    this.timestamp = timestamp;
  }

  /**
   * Update recent velocity with frame-rate-independent filtering; repeated coordinates retain momentum only briefly.
   * @param position - Current coordinate in the initial coordinate space.
   * @param timestamp - Monotonic event timestamp in milliseconds; older or nonfinite samples are ignored.
   */
  public update(position: number, timestamp: number): void {
    if (!Number.isFinite(position) || !Number.isFinite(timestamp) || timestamp <= this.timestamp) return;

    const elapsed = timestamp - this.timestamp;
    const delta = position - this.position;

    if (delta !== 0) {
      const velocity = Math.max(-GESTURE_MOTION.maxVelocity, Math.min(GESTURE_MOTION.maxVelocity, (delta * 1000) / elapsed));
      const weight = 1 - Math.exp(-elapsed / GESTURE_MOTION.velocityWindow);

      this.speed =
        elapsed > GESTURE_MOTION.staleVelocity || Math.sign(velocity) !== Math.sign(this.speed) ? velocity : this.speed + (velocity - this.speed) * weight;
      this.position = position;
      this.timestamp = timestamp;
    } else if (elapsed > GESTURE_MOTION.staleVelocity) {
      this.speed = 0;
      this.timestamp = timestamp;
    }
  }

  /**
   * Read recent velocity, allowing a stationary pause to cancel a flick without requiring more move events.
   * @param timestamp - Current monotonic event timestamp in milliseconds.
   * @returns Coordinate units per second; zero after a pause of 100 ms or for an invalid timestamp.
   */
  public velocity(timestamp: number): number {
    return Number.isFinite(timestamp) && timestamp >= this.timestamp && timestamp - this.timestamp <= GESTURE_MOTION.staleVelocity ? this.speed : 0;
  }
}
