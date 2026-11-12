import type { IsoDate } from '@core/types/date-time.types';
import type { TimeAvailabilityRequestSource } from '@core/types/time-availability.types';

/**
 * Context published when a time picker needs slot availability.
 */
export interface ITimeAvailabilityRequest {
  /** Canonical date the slots belong to when the picker is date-aware; null for purely time-of-day pickers. */
  readonly date: IsoDate | null;
  /** Active IANA time zone, which may change available slots. */
  readonly timeZone: string;
  /** Active BCP 47 locale. */
  readonly locale: string;
  /** Monotonic request revision used to reject stale responses. */
  readonly revision: number;
  /** Reason the request was issued. */
  readonly source: TimeAvailabilityRequestSource;
}
