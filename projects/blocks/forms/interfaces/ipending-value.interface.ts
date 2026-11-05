/** An uncommitted edit for legacy blur/submit update strategies. */
export interface IPendingValue<T> {
  /** Current value represented by this control or pending edit. */
  value: T | null;
}
