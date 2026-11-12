import type { DateAvailabilityRequestSource } from '@core/types/date-availability.types';
import type { IsoDate } from '@core/types/date-time.types';

/**
 * Context published when the calendar needs availability for newly visible dates.
 */
export interface IDateAvailabilityRequest {
  /** Canonical first date of the requested range. */
  readonly start: IsoDate;
  /** Canonical last date of the requested range. */
  readonly end: IsoDate;
  /** Stable keys of the displayed months included in the request. */
  readonly monthKeys: readonly string[];
  /** Calendar adapter identifier used for the displayed months. */
  readonly calendar: string;
  /** Active BCP 47 locale. */
  readonly locale: string;
  /** Active IANA time zone; changes invalidate earlier responses. */
  readonly timeZone: string;
  /** Monotonic request revision used to reject stale responses. */
  readonly revision: number;
  /** Whether this request replaces previous data or extends it. */
  readonly source: DateAvailabilityRequestSource;
}
