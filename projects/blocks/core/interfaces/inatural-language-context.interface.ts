import type { ICalendarAdapter } from '@core/interfaces/icalendar-adapter.interface';
import type { TimePrecision } from '@core/types/date-time.types';

/**
 * Deterministic context for locale-aware natural-language date and time parsing.
 */
export interface INaturalLanguageContext {
  /** Current instant from the deterministic clock. */
  readonly now: Date;
  /** Active IANA time zone used to derive the current local date. */
  readonly timeZone: string;
  /** Active BCP 47 locale. */
  readonly locale: string;
  /** Calendar adapter used for displayed weekday names. */
  readonly calendar: ICalendarAdapter;
  /** Zero-based first day of the week. */
  readonly weekStartsOn: number;
  /** Smallest accepted time precision. Defaults to `'minute'`. */
  readonly precision?: TimePrecision;
}
