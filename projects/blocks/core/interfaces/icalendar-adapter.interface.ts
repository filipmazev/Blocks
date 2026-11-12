import type { CalendarNameForm } from '@core/types/calendar.types';

import type { ICalendarDateParts } from './icalendar-date-parts.interface';

/**
 * Converts between canonical Gregorian civil dates and one displayed calendar system.
 *
 * Canonical values stored by Blocks are always Gregorian ISO dates. Adapters own display-side arithmetic so non-Gregorian months, leap months and year
 * boundaries stay faithful to the displayed calendar instead of reusing Gregorian arithmetic with translated labels.
 */
export interface ICalendarAdapter {
  /** `Intl` calendar identifier this adapter renders, such as `'gregory'` or `'islamic-umalqura'`. */
  readonly id: string;
  /** Whether displayed dates use the Gregorian calendar and can share civil arithmetic with canonical values. */
  readonly isGregorian: boolean;
  /**
   * Return localized long month names ordered by displayed month index.
   *
   * @param locale - BCP 47 locale used for month names.
   */
  getMonthNames(locale: string): readonly string[];
  /**
   * Return localized short month names ordered by displayed month index.
   *
   * @param locale - BCP 47 locale used for month names.
   */
  getShortMonthNames(locale: string): readonly string[];
  /**
   * Return localized weekday names ordered from Sunday through Saturday.
   *
   * @param locale - BCP 47 locale used for weekday names.
   * @param form - Requested name length; defaults to `'long'`.
   */
  getWeekdayNames(locale: string, form?: CalendarNameForm): readonly string[];
  /**
   * Return the exact localized month name of a canonical date.
   *
   * Resolving by date instead of month index keeps leap months and era-specific month names faithful for non-Gregorian calendars.
   *
   * @param isoDate - Canonical date inside the month.
   * @param locale - BCP 47 locale used for the month name.
   * @param form - Requested name length; defaults to `'long'`.
   */
  getMonthName(isoDate: string, locale: string, form?: CalendarNameForm): string;
  /**
   * Resolve display components for a canonical date.
   *
   * @param isoDate - Canonical Gregorian date to convert.
   * @param locale - BCP 47 locale that selects the calendar's localized numbering where applicable.
   */
  getDateParts(isoDate: string, locale: string): ICalendarDateParts;
  /**
   * Resolve the canonical date for display components, or null when the combination does not exist.
   *
   * @param parts - Displayed calendar year, zero-based month index and one-based day.
   * @param locale - BCP 47 locale that selects the calendar's localized numbering where applicable.
   */
  fromDateParts(parts: { year: number; monthIndex: number; day: number }, locale: string): string | null;
  /**
   * Return the canonical first day of the displayed month containing the anchor date.
   *
   * @param anchor - Canonical date inside the requested month.
   * @param locale - BCP 47 locale used for display conversion.
   */
  getMonthStart(anchor: string, locale: string): string;
  /**
   * Move by a number of displayed months, clamping into the target month when needed.
   *
   * @param anchor - Canonical date to move from.
   * @param delta - Number of displayed months to add; negative values move backwards.
   * @param locale - BCP 47 locale used for display conversion.
   */
  addMonths(anchor: string, delta: number, locale: string): string;
  /**
   * Move by a number of displayed years, clamping the day when the target month is shorter.
   *
   * @param anchor - Canonical date to move from.
   * @param delta - Number of displayed years to add; negative values move backwards.
   * @param locale - BCP 47 locale used for display conversion.
   */
  addYears(anchor: string, delta: number, locale: string): string;
  /**
   * Return a stable key identifying the displayed month, used for asynchronous request deduplication.
   *
   * @param isoDate - Canonical date inside the month.
   * @param locale - BCP 47 locale used for display conversion.
   */
  getMonthKey(isoDate: string, locale: string): string;
  /**
   * Return the localized label of the displayed month and year, such as `'November 2026'`.
   *
   * @param anchor - Canonical date inside the requested month.
   * @param locale - BCP 47 locale used for the label.
   * @param form - Optional localized month-name length; defaults to long.
   */
  getMonthLabel(anchor: string, locale: string, form?: CalendarNameForm): string;
  /**
   * Return the localized displayed year label for a canonical date.
   *
   * @param isoDate - Canonical date whose displayed year should be labeled.
   * @param locale - BCP 47 locale used for the label.
   */
  getYearLabel(isoDate: string, locale: string): string;
}

export type { CalendarNameForm };
