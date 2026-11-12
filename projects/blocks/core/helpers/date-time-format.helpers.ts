import type { IDateFormatContext } from '@core/interfaces/idate-format-context.interface';
import type { IsoDate, IsoTime } from '@core/types/date-time.types';

import { DATE_PATTERN_TOKENS } from '@core/constants/date-time.constants';
import { DAY_PERIOD_CACHE } from '@core/constants/date-time-caches.constants';

import { parseIsoDate, quarterOf, startOfWeek, toIsoDate, weekday, weekInfo } from './civil-date.helpers';

/**
 * Format a canonical date with Blocks pattern tokens.
 *
 * Supported tokens are `yyyy`, `yy`, `MMMM`, `MMM`, `MM`, `M`, `dd`, `d`, `EEEE`, `EEE`, `EEEEE`, `ww`, `w`, `QQQ` and `Q`. Text wrapped in single
 * quotes is emitted literally. Unknown alphabetic characters are emitted unchanged.
 *
 * @param isoDate - Canonical date to format.
 * @param pattern - Pattern containing date tokens and literal text.
 * @param context - Locale, calendar and week conventions used for localized output.
 */
export function formatIsoDate(isoDate: IsoDate, pattern: string, context: IDateFormatContext): string {
  const parts = context.calendar.getDateParts(isoDate, context.locale);
  const longWeekdays = context.calendar.getWeekdayNames(context.locale, 'long');
  const shortWeekdays = context.calendar.getWeekdayNames(context.locale, 'short');
  const narrowWeekdays = context.calendar.getWeekdayNames(context.locale, 'narrow');
  const numbering = weekInfo(isoDate, context.weekStartsOn, context.minimalDaysInFirstWeek);

  return formatPattern(pattern, (token) => {
    switch (token) {
      case 'yyyy':
        return String(parts.year).padStart(4, '0');
      case 'yy':
        return String(parts.year).slice(-2).padStart(2, '0');
      case 'MMMM':
        return context.calendar.getMonthName(isoDate, context.locale, 'long');
      case 'MMM':
        return context.calendar.getMonthName(isoDate, context.locale, 'short');
      case 'MM':
        return pad(parts.monthIndex + 1);
      case 'M':
        return String(parts.monthIndex + 1);
      case 'dd':
        return pad(parts.day);
      case 'd':
        return String(parts.day);
      case 'EEEE':
        return longWeekdays[weekday(isoDate)] ?? '';
      case 'EEE':
        return shortWeekdays[weekday(isoDate)] ?? '';
      case 'EEEEE':
        return narrowWeekdays[weekday(isoDate)] ?? '';
      case 'ww':
        return pad(numbering.week);
      case 'w':
        return String(numbering.week);
      case 'QQQ':
        return `Q${quarterOf(isoDate) + 1}`;
      case 'Q':
        return String(quarterOf(isoDate) + 1);
      default:
        return null;
    }
  });
}

/**
 * Format a canonical time of day with Blocks pattern tokens.
 *
 * Supported tokens are `HH`, `H`, `hh`, `h`, `mm`, `m`, `ss`, `s`, `SSS` and `a`. Values are never converted between time zones by this function.
 *
 * @param time - Canonical time of day to format.
 * @param pattern - Pattern containing time tokens and literal text.
 * @param locale - BCP 47 locale used for the localized day period.
 */
export function formatIsoTime(time: IsoTime, pattern: string, locale: string): string {
  const parts = parseTimeParts(time);

  if (!parts) return '';

  const hour24 = parts.hour;
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  const dayPeriod = dayPeriods(locale)[hour24 < 12 ? 0 : 1];

  return formatPattern(pattern, (token) => {
    switch (token) {
      case 'HH':
        return pad(hour24);
      case 'H':
        return String(hour24);
      case 'hh':
        return pad(hour12);
      case 'h':
        return String(hour12);
      case 'mm':
        return pad(parts.minute);
      case 'm':
        return String(parts.minute);
      case 'ss':
        return pad(parts.second);
      case 's':
        return String(parts.second);
      case 'SSS':
        return String(parts.millisecond).padStart(3, '0');
      case 'a':
        return dayPeriod;
      default:
        return null;
    }
  });
}

/**
 * Format a canonical date and time using separate date and time patterns.
 *
 * @param date - Canonical date to format.
 * @param time - Canonical time of day to format.
 * @param datePattern - Pattern used for the date portion.
 * @param timePattern - Pattern used for the time portion.
 * @param context - Locale, calendar and week conventions.
 */
export function formatIsoDateTime(date: IsoDate, time: IsoTime, datePattern: string, timePattern: string, context: IDateFormatContext): string {
  return `${formatIsoDate(date, datePattern, context)} ${formatIsoTime(time, timePattern, context.locale)}`.trim();
}

/**
 * Parse canonical time-of-day components.
 *
 * @param time - Candidate `HH:mm`, `HH:mm:ss` or `HH:mm:ss.SSS` value.
 */
export function parseTimeParts(time: string): { hour: number; minute: number; second: number; millisecond: number } | null {
  const match = /^(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/.exec(time.trim());

  if (!match) return null;

  const hour = Number(match[1]);
  const minute = Number(match[2]);
  const second = Number(match[3] ?? 0);
  const millisecond = Number((match[4] ?? '0').padEnd(3, '0'));

  if (hour > 23 || minute > 59 || second > 59 || millisecond > 999) return null;

  return { hour, minute, second, millisecond };
}

/**
 * Serialize time components into the shortest canonical representation for the requested precision.
 *
 * @param parts - Time components to serialize.
 * @param precision - Smallest unit retained in the result.
 */
export function serializeTime(
  parts: { hour: number; minute: number; second?: number; millisecond?: number },
  precision: 'hour' | 'minute' | 'second' | 'millisecond' = 'minute'
): IsoTime {
  const base = `${pad(parts.hour)}:${pad(parts.minute)}`;

  if (precision === 'hour' || precision === 'minute') return base;

  if (precision === 'second') return `${base}:${pad(parts.second ?? 0)}`;

  return `${base}:${pad(parts.second ?? 0)}.${String(parts.millisecond ?? 0).padStart(3, '0')}`;
}

/**
 * Return the localized AM/PM labels used for a locale.
 *
 * @param locale - BCP 47 locale to inspect.
 */
export function dayPeriods(locale: string): readonly [string, string] {
  const cached = DAY_PERIOD_CACHE.get(locale);

  if (cached) return cached;

  const formatter = new Intl.DateTimeFormat(locale, { hour: 'numeric', hour12: true });
  const read = (hour: number): string =>
    formatter.formatToParts(new Date(2000, 0, 1, hour)).find((part) => part.type === 'dayPeriod')?.value ?? (hour < 12 ? 'AM' : 'PM');
  const result: readonly [string, string] = [read(9), read(21)];

  DAY_PERIOD_CACHE.set(locale, result);

  return result;
}

/**
 * Convert localized digits in a string to ASCII digits so strict numeric parsing can read them.
 *
 * @param value - Text that may contain locale-specific digits.
 * @param locale - BCP 47 locale whose digit shapes should be recognized.
 */
export function normalizeDigits(value: string, locale: string): string {
  if (!/\p{Nd}/u.test(value)) return value;

  const formatter = new Intl.NumberFormat(locale, { useGrouping: false });

  return [...value]
    .map((character) => {
      if (!/\p{Nd}/u.test(character)) return character;

      const digit = Array.from({ length: 10 }, (_, index) => index).find((candidate) => formatter.format(candidate) === character);

      return digit === undefined ? character : String(digit);
    })
    .join('');
}

/**
 * Return the localized numeric label of a week number.
 *
 * @param week - Week number to format.
 * @param locale - BCP 47 locale used for the digits.
 */
export function formatWeekNumber(week: number, locale: string): string {
  return new Intl.NumberFormat(locale, { useGrouping: false, minimumIntegerDigits: 2 }).format(week);
}

/**
 * Return the canonical first day of a displayed week used for week-number headers.
 *
 * @param isoDate - Date inside the week.
 * @param weekStartsOn - Zero-based first day of the week.
 */
export function isoWeekStart(isoDate: IsoDate, weekStartsOn: number): IsoDate {
  return startOfWeek(isoDate, weekStartsOn);
}

/**
 * Return the display label of a canonical day number, used by serialization demonstrations.
 *
 * @param isoDate - Canonical date to label.
 * @param locale - BCP 47 locale used for the label.
 */
export function longLocalizedDate(isoDate: IsoDate, locale: string): string {
  const parts = parseIsoDate(isoDate);

  if (!parts) return '';

  return new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeZone: 'UTC' }).format(new Date(Date.UTC(parts.year, parts.month - 1, parts.day)));
}

/**
 * Return the localized quarter label for a canonical date.
 *
 * @param isoDate - Date inside the quarter.
 * @param locale - BCP 47 locale used for the number.
 */
export function quarterLabel(isoDate: IsoDate, locale: string): string {
  return `Q${new Intl.NumberFormat(locale, { useGrouping: false }).format(quarterOf(isoDate) + 1)}`;
}

//#region Helpers

function formatPattern(pattern: string, resolve: (token: string) => string | null): string {
  let result = '';
  let index = 0;

  while (index < pattern.length) {
    const character = pattern[index];

    if (character === "'") {
      const end = pattern.indexOf("'", index + 1);

      if (end === -1) {
        result += pattern.slice(index + 1);
        break;
      }

      result += pattern.slice(index + 1, end);
      index = end + 1;

      continue;
    }

    const token = DATE_PATTERN_TOKENS.find((candidate) => pattern.startsWith(candidate, index));

    if (token) {
      result += resolve(token) ?? token;
      index += token.length;

      continue;
    }

    result += character;
    index += 1;
  }

  return result;
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

//#endregion

/**
 * Build a canonical date from displayed year, month and day with bounds validation.
 *
 * @param year - Displayed calendar year.
 * @param month - One-based displayed month number.
 * @param day - One-based displayed day of month.
 */
export function safeGregorianDate(year: number, month: number, day: number): IsoDate | null {
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day) || month < 1 || month > 12 || day < 1) return null;

  const candidate = toIsoDate(year, month, day);
  const parsed = parseIsoDate(candidate);

  return parsed && parsed.day === day ? candidate : null;
}

export type { IDateFormatContext } from '@core/interfaces/idate-format-context.interface';
