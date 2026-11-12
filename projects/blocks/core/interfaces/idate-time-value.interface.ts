import type { IsoDate, IsoTime } from '@core/types/date-time.types';

/**
 * Local date and time without a fixed offset. A time zone may be attached to describe the wall clock's zone.
 */
export interface IDateTimeValue {
  /** Canonical calendar date of the value. */
  readonly date: IsoDate;
  /** Canonical time of day of the value. */
  readonly time: IsoTime;
  /** IANA time-zone identifier describing the wall clock, or undefined for a zone-less local value. */
  readonly timeZone?: string;
}
