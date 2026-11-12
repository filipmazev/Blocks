import type { ICalendarDateParts } from '@core/interfaces/icalendar-date-parts.interface';
import type { IDateRange, IPeriodRange, IsoDate, PeriodKind } from '@core/types/date-time.types';

import { ISO_DATE_PATTERN } from '@core/constants/date-time.constants';

/**
 * Parse a canonical ISO date into numeric components without creating a `Date`.
 *
 * @param value - Candidate ISO date string in `YYYY-MM-DD` form.
 */
export function parseIsoDate(value: string): { year: number; month: number; day: number } | null {
  const match = ISO_DATE_PATTERN.exec(value.trim());

  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (!Number.isInteger(year) || month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) return null;

  return { year, month, day };
}

/**
 * Return whether a string is a valid canonical ISO date.
 *
 * @param value - Candidate date string.
 */
export function isValidIsoDate(value: string): boolean {
  return parseIsoDate(value) !== null;
}

/**
 * Build a canonical ISO date from one-based numeric components.
 *
 * @param year - Calendar year.
 * @param month - One-based month number.
 * @param day - One-based day of month.
 */
export function toIsoDate(year: number, month: number, day: number): IsoDate {
  return `${String(year).padStart(4, '0')}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/**
 * Return the number of days in a Gregorian month.
 *
 * @param year - Calendar year.
 * @param month - One-based month number.
 */
export function daysInMonth(year: number, month: number): number {
  if (month === 2) return isLeapYear(year) ? 29 : 28;

  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

/**
 * Return whether a Gregorian year is a leap year.
 *
 * @param year - Calendar year.
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Convert a Gregorian civil date into a signed day number relative to 1970-01-01.
 *
 * @param isoDate - Canonical date to convert.
 */
export function dayNumber(isoDate: IsoDate): number {
  const parts = parseIsoDate(isoDate);

  if (!parts) return Number.NaN;

  const adjustedYear = parts.year - (parts.month <= 2 ? 1 : 0);
  const era = Math.floor(adjustedYear / 400);
  const yearOfEra = adjustedYear - era * 400;
  const dayOfYear = Math.floor((153 * (parts.month + (parts.month > 2 ? -3 : 9)) + 2) / 5) + parts.day - 1;
  const dayOfEra = yearOfEra * 365 + Math.floor(yearOfEra / 4) - Math.floor(yearOfEra / 100) + dayOfYear;

  return era * 146097 + dayOfEra - 719468;
}

/**
 * Convert a signed day number relative to 1970-01-01 into a canonical ISO date.
 *
 * @param days - Day number to convert.
 */
export function fromDayNumber(days: number): IsoDate {
  const shifted = days + 719468;
  const era = Math.floor(shifted / 146097);
  const dayOfEra = shifted - era * 146097;
  const yearOfEra = Math.floor((dayOfEra - Math.floor(dayOfEra / 1460) + Math.floor(dayOfEra / 36524) - Math.floor(dayOfEra / 146096)) / 365);
  const year = yearOfEra + era * 400;
  const dayOfYear = dayOfEra - (365 * yearOfEra + Math.floor(yearOfEra / 4) - Math.floor(yearOfEra / 100));
  const monthPrime = Math.floor((5 * dayOfYear + 2) / 153);
  const day = dayOfYear - Math.floor((153 * monthPrime + 2) / 5) + 1;
  const month = monthPrime + (monthPrime < 10 ? 3 : -9);

  return toIsoDate(year + (month <= 2 ? 1 : 0), month, day);
}

/**
 * Return the zero-based weekday of a canonical date where Sunday is 0.
 *
 * @param isoDate - Canonical date to inspect.
 */
export function weekday(isoDate: IsoDate): number {
  const days = dayNumber(isoDate);

  return (((days + 4) % 7) + 7) % 7;
}

/**
 * Add a number of days to a canonical date.
 *
 * @param isoDate - Starting canonical date.
 * @param days - Number of days to add; negative values move backwards.
 */
export function addDays(isoDate: IsoDate, days: number): IsoDate {
  return fromDayNumber(dayNumber(isoDate) + days);
}

/**
 * Add a number of months, clamping the day into the target month.
 *
 * @param isoDate - Starting canonical date.
 * @param months - Number of months to add; negative values move backwards.
 */
export function addMonths(isoDate: IsoDate, months: number): IsoDate {
  const parts = parseIsoDate(isoDate);

  if (!parts) return isoDate;

  const total = parts.year * 12 + (parts.month - 1) + months;
  const year = Math.floor(total / 12);
  const month = total - year * 12 + 1;

  return toIsoDate(year, month, Math.min(parts.day, daysInMonth(year, month)));
}

/**
 * Add a number of years, clamping the day when February 29 meets a common year.
 *
 * @param isoDate - Starting canonical date.
 * @param years - Number of years to add; negative values move backwards.
 */
export function addYears(isoDate: IsoDate, years: number): IsoDate {
  return addMonths(isoDate, years * 12);
}

/**
 * Return the number of whole days from one canonical date to another.
 *
 * @param from - Earlier or later canonical date.
 * @param to - Canonical date to compare against.
 */
export function differenceInDays(from: IsoDate, to: IsoDate): number {
  return dayNumber(to) - dayNumber(from);
}

/**
 * Compare two canonical dates for ordering.
 *
 * @param a - First canonical date.
 * @param b - Second canonical date.
 */
export function compareIsoDates(a: IsoDate, b: IsoDate): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * Clamp a canonical date into an optional inclusive range.
 *
 * @param isoDate - Date to clamp.
 * @param min - Inclusive lower bound, or null when unbounded.
 * @param max - Inclusive upper bound, or null when unbounded.
 */
export function clampIsoDate(isoDate: IsoDate, min: IsoDate | null, max: IsoDate | null): IsoDate {
  if (min && isoDate < min) return min;

  if (max && isoDate > max) return max;

  return isoDate;
}

/**
 * Return the first day of the week containing a canonical date.
 *
 * @param isoDate - Date whose week should be resolved.
 * @param weekStartsOn - Zero-based first day of the week where Sunday is 0.
 */
export function startOfWeek(isoDate: IsoDate, weekStartsOn: number): IsoDate {
  const offset = (weekday(isoDate) - weekStartsOn + 7) % 7;

  return addDays(isoDate, -offset);
}

/**
 * Return the last day of the week containing a canonical date.
 *
 * @param isoDate - Date whose week should be resolved.
 * @param weekStartsOn - Zero-based first day of the week where Sunday is 0.
 */
export function endOfWeek(isoDate: IsoDate, weekStartsOn: number): IsoDate {
  return addDays(startOfWeek(isoDate, weekStartsOn), 6);
}

/**
 * Return the first day of the month containing a canonical date.
 *
 * @param isoDate - Date inside the month.
 */
export function startOfMonth(isoDate: IsoDate): IsoDate {
  const parts = parseIsoDate(isoDate);

  return parts ? toIsoDate(parts.year, parts.month, 1) : isoDate;
}

/**
 * Return the last day of the month containing a canonical date.
 *
 * @param isoDate - Date inside the month.
 */
export function endOfMonth(isoDate: IsoDate): IsoDate {
  const parts = parseIsoDate(isoDate);

  return parts ? toIsoDate(parts.year, parts.month, daysInMonth(parts.year, parts.month)) : isoDate;
}

/**
 * Return the zero-based calendar quarter of a canonical date.
 *
 * @param isoDate - Date to inspect.
 */
export function quarterOf(isoDate: IsoDate): number {
  const parts = parseIsoDate(isoDate);

  return parts ? Math.floor((parts.month - 1) / 3) : 0;
}

/**
 * Return the first day of the quarter containing a canonical date.
 *
 * @param isoDate - Date inside the quarter.
 */
export function startOfQuarter(isoDate: IsoDate): IsoDate {
  const parts = parseIsoDate(isoDate);

  return parts ? toIsoDate(parts.year, quarterOf(isoDate) * 3 + 1, 1) : isoDate;
}

/**
 * Return the last day of the quarter containing a canonical date.
 *
 * @param isoDate - Date inside the quarter.
 */
export function endOfQuarter(isoDate: IsoDate): IsoDate {
  const parts = parseIsoDate(isoDate);

  return parts ? toIsoDate(parts.year, quarterOf(isoDate) * 3 + 3, daysInMonth(parts.year, quarterOf(isoDate) * 3 + 3)) : isoDate;
}

/**
 * Return the first day of the year containing a canonical date.
 *
 * @param isoDate - Date inside the year.
 */
export function startOfYear(isoDate: IsoDate): IsoDate {
  const parts = parseIsoDate(isoDate);

  return parts ? toIsoDate(parts.year, 1, 1) : isoDate;
}

/**
 * Return the last day of the year containing a canonical date.
 *
 * @param isoDate - Date inside the year.
 */
export function endOfYear(isoDate: IsoDate): IsoDate {
  const parts = parseIsoDate(isoDate);

  return parts ? toIsoDate(parts.year, 12, 31) : isoDate;
}

/**
 * Resolve the inclusive bounds of a whole calendar period.
 *
 * @param isoDate - Date inside the requested period.
 * @param kind - Period granularity to resolve.
 * @param weekStartsOn - Zero-based first day of the week used for week periods.
 */
export function periodBounds(isoDate: IsoDate, kind: PeriodKind, weekStartsOn: number): { start: IsoDate; end: IsoDate } {
  switch (kind) {
    case 'week':
      return { start: startOfWeek(isoDate, weekStartsOn), end: endOfWeek(isoDate, weekStartsOn) };
    case 'month':
      return { start: startOfMonth(isoDate), end: endOfMonth(isoDate) };
    case 'quarter':
      return { start: startOfQuarter(isoDate), end: endOfQuarter(isoDate) };
    case 'year':
      return { start: startOfYear(isoDate), end: endOfYear(isoDate) };
  }
}

/**
 * Resolve a period selection made of contiguous whole periods.
 *
 * @param isoDate - Date inside the earliest selected period.
 * @param endDate - Date inside the latest selected period; omitted selects a single period.
 * @param kind - Period granularity to resolve.
 * @param weekStartsOn - Zero-based first day of the week used for week periods.
 */
export function periodRange(isoDate: IsoDate, endDate: IsoDate | null, kind: PeriodKind, weekStartsOn: number): IPeriodRange {
  const first = periodBounds(isoDate, kind, weekStartsOn).start;
  const last = periodBounds(endDate ?? isoDate, kind, weekStartsOn).start;

  return compareIsoDates(first, last) <= 0 ? { start: first, end: last, kind } : { start: last, end: first, kind };
}

/**
 * Resolve localized week-numbering information for a canonical date.
 *
 * Week 1 is the first week containing at least `minimalDaysInFirstWeek` days of the new year, matching CLDR conventions.
 *
 * @param isoDate - Date whose week should be numbered.
 * @param weekStartsOn - Zero-based first day of the week.
 * @param minimalDaysInFirstWeek - Minimum days of the new year required for week 1.
 */
export function weekInfo(isoDate: IsoDate, weekStartsOn: number, minimalDaysInFirstWeek: number): { week: number; year: number } {
  const weekStart = startOfWeek(isoDate, weekStartsOn);
  const anchor = addDays(weekStart, 7 - minimalDaysInFirstWeek);
  const year = parseIsoDate(anchor)?.year ?? 0;

  let firstWeekStart = startOfWeek(toIsoDate(year, 1, 1), weekStartsOn);

  if ((parseIsoDate(addDays(firstWeekStart, 7 - minimalDaysInFirstWeek))?.year ?? 0) < year) firstWeekStart = addDays(firstWeekStart, 7);

  return { week: Math.floor(differenceInDays(firstWeekStart, weekStart) / 7) + 1, year };
}

/**
 * Return the inclusive dates between two endpoints, ordered from the earlier endpoint.
 *
 * @param start - First range endpoint.
 * @param end - Second range endpoint.
 */
export function enumerateDates(start: IsoDate, end: IsoDate): readonly IsoDate[] {
  const from = compareIsoDates(start, end) <= 0 ? start : end;
  const to = compareIsoDates(start, end) <= 0 ? end : start;
  const count = differenceInDays(from, to);
  const dates: IsoDate[] = [];

  for (let index = 0; index <= count; index++) dates.push(addDays(from, index));

  return dates;
}

/**
 * Return whether a canonical date lies inside an inclusive range.
 *
 * @param isoDate - Date to test.
 * @param range - Inclusive range with optional open endpoints.
 */
export function isDateInRange(isoDate: IsoDate, range: IDateRange): boolean {
  return (!range.start || isoDate >= range.start) && (!range.end || isoDate <= range.end);
}

/**
 * Return the inclusive overlap of two ranges, or null when they do not overlap.
 *
 * @param a - First inclusive range.
 * @param b - Second inclusive range.
 */
export function intersectRanges(a: IDateRange, b: IDateRange): IDateRange | null {
  const start: string | null = a.start && b.start ? (a.start > b.start ? a.start : b.start) : (a.start ?? b.start);
  const end: string | null = a.end && b.end ? (a.end < b.end ? a.end : b.end) : (a.end ?? b.end);

  if (!start || !end || start > end) return null;

  return { start, end };
}

/**
 * Normalize two endpoints into an ordered inclusive range.
 *
 * @param first - One range endpoint.
 * @param second - The other range endpoint.
 */
export function orderedRange(first: IsoDate, second: IsoDate): IDateRange {
  return compareIsoDates(first, second) <= 0 ? { start: first, end: second } : { start: second, end: first };
}

/**
 * Build display components for a Gregorian canonical date.
 *
 * @param isoDate - Canonical date to describe.
 */
export function gregorianDateParts(isoDate: IsoDate): ICalendarDateParts {
  const parts = parseIsoDate(isoDate);

  if (!parts) return { year: 0, monthIndex: 0, day: 1, isoDate };

  return { year: parts.year, monthIndex: parts.month - 1, day: parts.day, isoDate };
}
