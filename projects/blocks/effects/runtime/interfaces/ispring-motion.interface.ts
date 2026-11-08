/** Retargetable scalar channels sharing the effects runtime's lazy animation clock. */
export interface ISpringMotion {
  /**
   * Update destinations without discarding current velocity. All values must be finite and match the initial channel count.
   * @param values - New destination for each channel in initial order.
   * @param immediate - Snap and stop the clock, for initialization or reduced motion. Defaults to false.
   */
  retarget(values: readonly number[], immediate?: boolean): void;
  /** Stop pending frames permanently; subsequent retarget calls have no effect. */
  destroy(): void;
}
