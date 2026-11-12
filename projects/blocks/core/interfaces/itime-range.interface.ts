import type { IsoTime } from '@core/types/date-time.types';
/**
 * Time-of-day range in canonical ISO time format. Endpoints are inclusive; the end may precede the start for an overnight range.
 */
export interface ITimeRange {
  /** Inclusive start time of day. */
  readonly start: IsoTime;
  /** Inclusive end time of day; earlier than the start for an overnight range. */
  readonly end: IsoTime;
}
