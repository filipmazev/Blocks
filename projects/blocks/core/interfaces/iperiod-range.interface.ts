import type { IsoDate, PeriodKind } from '@core/types/date-time.types';

/**
 * Selection of one or more whole calendar periods.
 *
 * `start` and `end` are the canonical first days of the selected periods, so a month range always starts on a month's first day.
 */
export interface IPeriodRange {
  /** Canonical first day of the earliest selected period. */
  readonly start: IsoDate;
  /** Canonical first day of the latest selected period. */
  readonly end: IsoDate;
  /** Granularity of the selected periods. */
  readonly kind: PeriodKind;
}
