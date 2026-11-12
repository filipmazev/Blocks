import type { ICalendarAdapter } from '@core/interfaces/icalendar-adapter.interface';

/**
 * Locale and calendar context required by shared date formatting.
 */
export interface IDateFormatContext {
  /** BCP 47 locale used for month, weekday and day-period names. */
  readonly locale: string;
  /** Calendar adapter supplying displayed date components and names. */
  readonly calendar: ICalendarAdapter;
  /** Zero-based first day of the week. */
  readonly weekStartsOn: number;
  /** Minimum days in the first week of a year for localized week numbers. */
  readonly minimalDaysInFirstWeek: number;
}
