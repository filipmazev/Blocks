import type { IsoDate } from '@core/types/date-time.types';

/**
 * Inclusive start and end dates. A null endpoint denotes an open range.
 */
export interface IDateRange {
  /** Inclusive first date of the range, or null when the start is open. */
  readonly start: IsoDate | null;
  /** Inclusive last date of the range, or null when the end is open. */
  readonly end: IsoDate | null;
}
