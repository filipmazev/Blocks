import type { CalendarNameForm, ICalendarAdapter } from '@core/interfaces/icalendar-adapter.interface';
import type { ICalendarDateParts } from '@core/interfaces/icalendar-date-parts.interface';

import { addDays, differenceInDays, parseIsoDate } from '@core/helpers/civil-date.helpers';

/**
 * Calendar adapter that renders any calendar supported by `Intl.DateTimeFormat`, such as Umm al-Qura, Persian, Hebrew or Buddhist calendars.
 *
 * Canonical values remain Gregorian civil dates. Display arithmetic walks consecutive civil days and asks `Intl` for their displayed components, so month
 * lengths, leap months and year boundaries follow the displayed calendar rather than Gregorian arithmetic with translated labels.
 *
 * Bounded conversions are cached per locale and year. Calendars whose `Intl` implementation reports numeric months inconsistently (some Hebrew leap-month
 * configurations) fall back to the long month name for displayed month identity.
 */
export class IntlCalendarAdapter implements ICalendarAdapter {
  private readonly partsCache: Map<string, ICalendarDateParts> = new Map();
  private readonly monthStartCache: Map<string, string> = new Map();
  private readonly yearStartCache: Map<string, string | null> = new Map();
  private readonly conversionCache: Map<string, string | null> = new Map();
  private readonly monthNameCache: Map<string, string> = new Map();
  private readonly monthNamesCache: Map<string, readonly string[]> = new Map();
  private readonly weekdayNameCache: Map<string, readonly string[]> = new Map();
  private readonly formatters: Map<string, Intl.DateTimeFormat> = new Map();

  /** `Intl` calendar identifier rendered by this adapter. */
  public readonly id: string;
  /** Whether displayed dates use the Gregorian calendar; always false for this adapter. */
  public readonly isGregorian: boolean = false;

  /**
   * Create an adapter for one `Intl` calendar.
   *
   * @param id - `Intl` calendar identifier such as `'islamic-umalqura'`.
   */
  constructor(id: string) {
    this.id = id;
  }

  /**
   * Return localized long month names in display order for a reference year.
   *
   * Calendars with leap months may have a different month count in other years; components render exact month labels with `getMonthName` and
   * `getMonthLabel`.
   *
   * @param locale - BCP 47 locale used for month names.
   */
  public getMonthNames(locale: string): readonly string[] {
    const cached = this.monthNamesCache.get(locale);

    if (cached) return cached;

    const anchor = '2026-01-01';
    const start = this.findYearStart(this.getDateParts(anchor, locale).year, locale) ?? this.getMonthStart(anchor, locale);
    const names: string[] = [];

    let cursor = start;
    let guard = 0;

    while (guard < 14) {
      const name = this.getMonthName(cursor, locale, 'long');

      if (names.length && name === names[0]) break;

      names.push(name);
      cursor = this.addMonths(cursor, 1, locale);
      guard += 1;
    }

    this.monthNamesCache.set(locale, names);

    return names;
  }

  /**
   * Return localized short month names in display order for a reference year.
   *
   * @param locale - BCP 47 locale used for month names.
   */
  public getShortMonthNames(locale: string): readonly string[] {
    const start = this.findYearStart(this.getDateParts('2026-01-01', locale).year, locale) ?? '2026-01-01';

    return this.getMonthNames(locale).map((_, index) => {
      const anchor = this.addMonths(start, index, locale);

      return this.getMonthName(anchor, locale, 'short');
    });
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

    const formatter = new Intl.DateTimeFormat(locale, { weekday: form, timeZone: 'UTC' });
    const names = Array.from({ length: 7 }, (_, index) => formatter.format(new Date(Date.UTC(2024, 0, 7 + index, 12))));

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
    const key = `${locale}:${form}:${isoDate}`;
    const cached = this.monthNameCache.get(key);

    if (cached) return cached;

    const name = this.format(isoDate, locale, { month: form });

    this.monthNameCache.set(key, name);

    return name;
  }

  /**
   * Resolve display components for a canonical date.
   *
   * @param isoDate - Canonical date to convert.
   * @param locale - BCP 47 locale that selects localized number shapes.
   */
  public getDateParts(isoDate: string, locale: string): ICalendarDateParts {
    const key = `${locale}:${isoDate}`;
    const cached = this.partsCache.get(key);

    if (cached) return cached;

    const parts = this.formatParts(isoDate, locale);
    const read = (type: string): string => parts.find((part) => part.type === type)?.value ?? '';
    const year = Number((read('year') || read('relatedYear')).replace(/\D/g, ''));
    const day = Number(read('day').replace(/\D/g, ''));
    const numericMonth = Number(read('month').replace(/\D/g, ''));

    let monthIndex = Number.isFinite(numericMonth) && numericMonth > 0 ? numericMonth - 1 : -1;

    if (monthIndex < 0) {
      // Named-month calendars require counting actual months, including leap months, without calling getMonthNames recursively.
      let cursor = addDays(isoDate, 1 - day);

      monthIndex = 0;

      for (let count = 0; count < 13; count++) {
        const previous = addDays(cursor, -1);
        const raw = this.formatParts(previous, locale);
        const previousYear = Number((raw.find((part) => part.type === 'year' || String(part.type) === 'relatedYear')?.value ?? '').replace(/\D/g, ''));
        const previousDay = Number(raw.find((part) => part.type === 'day')?.value ?? 1);

        if (previousYear !== year) break;

        monthIndex += 1;
        cursor = addDays(previous, 1 - previousDay);
      }
    }

    const result: ICalendarDateParts = { year, monthIndex, day, isoDate };

    this.partsCache.set(key, result);

    return result;
  }

  /**
   * Resolve the canonical date for display components.
   *
   * @param parts - Displayed calendar year, zero-based month index and one-based day.
   * @param locale - BCP 47 locale used for display conversion.
   */
  public fromDateParts(parts: { year: number; monthIndex: number; day: number }, locale: string): string | null {
    const key = `${locale}:${parts.year}:${parts.monthIndex}:${parts.day}`;

    if (this.conversionCache.has(key)) return this.conversionCache.get(key) ?? null;

    const yearStart = this.findYearStart(parts.year, locale);

    let result: string | null = null;

    if (yearStart) {
      let monthStart = yearStart;

      for (let index = 0; index < parts.monthIndex; index++) monthStart = this.addMonths(monthStart, 1, locale);

      const candidate = addDays(monthStart, parts.day - 1);
      const check = this.getDateParts(candidate, locale);

      result = check.year === parts.year && check.monthIndex === parts.monthIndex && check.day === parts.day ? candidate : null;
    }

    this.conversionCache.set(key, result);

    return result;
  }

  /**
   * Return the first day of the displayed month containing the anchor date.
   *
   * @param anchor - Canonical date inside the requested month.
   * @param locale - BCP 47 locale used for display conversion.
   */
  public getMonthStart(anchor: string, locale: string): string {
    const key = `${locale}:${anchor}`;
    const cached = this.monthStartCache.get(key);

    if (cached) return cached;

    const parts = this.getDateParts(anchor, locale);

    let candidate = addDays(anchor, -(parts.day - 1));
    let check = this.getDateParts(candidate, locale);
    let guard = 0;

    while ((check.day !== 1 || check.monthIndex !== parts.monthIndex || check.year !== parts.year) && guard < 40) {
      candidate = addDays(candidate, -1);
      check = this.getDateParts(candidate, locale);
      guard += 1;
    }

    this.monthStartCache.set(key, candidate);

    return candidate;
  }

  /**
   * Move by a number of displayed months.
   *
   * @param anchor - Canonical date to move from.
   * @param delta - Number of displayed months to add; negative values move backwards.
   * @param locale - BCP 47 locale used for display conversion.
   */
  public addMonths(anchor: string, delta: number, locale: string): string {
    const day = this.getDateParts(anchor, locale).day;

    let cursor = this.getMonthStart(anchor, locale);
    let remaining = Math.abs(delta);

    while (remaining > 0) {
      cursor = this.getMonthStart(addDays(cursor, delta > 0 ? 32 : -1), locale);
      remaining -= 1;
    }

    const next = this.getMonthStart(addDays(cursor, 32), locale);

    return addDays(cursor, Math.min(day, differenceInDays(cursor, next)) - 1);
  }

  /**
   * Move by a number of displayed years, clamping into an existing month and day.
   *
   * @param anchor - Canonical date to move from.
   * @param delta - Number of displayed years to add; negative values move backwards.
   * @param locale - BCP 47 locale used for display conversion.
   */
  public addYears(anchor: string, delta: number, locale: string): string {
    const parts = this.getDateParts(anchor, locale);

    for (let monthOffset = 0; monthOffset <= 2; monthOffset++) {
      for (let day = parts.day; day >= 1; day--) {
        const candidate = this.fromDateParts({ year: parts.year + delta, monthIndex: parts.monthIndex - monthOffset, day }, locale);

        if (candidate) return candidate;
      }
    }

    return anchor;
  }

  /**
   * Return a stable key identifying the displayed month.
   *
   * @param isoDate - Canonical date inside the month.
   * @param locale - BCP 47 locale used for display conversion.
   */
  public getMonthKey(isoDate: string, locale: string): string {
    const parts = this.getDateParts(isoDate, locale);

    return `${parts.year}-${String(parts.monthIndex + 1).padStart(2, '0')}-${this.getMonthName(isoDate, locale, 'long')}`;
  }

  /**
   * Return the localized displayed month and year label.
   *
   * @param anchor - Canonical date inside the requested month.
   * @param locale - BCP 47 locale used for the label.
   * @param form - Localized month-name length; defaults to long.
   */
  public getMonthLabel(anchor: string, locale: string, form: CalendarNameForm = 'long'): string {
    return this.format(this.getMonthStart(anchor, locale), locale, { month: form, year: 'numeric' });
  }

  /**
   * Return the localized displayed year label.
   *
   * @param isoDate - Canonical date whose displayed year should be labeled.
   * @param locale - BCP 47 locale used for the label.
   */
  public getYearLabel(isoDate: string, locale: string): string {
    return this.format(isoDate, locale, { year: 'numeric' });
  }

  //#region Helpers

  private findYearStart(year: number, locale: string): string | null {
    const key = `${locale}:${year}`;

    if (this.yearStartCache.has(key)) return this.yearStartCache.get(key) ?? null;

    const referenceYear = this.getDateParts('2026-01-01', locale).year;
    const estimate = `${String(2026 + (year - referenceYear)).padStart(4, '0')}-01-01`;

    let candidate: string | null = null;

    for (let offset = -430; offset <= 460; offset++) {
      const cursor = addDays(estimate, offset);
      const parts = this.getDateParts(cursor, locale);

      if (parts.year === year && parts.monthIndex === 0 && parts.day === 1) {
        candidate = cursor;
        break;
      }
    }

    this.yearStartCache.set(key, candidate);

    return candidate;
  }

  private format(isoDate: string, locale: string, options: Intl.DateTimeFormatOptions): string {
    const parts = parseIsoDate(isoDate);

    if (!parts) return '';

    const key = `${locale}:${JSON.stringify(options)}`;

    let formatter = this.formatters.get(key);

    if (!formatter) {
      formatter = new Intl.DateTimeFormat(locale, { ...options, calendar: this.id, timeZone: 'UTC' });
      this.formatters.set(key, formatter);
    }

    return formatter.format(new Date(Date.UTC(parts.year, parts.month - 1, parts.day, 12)));
  }

  private formatParts(isoDate: string, locale: string): Intl.DateTimeFormatPart[] {
    const parts = parseIsoDate(isoDate);

    if (!parts) return [];

    const key = `${locale}:numeric-parts`;

    let formatter = this.formatters.get(key);

    if (!formatter) {
      formatter = new Intl.DateTimeFormat(locale, {
        calendar: this.id,
        numberingSystem: 'latn',
        timeZone: 'UTC',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        era: 'short'
      });
      this.formatters.set(key, formatter);
    }

    return formatter.formatToParts(new Date(Date.UTC(parts.year, parts.month - 1, parts.day, 12)));
  }

  //#endregion
}
