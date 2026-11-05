/** Internal snapshot of an inline body style restored after the final scroll owner releases its lock. */
export interface IScrollLockStyleSnapshot {
  /** Inline CSS value before the first lock, or an empty string when absent. */
  readonly value: string;
  /** Original priority, including important when present. */
  readonly priority: string;
}
