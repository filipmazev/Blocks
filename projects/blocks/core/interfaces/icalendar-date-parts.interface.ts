import type { IsoDate } from '@core/types/date-time.types';

/**
 * Date components expressed in a specific calendar system.
 *
 * `monthIndex` is zero-based within the displayed calendar year, matching JavaScript's `Date` convention.
 */
export interface ICalendarDateParts {
  /** Year in the displayed calendar system. */
  readonly year: number;
  /** Zero-based month index in the displayed calendar system. */
  readonly monthIndex: number;
  /** One-based day of month in the displayed calendar system. */
  readonly day: number;
  /** Canonical Gregorian ISO date that represents this displayed calendar date. */
  readonly isoDate: IsoDate;
}
