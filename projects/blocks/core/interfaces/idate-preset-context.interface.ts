import type { ICalendarAdapter } from '@core/interfaces/icalendar-adapter.interface';
import type { IsoDate } from '@core/types/date-time.types';

/**
 * Deterministic inputs supplied to date preset resolvers.
 *
 * Resolvers must derive their result exclusively from this context so presets stay stable for a given clock and configuration.
 */
export interface IDatePresetContext {
  /** Current instant supplied by the deterministic clock. */
  readonly now: Date;
  /** Canonical local date of `now` in the context time zone. */
  readonly today: IsoDate;
  /** Active BCP 47 locale. */
  readonly locale: string;
  /** Calendar adapter used for display-side arithmetic. */
  readonly calendar: ICalendarAdapter;
  /** IANA time zone used to interpret the current instant. */
  readonly timeZone: string;
  /** Zero-based first day of the week. */
  readonly weekStartsOn: number;
  /** Minimum days in the first week of a year. */
  readonly minimalDaysInFirstWeek: number;
}
