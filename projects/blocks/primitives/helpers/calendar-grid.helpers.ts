import type { CalendarNameForm, ICalendarAdapter, IsoDate } from '@filip.mazev/blocks/core';
import type { CalendarViewMode, ICalendarMonthGrid, ICalendarPeriodGrid } from '@primitives/types/calendar.types';

import {
  addDays,
  addYears,
  compareIsoDates,
  differenceInDays,
  endOfQuarter,
  endOfYear,
  formatWeekNumber,
  parseIsoDate,
  periodBounds,
  quarterOf,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
  weekday
} from '@filip.mazev/blocks/core';

/**
 * Generate the day grid for one displayed month in the active calendar system.
 *
 * Adjacent days outside the displayed calendar month are included to complete whole weeks; they remain selectable so pointer users can continue into a
 * neighbouring month without extra navigation.
 *
 * @param anchor - Canonical date inside the month to render.
 * @param adapter - Calendar adapter that resolves displayed month boundaries and day numbers.
 * @param locale - BCP 47 locale used for displayed numbers.
 * @param weekStartsOn - Zero-based first day of the week.
 * @param minimalDaysInFirstWeek - Minimum days of the new year required for week 1.
 * @param fixedWeeks - Whether the grid always renders six complete weeks for stable panel height.
 * @param monthForm - Localized month-name length; defaults to short.
 */
export function buildMonthGrid(
  anchor: IsoDate,
  adapter: ICalendarAdapter,
  locale: string,
  weekStartsOn: number,
  minimalDaysInFirstWeek: number,
  fixedWeeks: boolean,
  monthForm: CalendarNameForm = 'short'
): ICalendarMonthGrid {
  const monthStart = adapter.getMonthStart(anchor, locale);
  const nextMonthStart = adapter.addMonths(monthStart, 1, locale);
  const daysInMonth = Math.max(1, differenceInDays(monthStart, nextMonthStart));
  const offset = (weekday(monthStart) - weekStartsOn + 7) % 7;
  const total = fixedWeeks ? 42 : Math.ceil((offset + daysInMonth) / 7) * 7;
  const gridStart = addDays(monthStart, -offset);
  const cells = Array.from({ length: total }, (_, index) => {
    const date = addDays(gridStart, index);
    const weekStart = startOfWeek(date, weekStartsOn);
    const numbering = getWeekInfo(weekStart, weekStartsOn, minimalDaysInFirstWeek);

    return {
      date,
      day: adapter.getDateParts(date, locale).day,
      inMonth: compareIsoDates(date, monthStart) >= 0 && compareIsoDates(date, nextMonthStart) < 0,
      weekNumber: formatWeekNumber(numbering, locale),
      weekStart,
      weekday: weekday(date)
    };
  });

  return { monthStart, label: adapter.getMonthLabel(monthStart, locale, monthForm), key: adapter.getMonthKey(monthStart, locale), cells };
}

/**
 * Generate period cells for month, quarter, year or decade presentation.
 *
 * @param view - Presentation to generate; `'days'` returns an empty grid because day cells are produced per month.
 * @param anchor - Canonical date inside the period being browsed.
 * @param adapter - Calendar adapter used for displayed month and year boundaries.
 * @param locale - BCP 47 locale used for labels.
 * @param _weekStartsOn - Zero-based first day of the week; reserved for period-grid symmetry.
 * @param monthForm - Localized month-cell name length; defaults to short.
 */
export function buildPeriodGrid(
  view: CalendarViewMode,
  anchor: IsoDate,
  adapter: ICalendarAdapter,
  locale: string,
  _weekStartsOn: number,
  monthForm: CalendarNameForm = 'short'
): ICalendarPeriodGrid {
  const parts = adapter.getDateParts(anchor, locale);

  if (view === 'months') {
    const yearStart = findYearStart(anchor, parts.year, adapter, locale);
    const cells: ICalendarPeriodGrid['cells'][number][] = [];

    let cursor = yearStart;
    let index = 0;

    while (index < 13) {
      const currentParts = adapter.getDateParts(cursor, locale);

      if (currentParts.year !== parts.year) break;

      cells.push({ date: cursor, label: adapter.getMonthName(cursor, locale, monthForm) || adapter.getMonthLabel(cursor, locale), index, inPeriod: true });
      cursor = adapter.addMonths(cursor, 1, locale);
      index += 1;
    }

    return { label: adapter.getYearLabel(anchor, locale), cells };
  }

  if (view === 'quarters') {
    const yearStart = findYearStart(anchor, parts.year, adapter, locale);
    const cells = Array.from({ length: 4 }, (_, index) => {
      const start = adapter.addMonths(yearStart, index * 3, locale);

      return { date: start, label: `Q${index + 1}`, index, inPeriod: true };
    });

    return { label: adapter.getYearLabel(anchor, locale), cells };
  }

  if (view === 'years') {
    const startYear = Math.floor(parts.year / 10) * 10;
    const cells = Array.from({ length: 12 }, (_, index) => {
      const date = adapter.addYears(findYearStart(anchor, parts.year, adapter, locale), startYear + index - parts.year, locale);

      return { date, label: String(startYear + index), index, inPeriod: index < 10 };
    });

    return { label: `${startYear} – ${startYear + 9}`, cells };
  }

  if (view === 'decades') {
    const startYear = Math.floor(parts.year / 100) * 100;
    const cells = Array.from({ length: 12 }, (_, index) => {
      const year = startYear + index * 10;
      const date = adapter.addYears(findYearStart(anchor, parts.year, adapter, locale), year - parts.year, locale);

      return { date, label: `${year} – ${year + 9}`, index, inPeriod: index < 10 };
    });

    return { label: `${startYear} – ${startYear + 99}`, cells };
  }

  return { label: '', cells: [] };
}

/**
 * Return the inclusive bounds of the period a calendar selection identifies.
 *
 * @param date - Canonical date inside the period.
 * @param kind - Period granularity.
 * @param weekStartsOn - Zero-based first day of the week.
 */
export function selectionPeriodBounds(date: IsoDate, kind: 'week' | 'month' | 'quarter' | 'year', weekStartsOn: number): { start: IsoDate; end: IsoDate } {
  return periodBounds(date, kind, weekStartsOn);
}

/**
 * Return the canonical anchor a period selection stores for one date.
 *
 * @param date - Canonical date inside the period.
 * @param kind - Period granularity.
 * @param weekStartsOn - Zero-based first day of the week.
 */
export function periodAnchor(date: IsoDate, kind: 'week' | 'month' | 'quarter' | 'year', weekStartsOn: number): IsoDate {
  if (kind === 'week') return startOfWeek(date, weekStartsOn);

  if (kind === 'month') return startOfMonth(date);

  if (kind === 'quarter') return startOfQuarter(date);

  return startOfYear(date);
}

/**
 * Return the inclusive end of the period starting at an anchor date.
 *
 * @param anchor - Canonical first day of the period.
 * @param kind - Period granularity.
 * @param weekStartsOn - Zero-based first day of the week.
 */
export function periodAnchorEnd(anchor: IsoDate, kind: 'week' | 'month' | 'quarter' | 'year', weekStartsOn: number): IsoDate {
  return periodBounds(anchor, kind, weekStartsOn).end;
}

/**
 * Move a calendar view by one unit of its current presentation.
 *
 * @param anchor - Current view anchor date.
 * @param view - Presentation being navigated.
 * @param direction - Positive values move forwards and negative values backwards.
 * @param adapter - Calendar adapter used for displayed arithmetic.
 * @param locale - BCP 47 locale used for display conversion.
 */
export function stepView(anchor: IsoDate, view: CalendarViewMode, direction: number, adapter: ICalendarAdapter, locale: string): IsoDate {
  switch (view) {
    case 'days':
      return adapter.addMonths(anchor, direction, locale);
    case 'months':
      return adapter.addYears(anchor, direction, locale);
    case 'quarters':
      return adapter.addYears(anchor, direction, locale);
    case 'years':
      return addYears(startOfYear(anchor), direction * 10);
    case 'decades':
      return addYears(startOfYear(anchor), direction * 100);
  }
}

/**
 * Return the current year start for a displayed year in any calendar.
 *
 * @param anchor - Canonical date used to resolve the year boundary.
 * @param year - Displayed year to resolve.
 * @param adapter - Calendar adapter used for display conversion.
 * @param locale - BCP 47 locale used for display conversion.
 */
export function findYearStart(anchor: IsoDate, year: number, adapter: ICalendarAdapter, locale: string): IsoDate {
  if (adapter.isGregorian) return startOfYear(anchor);

  const candidate = adapter.fromDateParts({ year, monthIndex: 0, day: 1 }, locale);

  return candidate ?? startOfYear(anchor);
}

/**
 * Return whether a canonical date falls inside a visible month key.
 *
 * @param date - Canonical date to test.
 * @param keys - Displayed month keys included in the visible range.
 * @param adapter - Calendar adapter used for the key computation.
 * @param locale - BCP 47 locale used for the key computation.
 */
export function isDateInMonthKeys(date: IsoDate, keys: readonly string[], adapter: ICalendarAdapter, locale: string): boolean {
  return keys.includes(adapter.getMonthKey(date, locale));
}

/**
 * Return the last day included in a displayed quarter.
 *
 * @param quarterStart - Canonical first day of the quarter.
 */
export function quarterEnd(quarterStart: IsoDate): IsoDate {
  return endOfQuarter(quarterStart);
}

/**
 * Return the last day included in a displayed year.
 *
 * @param yearStart - Canonical first day of the year.
 */
export function yearEnd(yearStart: IsoDate): IsoDate {
  return endOfYear(yearStart);
}

/**
 * Return whether a canonical date is the first day of its displayed month.
 *
 * @param date - Canonical date to test.
 * @param adapter - Calendar adapter used for display conversion.
 * @param locale - BCP 47 locale used for display conversion.
 */
export function isDisplayedMonthStart(date: IsoDate, adapter: ICalendarAdapter, locale: string): boolean {
  return adapter.getDateParts(date, locale).day === 1;
}

/**
 * Return the quarter number of a canonical date.
 *
 * @param date - Canonical date to inspect.
 */
export function quarterNumber(date: IsoDate): number {
  return quarterOf(date) + 1;
}

//#region Helpers

function getWeekInfo(weekStart: IsoDate, weekStartsOn: number, minimalDaysInFirstWeek: number): number {
  const anchor = addDays(weekStart, 7 - minimalDaysInFirstWeek);
  const year = parseIsoDate(anchor)?.year ?? 0;

  let firstWeekStart = startOfWeek(`${String(year).padStart(4, '0')}-01-01`, weekStartsOn);

  if ((parseIsoDate(addDays(firstWeekStart, 7 - minimalDaysInFirstWeek))?.year ?? 0) < year) firstWeekStart = addDays(firstWeekStart, 7);

  return Math.floor(differenceInDays(firstWeekStart, weekStart) / 7) + 1;
}

//#endregion
