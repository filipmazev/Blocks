/** Successful final action, distinct from simply visiting the final step. */
export interface IStepperCompletion {
  /** Completed IDs in current definition order. */
  readonly completedIds: readonly string[];
  /** Skipped optional IDs in current definition order. */
  readonly skippedIds: readonly string[];
}
