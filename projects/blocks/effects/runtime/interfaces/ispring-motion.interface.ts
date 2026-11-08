/** Retargetable scalar channels sharing the effects runtime's lazy animation clock. */
export interface ISpringMotion {
  /**
   * Update destinations without discarding current velocity. All values must be finite and match the initial channel count.
   * @param values - New destination for each channel in initial order.
   * @param immediate - Snap and stop the clock, for initialization or reduced motion. Defaults to false.
   */
  retarget(values: readonly number[], immediate?: boolean): void;
  /**
   * Paint direct manipulation immediately and retain its velocity for the next retarget; no frames run until retargeted.
   * @param values - Finite current coordinates, matching the initial channel count.
   * @param velocities - Optional finite velocities per second for each channel; omission uses zero. Must match the channel count.
   */
  track(values: readonly number[], velocities?: readonly number[]): void;
  /** Stop pending frames permanently; subsequent retarget calls have no effect. */
  destroy(): void;
}
