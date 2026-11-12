import type { ICalendarAdapter } from '@core/interfaces/icalendar-adapter.interface';

/**
 * Locale and calendar context required by strict date parsing.
 */
export interface IDateParseContext {
  /** BCP 47 locale used for names and digits. */
  readonly locale: string;
  /** Calendar adapter used to resolve displayed dates into canonical values. */
  readonly calendar: ICalendarAdapter;
}
