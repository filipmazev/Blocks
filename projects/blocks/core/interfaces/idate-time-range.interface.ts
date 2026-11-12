import type { IDateTimeValue } from '@core/interfaces/idate-time-value.interface';
/**
 * Start and end local date-time values. Both endpoints are inclusive; the range may span multiple days.
 */
export interface IDateTimeRange {
  /** Inclusive start date-time of the range. */
  readonly start: IDateTimeValue;
  /** Inclusive end date-time of the range. */
  readonly end: IDateTimeValue;
}
