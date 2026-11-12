/** Decorative logical corners around a calendar range, including inward joins beside unselected cells. */
export interface ICalendarRangeCorners {
  /** Whether this cell exposes a rounded block-start/inline-start corner. */
  readonly startStart: boolean;
  /** Whether this cell exposes a rounded block-start/inline-end corner. */
  readonly startEnd: boolean;
  /** Whether this cell exposes a rounded block-end/inline-start corner. */
  readonly endStart: boolean;
  /** Whether this cell exposes a rounded block-end/inline-end corner. */
  readonly endEnd: boolean;
  /** Tone of an inward block-start/inline-start join, or null when no join is present. */
  readonly concaveStartStart: 'selection' | 'preview' | null;
  /** Tone of an inward block-start/inline-end join, or null when no join is present. */
  readonly concaveStartEnd: 'selection' | 'preview' | null;
  /** Tone of an inward block-end/inline-start join, or null when no join is present. */
  readonly concaveEndStart: 'selection' | 'preview' | null;
  /** Tone of an inward block-end/inline-end join, or null when no join is present. */
  readonly concaveEndEnd: 'selection' | 'preview' | null;
}
