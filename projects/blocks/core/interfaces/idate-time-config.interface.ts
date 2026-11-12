import type { CalendarSystemId, HourCycle, LocalTimeDisambiguation, TimePrecision } from '@core/types/date-time.types';

/**
 * Date, time, locale and serialization defaults shared by Blocks date and time controls.
 *
 * Explicit component inputs take precedence over these application settings, which take precedence over library defaults.
 */
export interface IDateTimeConfig {
  /** BCP 47 locale used for month, weekday, number and preset labels. Defaults to the runtime locale. */
  readonly locale: string;
  /** Calendar system identifier passed to the calendar adapter. Defaults to `'gregory'`. */
  readonly calendar: CalendarSystemId;
  /** IANA time zone used for interpretation and display when a field does not override it. Defaults to the runtime zone. */
  readonly timeZone: string;
  /** First day of the week as a zero-based index where Sunday is 0. Defaults to the locale's preferred first day. */
  readonly weekStartsOn: number;
  /** Minimum days in the first week of a year, used for localized week numbers. Defaults to the locale's preferred minimum. */
  readonly minimalDaysInFirstWeek: number;
  /** Preferred clock cycle for time controls. Defaults to `24` for locales that use a 24-hour clock and `12` otherwise. */
  readonly hourCycle: HourCycle;
  /** Display and input pattern for date-only values, using Blocks pattern tokens. Defaults to `'dd/MM/yyyy'`. */
  readonly dateFormat: string;
  /** Display and input pattern for month selections. Defaults to `'MMMM yyyy'`. */
  readonly monthFormat: string;
  /** Display and input pattern for quarter selections. Defaults to `'QQQ yyyy'`. */
  readonly quarterFormat: string;
  /** Display and input pattern for year selections. Defaults to `'yyyy'`. */
  readonly yearFormat: string;
  /** Display and input pattern for time-of-day values. Defaults to `'HH:mm'`. */
  readonly timeFormat: string;
  /** Display and input pattern for date-time values. Defaults to `'dd/MM/yyyy HH:mm'`. */
  readonly dateTimeFormat: string;
  /** Text placed between range endpoints in compact range fields. Defaults to `'–'`. */
  readonly rangeSeparator: string;
  /** Strictest parsed unit accepted from typed input. Defaults to `'minute'`. */
  readonly precision: TimePrecision;
  /** Smallest minute increment offered by time wheels and typed validation. Defaults to `1`. */
  readonly minuteStep: number;
  /** Smallest second increment offered by time wheels and typed validation. Defaults to `1`. */
  readonly secondStep: number;
  /** Smallest millisecond increment offered by time wheels and typed validation. Defaults to `1`. */
  readonly millisecondStep: number;
  /** Whether typed input may resolve natural-language expressions such as `'next Friday'`. Defaults to `false`. */
  readonly allowNaturalLanguage: boolean;
  /** Policy applied to nonexistent or ambiguous local times when resolving zoned values. Defaults to `'compatible'`. */
  readonly localTimeDisambiguation: LocalTimeDisambiguation;
  /** Whether time controls show the selected time zone's label. Defaults to `true`. */
  readonly showTimeZoneLabel: boolean;
}

export type { DateTimeConfigInput } from '@core/types/date-time-config.types';
