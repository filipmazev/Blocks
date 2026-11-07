/** Confirmed effective selection, including externally supplied and fallback selection. */
export interface IStepperSelection {
  /** Stable active ID, or null when no enabled steps remain. */
  readonly id: string | null;
  /** Zero-based index, or -1 for an empty selection. */
  readonly index: number;
  /** Previously rendered effective ID, or null at initialization. */
  readonly previousId: string | null;
}
