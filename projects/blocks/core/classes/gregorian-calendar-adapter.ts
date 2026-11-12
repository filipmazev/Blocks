import type { CalendarNameForm, ICalendarAdapter } from '@core/interfaces/icalendar-adapter.interface';
import type { ICalendarDateParts } from '@core/interfaces/icalendar-date-parts.interface';

import { buildGregorianMonthNames, buildGregorianWeekdayNames } from '@core/helpers/calendar-name.helpers';
import { addMonths as addCivilMonths, addYears as addCivilYears, gregorianDateParts, parseIsoDate, toIsoDate } from '@core/helpers/civil-date.helpers';
import { safeGregorianDate } from '@core/helpers/date-time-format.helpers';

/**
 * Calendar adapter for the Gregorian calendar using pure civil arithmetic.
 *
 * Canonical values and displayed dates are identical, so no conversion search is required and date-only values never involve a time zone.
 */
export class GregorianCalendarAdapter implements ICalendarAdapter {
  /** `Intl` calendar identifier rendered by this adapter. */
  /** Whether displayed dates use the Gregorian calendar. */

  private readonly monthNameCache: Map<string, readonly string[]> = new Map();
  private readonly shortMonthNameCache: Map<string, readonly string[]> = new Map();
  private readonly weekdayNameCache: Map<string, readonly string[]> = new Map();

  public readonly id: string = 'gregory';
  public readonly isGregorian: boolean = true;

  /**
   * Return localized long month names ordered by month index.
   *
   * @param locale - BCP 47 locale used for month names.
   */
  public getMonthNames(locale: string): readonly string[] {
    const cached = this.monthNameCache.get(locale);

    if (cached) return cached;

    const names = buildGregorianMonthNames(locale, 'long');

    this.monthNameCache.set(locale, names);

    return names;
  }

  /**
   * Return localized short month names ordered by month index.
   *
   * @param locale - BCP 47 locale used for month names.
   */
  public getShortMonthNames(locale: string): readonly string[] {
    const cached = this.shortMonthNameCache.get(locale);

    if (cached) return cached;

    const names = buildGregorianMonthNames(locale, 'short');

    this.shortMonthNameCache.set(locale, names);

    return names;
  }

  /**
   * Return localized weekday names ordered from Sunday through Saturday.
   *
   * @param locale - BCP 47 locale used for weekday names.
   * @param form - Requested name length; defaults to `'long'`.
   */
  public getWeekdayNames(locale: string, form: CalendarNameForm = 'long'): readonly string[] {
    const key = `${locale}:${form}`;
    const cached = this.weekdayNameCache.get(key);

    if (cached) return cached;

    const names = buildGregorianWeekdayNames(locale, form);

    this.weekdayNameCache.set(key, names);

    return names;
  }

  /**
   * Return the exact localized month name of a canonical date.
   *
   * @param isoDate - Canonical date inside the month.
   * @param locale - BCP 47 locale used for the month name.
   * @param form - Requested name length; defaults to `'long'`.
   */
  public getMonthName(isoDate: string, locale: string, form: CalendarNameForm = 'long'): string {
    const parts = parseIsoDate(isoDate);

    if (!parts) return '';

    return new Intl.DateTimeFormat(locale, { calendar: 'gregory', month: form, timeZone: 'UTC' }).format(
      new Date(Date.UTC(parts.year, parts.month - 1, 15, 12))
    );
  }

  /**
   * Resolve display components for a canonical date.
   *
   * @param isoDate - Canonical Gregorian date to describe.
   * @param _locale - Unused locale; Gregorian numerals are canonical.
   */
  public getDateParts(isoDate: string, _locale: string): ICalendarDateParts {
    return gregorianDateParts(isoDate);
  }

  /**
   * Resolve the canonical date for display components.
   *
   * @param parts - Displayed calendar year, zero-based month index and one-based day.
   * @param _locale - Unused locale; Gregorian numerals are canonical.
   */
  public fromDateParts(parts: { year: number; monthIndex: number; day: number }, _locale: string): string | null {
    return safeGregorianDate(parts.year, parts.monthIndex + 1, parts.day);
  }

  /**
   * Return the first day of the month containing the anchor date.
   *
   * @param anchor - Canonical date inside the requested month.
   * @param _locale - Unused locale; Gregorian arithmetic is canonical.
   */
  public getMonthStart(anchor: string, _locale: string): string {
    const parts = parseIsoDate(anchor);

    return parts ? toIsoDate(parts.year, parts.month, 1) : anchor;
  }

  /**
   * Move by a number of months with day clamping.
   *
   * @param anchor - Canonical date to move from.
   * @param delta - Number of months to add.
   * @param _locale - Unused locale; Gregorian arithmetic is canonical.
   */
  public addMonths(anchor: string, delta: number, _locale: string): string {
    return addCivilMonths(anchor, delta);
  }

  /**
   * Move by a number of years with day clamping.
   *
   * @param anchor - Canonical date to move from.
   * @param delta - Number of years to add.
   * @param _locale - Unused locale; Gregorian arithmetic is canonical.
   */
  public addYears(anchor: string, delta: number, _locale: string): string {
    return addCivilYears(anchor, delta);
  }

  /**
   * Return a stable key identifying the displayed month.
   *
   * @param isoDate - Canonical date inside the month.
   * @param _locale - Unused locale; Gregorian keys are canonical.
   */
  public getMonthKey(isoDate: string, _locale: string): string {
    const parts = parseIsoDate(isoDate);

    return parts ? `${parts.year}-${String(parts.month).padStart(2, '0')}` : isoDate;
  }

  /**
   * Return the localized month and year label.
   *
   * @param anchor - Canonical date inside the month.
   * @param locale - BCP 47 locale used for the label.
   * @param form - Localized month-name length; defaults to long.
   */
  public getMonthLabel(anchor: string, locale: string, form: CalendarNameForm = 'long'): string {
    const parts = parseIsoDate(anchor);

    if (!parts) return '';

    return new Intl.DateTimeFormat(locale, { calendar: 'gregory', month: form, year: 'numeric', timeZone: 'UTC' }).format(
      new Date(Date.UTC(parts.year, parts.month - 1, 1, 12))
    );
  }

  /**
   * Return the localized year label.
   *
   * @param isoDate - Canonical date whose year should be labeled.
   * @param locale - BCP 47 locale used for the label.
   */
  public getYearLabel(isoDate: string, locale: string): string {
    const parts = parseIsoDate(isoDate);

    if (!parts) return '';

    return new Intl.DateTimeFormat(locale, { calendar: 'gregory', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(parts.year, 0, 1, 12)));
  }
}
