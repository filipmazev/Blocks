import type { ICompiledPattern } from '@core/interfaces/icompiled-pattern.interface';
import type { IDateParseContext } from '@core/interfaces/idate-parse-context.interface';
import type { IParsedFields } from '@core/interfaces/iparsed-fields.interface';
import type { IParseResult, IsoDate, IsoTime, TimePrecision } from '@core/types/date-time.types';

import { DATE_PATTERN_TOKENS } from '@core/constants/date-time.constants';

import { addDays, addMonths, addYears, compareIsoDates, dayNumber, fromDayNumber, parseIsoDate, startOfMonth, toIsoDate, weekday } from './civil-date.helpers';
import { dayPeriods, normalizeDigits, safeGregorianDate, serializeTime } from './date-time-format.helpers';

/**
 * Parse a date from typed text using a Blocks pattern.
 *
 * Parsing is strict: missing components, impossible dates, unknown names and ambiguous 12-hour values return explicit errors instead of a guessed value.
 *
 * @param text - User input to parse.
 * @param pattern - Pattern the input must match, using the same tokens as formatting.
 * @param context - Locale and calendar used to resolve names and displayed dates.
 */
export function parseDateInput(text: string, pattern: string, context: IDateParseContext): IParseResult<IsoDate> {
  const trimmed = text.trim();

  if (!trimmed) return failure('empty', 'The value is empty.');

  const fields = matchPattern(trimmed, pattern, context);

  if (!fields) return failure('format', `The value does not match the pattern '${pattern}'.`);

  if (fields.year === undefined || fields.monthIndex === undefined || fields.day === undefined)
    return failure('format', 'The value is missing a date component.');

  const isoDate = context.calendar.isGregorian
    ? safeGregorianDate(fields.year, fields.monthIndex + 1, fields.day)
    : context.calendar.fromDateParts({ year: fields.year, monthIndex: fields.monthIndex, day: fields.day }, context.locale);

  if (!isoDate) return failure('range', 'The value is not a valid calendar date.');

  return success(isoDate);
}

/**
 * Parse a time of day from typed text using a Blocks pattern.
 *
 * @param text - User input to parse.
 * @param pattern - Time pattern such as `'HH:mm'` or `'hh:mm a'`.
 * @param locale - BCP 47 locale used for the day period and digits.
 * @param precision - Smallest unit accepted by the field; finer input is rejected.
 */
export function parseTimeInput(text: string, pattern: string, locale: string, precision: TimePrecision = 'minute'): IParseResult<IsoTime> {
  const trimmed = text.trim();

  if (!trimmed) return failure('empty', 'The value is empty.');

  const fields = matchTimePattern(trimmed, pattern, locale);

  if (!fields) return failure('format', `The value does not match the pattern '${pattern}'.`);

  if (fields.hour === undefined || (fields.minute === undefined && precision !== 'hour')) return failure('format', 'The value is missing a time component.');

  let hour = fields.hour;

  if (fields.dayPeriod) {
    const periods = dayPeriods(locale);
    const period = fields.dayPeriod.toLocaleLowerCase();
    const isPm = period === periods[1].toLocaleLowerCase();

    if (hour > 12 || hour < 1) return failure('range', 'The hour is not valid for a 12-hour clock.');

    hour = hour === 12 ? (isPm ? 12 : 0) : isPm ? hour + 12 : hour;
  } else if (fields.hasHourCycleToken && hour > 23) {
    return failure('range', 'The hour must be between 00 and 23.');
  }

  const minute = fields.minute ?? 0;
  const second = fields.second ?? 0;
  const millisecond = fields.millisecond ?? 0;

  if (hour > 23 || minute > 59 || second > 59 || millisecond > 999) return failure('range', 'The time is outside the valid range.');

  if (precision === 'hour' && (minute !== 0 || second !== 0 || millisecond !== 0)) return failure('range', 'This field accepts whole hours only.');

  if (precision === 'minute' && (second !== 0 || millisecond !== 0)) return failure('range', 'This field accepts whole minutes only.');

  if (precision === 'second' && millisecond !== 0) return failure('range', 'This field accepts whole seconds only.');

  return success(serializeTime({ hour, minute, second, millisecond }, precision));
}

/**
 * Parse a date-time value from typed text using separate date and time patterns.
 *
 * @param text - User input containing both date and time portions.
 * @param datePattern - Pattern used for the date portion.
 * @param timePattern - Pattern used for the time portion.
 * @param context - Locale and calendar used to resolve names and displayed dates.
 * @param precision - Smallest accepted time unit.
 */
export function parseDateTimeInput(
  text: string,
  datePattern: string,
  timePattern: string,
  context: IDateParseContext,
  precision: TimePrecision = 'minute'
): IParseResult<{ date: IsoDate; time: IsoTime }> {
  const trimmed = text.trim();

  if (!trimmed) return failure('empty', 'The value is empty.');

  const separator = indexOfTimeStart(trimmed, timePattern);

  if (separator <= 0) return failure('format', 'The value must contain a date and a time.');

  const date = parseDateInput(trimmed.slice(0, separator), datePattern, context);

  if (date.value === null) return { value: null, error: date.error, message: date.message };

  const time = parseTimeInput(trimmed.slice(separator), timePattern, context.locale, precision);

  if (time.value === null) return { value: null, error: time.error, message: time.message };

  return success({ date: date.value, time: time.value });
}

/**
 * Return a keyboard mask hint for a pattern, replacing date tokens with placeholder characters.
 *
 * @param pattern - Pattern to describe.
 */
export function patternMask(pattern: string): string {
  return pattern.replace(/yyyy|MMMM|MMM|EEEE|EEE|EEEEE|SSS|yy|MM|dd|HH|hh|mm|ss|ww|QQQ|M|d|H|h|m|s|w|Q|a/g, (token) => {
    if (token === 'yyyy') return 'YYYY';

    if (token === 'yy') return 'YY';

    if (['M', 'MM', 'd', 'dd', 'H', 'HH', 'h', 'hh', 'm', 'mm', 's', 'ss', 'w', 'ww', 'Q'].includes(token)) return token[0].repeat(token.length);

    if (token === 'SSS') return 'SSS';

    return token;
  });
}

/**
 * Insert pattern separators while the user types a numeric date.
 *
 * The mask rebuilds only numeric patterns: alphabetic month names, weekday names and free-form natural-language input are left untouched. Literal
 * separators are inserted after each token is filled so keyboard and screen-reader users can edit predictable text.
 *
 * @param value - Current input text.
 * @param pattern - Pattern whose literal separators should be inserted.
 */
export function applyDateInputMask(value: string, pattern: string): string {
  if (/MMMM|MMM|EEEE|EEE|EEEEE|QQQ|a/.test(pattern) || /[a-z]/i.test(value)) return value;

  const segments = maskSegments(pattern);
  const digits = value.replace(/\D/g, '');

  let result = '';
  let cursor = 0;

  for (const segment of segments) {
    if (segment.literal !== undefined) {
      if (cursor > 0 && cursor < digits.length) result += segment.literal;

      continue;
    }

    const take = digits.slice(cursor, cursor + segment.length);

    result += take;
    cursor += take.length;

    if (cursor >= digits.length) break;
  }

  return result || value;
}

/**
 * Return the maximum number of digits a numeric pattern accepts.
 *
 * @param pattern - Pattern to measure.
 */
export function patternDigitCount(pattern: string): number {
  return maskSegments(pattern).reduce((total, segment) => total + (segment.literal === undefined ? segment.length : 0), 0);
}

//#region Helpers

function success<T>(value: T): IParseResult<T> {
  return { value, error: null, message: null };
}

function failure<T>(error: IParseResult<T>['error'], message: string): IParseResult<T> {
  return { value: null, error, message };
}

function indexOfTimeStart(text: string, timePattern: string): number {
  const wantsDayPeriod = /a/.test(timePattern);
  const match = wantsDayPeriod ? /[T\s,]+(?=\d{1,2}:\d{2})/ : /\s+(?=\d{1,2}:\d{2})/;
  const found = match.exec(text);

  return found ? found.index + found[0].length : -1;
}

function compilePattern(pattern: string, context: IDateParseContext): ICompiledPattern {
  const tokens: string[] = [];
  const monthNames = context.calendar.getMonthNames(context.locale);
  const shortMonthNames = context.calendar.getShortMonthNames(context.locale);
  const weekdayNames = [
    ...context.calendar.getWeekdayNames(context.locale, 'long'),
    ...context.calendar.getWeekdayNames(context.locale, 'short'),
    ...context.calendar.getWeekdayNames(context.locale, 'narrow')
  ];

  let source = '^';

  for (let index = 0; index < pattern.length; index++) {
    const character = pattern[index];

    if (/\s/.test(character)) {
      source += '\\s*';

      continue;
    }

    if (character === "'") {
      const end = pattern.indexOf("'", index + 1);
      const literal = end === -1 ? pattern.slice(index + 1) : pattern.slice(index + 1, end);

      source += escapeRegExp(literal);
      index = end === -1 ? pattern.length : end;

      continue;
    }

    const token = DATE_PATTERN_TOKENS.find((candidate) => pattern.startsWith(candidate, index));

    if (!token) {
      source += escapeRegExp(character);

      continue;
    }

    index += token.length - 1;

    switch (token) {
      case 'yyyy':
        tokens.push('year');
        source += '(\\d{4,6})';
        break;
      case 'yy':
        tokens.push('year2');
        source += '(\\d{2})';
        break;
      case 'MMMM':
      case 'MMM':
        tokens.push('monthName');
        source += `(${monthNames.concat(shortMonthNames).filter(Boolean).map(escapeRegExp).join('|')})`;
        break;
      case 'MM':
        tokens.push('month');
        source += '(\\d{2})';
        break;
      case 'M':
        tokens.push('month');
        source += '(\\d{1,2})';
        break;
      case 'dd':
        tokens.push('day');
        source += '(\\d{2})';
        break;
      case 'd':
        tokens.push('day');
        source += '(\\d{1,2})';
        break;
      case 'EEEE':
      case 'EEE':
      case 'EEEEE':
        tokens.push('weekday');
        source += `(${weekdayNames.filter(Boolean).map(escapeRegExp).join('|')})`;
        break;
      case 'HH':
      case 'hh':
        tokens.push('hour');
        source += '(\\d{2})';
        break;
      case 'H':
      case 'h':
        tokens.push('hour');
        source += '(\\d{1,2})';
        break;
      case 'mm':
      case 'ss':
        tokens.push(token === 'mm' ? 'minute' : 'second');
        source += '(\\d{2})';
        break;
      case 'm':
      case 's':
        tokens.push(token === 'm' ? 'minute' : 'second');
        source += '(\\d{1,2})';
        break;
      case 'SSS':
        tokens.push('millisecond');
        source += '(\\d{3})';
        break;
      case 'a':
        tokens.push('dayPeriod');
        source += `(${dayPeriods(context.locale).map(escapeRegExp).join('|')})`;
        break;
      case 'QQQ':
        tokens.push('quarter');
        source += '(Q[1-4])';
        break;
      case 'Q':
        tokens.push('quarter');
        source += '(Q?[1-4])';
        break;
      case 'ww':
      case 'w':
        tokens.push('week');
        source += '(\\d{1,2})';
        break;
      default:
        source += escapeRegExp(token);
    }
  }

  return { regex: new RegExp(`${source}$`, 'iu'), tokens };
}

function matchPattern(text: string, pattern: string, context: IDateParseContext): IParsedFields | null {
  const compiled = compilePattern(pattern, context);
  const normalized = normalizeDigits(text, context.locale);
  const match = compiled.regex.exec(normalized);

  if (!match) return null;

  const fields: IParsedFields = { hasHourCycleToken: /H|h/.test(pattern) };
  const monthNames = context.calendar.getMonthNames(context.locale);
  const shortMonthNames = context.calendar.getShortMonthNames(context.locale);

  compiled.tokens.forEach((token, index) => {
    const raw = match[index + 1];

    if (raw === undefined) return;

    switch (token) {
      case 'year':
        fields.year = Number(raw);
        break;
      case 'year2': {
        const twoDigit = Number(raw);

        fields.year = twoDigit < 70 ? 2000 + twoDigit : 1900 + twoDigit;
        break;
      }

      case 'month':
        fields.monthIndex = Number(raw) - 1;
        break;
      case 'monthName': {
        const lower = raw.toLocaleLowerCase();
        const index = monthNames.findIndex((name) => name.toLocaleLowerCase() === lower);

        fields.monthIndex = index >= 0 ? index : shortMonthNames.findIndex((name) => name.toLocaleLowerCase() === lower);
        break;
      }

      case 'day':
        fields.day = Number(raw);
        break;
      case 'hour':
        fields.hour = Number(raw);
        break;
      case 'minute':
        fields.minute = Number(raw);
        break;
      case 'second':
        fields.second = Number(raw);
        break;
      case 'millisecond':
        fields.millisecond = Number(raw);
        break;
      case 'dayPeriod':
        fields.dayPeriod = raw;
        break;
      case 'quarter':
        fields.quarter = Number(raw.replace(/[Qq]/, ''));
        break;
      case 'week':
        fields.week = Number(raw);
        break;
      default:
        break;
    }
  });

  if (fields.monthIndex !== undefined && fields.year !== undefined && fields.quarter !== undefined) {
    fields.monthIndex = (fields.quarter - 1) * 3;
  }

  return fields;
}

function matchTimePattern(text: string, pattern: string, locale: string): IParsedFields | null {
  const tokens: string[] = [];

  let source = '^';

  for (let index = 0; index < pattern.length; index++) {
    const character = pattern[index];

    if (/\s/.test(character)) {
      source += '\\s*';

      continue;
    }

    if (character === "'") {
      const end = pattern.indexOf("'", index + 1);

      source += escapeRegExp(end === -1 ? pattern.slice(index + 1) : pattern.slice(index + 1, end));
      index = end === -1 ? pattern.length : end;

      continue;
    }

    const token = DATE_PATTERN_TOKENS.find((candidate) => pattern.startsWith(candidate, index));

    if (!token) {
      source += escapeRegExp(character);

      continue;
    }

    index += token.length - 1;

    switch (token) {
      case 'HH':
      case 'hh':
        tokens.push('hour');
        source += '(\\d{2})';
        break;
      case 'H':
      case 'h':
        tokens.push('hour');
        source += '(\\d{1,2})';
        break;
      case 'mm':
        tokens.push('minute');
        source += '(\\d{2})';
        break;
      case 'm':
        tokens.push('minute');
        source += '(\\d{1,2})';
        break;
      case 'ss':
        tokens.push('second');
        source += '(\\d{2})';
        break;
      case 's':
        tokens.push('second');
        source += '(\\d{1,2})';
        break;
      case 'SSS':
        tokens.push('millisecond');
        source += '(\\d{3})';
        break;
      case 'a':
        tokens.push('dayPeriod');
        source += `(${dayPeriods(locale).map(escapeRegExp).join('|')})`;
        break;
      default:
        source += escapeRegExp(token);
    }
  }

  const match = new RegExp(`${source}$`, 'iu').exec(normalizeDigits(text, locale));

  if (!match) return null;

  const fields: IParsedFields = { hasHourCycleToken: /H|h/.test(pattern) };

  tokens.forEach((token, index) => {
    const raw = match[index + 1];

    if (raw === undefined) return;

    if (token === 'hour') fields.hour = Number(raw);
    else if (token === 'minute') fields.minute = Number(raw);
    else if (token === 'second') fields.second = Number(raw);
    else if (token === 'millisecond') fields.millisecond = Number(raw);
    else if (token === 'dayPeriod') fields.dayPeriod = raw;
  });

  return fields;
}

function maskSegments(pattern: string): readonly { literal?: string; length: number }[] {
  const segments: { literal?: string; length: number }[] = [];

  let literal = '';

  for (let index = 0; index < pattern.length; index++) {
    const character = pattern[index];
    const token = DATE_PATTERN_TOKENS.find((candidate) => pattern.startsWith(candidate, index));

    if (!token) {
      literal += character;

      continue;
    }

    if (literal) {
      segments.push({ literal, length: 0 });
      literal = '';
    }

    segments.push({ length: /SSS|yyyy/.test(token) ? 4 : token.length });
    index += token.length - 1;
  }

  if (literal) segments.push({ literal, length: 0 });

  return segments;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

//#endregion

/**
 * Return the day number of the first day of a given week-based year, used by ISO week calculations.
 *
 * @param year - Week-based year.
 * @param weekStartsOn - Zero-based first day of the week.
 * @param minimalDaysInFirstWeek - Minimum days of the new year required for week 1.
 */
export function firstWeekStart(year: number, weekStartsOn: number, minimalDaysInFirstWeek: number): IsoDate {
  const januaryFirst = toIsoDate(year, 1, 1);
  const offset = (weekday(januaryFirst) - weekStartsOn + 7) % 7;
  const candidate = addDays(januaryFirst, -offset);
  const anchor = fromDayNumber(dayNumber(candidate) + (7 - minimalDaysInFirstWeek));

  return parseIsoDate(anchor)?.year === year ? candidate : addDays(candidate, 7);
}

/**
 * Resolve a canonical date from a week-based year and week number.
 *
 * @param year - Week-based year.
 * @param week - One-based week number.
 * @param weekStartsOn - Zero-based first day of the week.
 * @param minimalDaysInFirstWeek - Minimum days of the new year required for week 1.
 */
export function dateFromWeek(year: number, week: number, weekStartsOn: number, minimalDaysInFirstWeek: number): IsoDate {
  return addDays(firstWeekStart(year, weekStartsOn, minimalDaysInFirstWeek), (week - 1) * 7);
}

/**
 * Resolve a canonical date from quarter, day and year components.
 *
 * @param year - Calendar year.
 * @param quarter - One-based quarter number.
 * @param day - One-based day inside the quarter.
 */
export function dateFromQuarterDay(year: number, quarter: number, day: number): IsoDate | null {
  const start = startOfMonth(toIsoDate(year, (quarter - 1) * 3 + 1, 1));
  const candidate = addDays(start, day - 1);

  return compareIsoDates(startOfMonth(candidate), start) === 0 ? candidate : null;
}

/**
 * Build a display date for a month and year without timezone conversion.
 *
 * @param year - Calendar year.
 * @param monthIndex - Zero-based month index.
 */
export function monthAnchor(year: number, monthIndex: number): IsoDate {
  return addMonths(toIsoDate(year, 1, 1), monthIndex);
}

/**
 * Build a display date for a year and clamp it for valid date arithmetic.
 *
 * @param year - Calendar year.
 */
export function yearAnchor(year: number): IsoDate {
  return addYears(toIsoDate(2026, 1, 1), year - 2026);
}

export type { IDateParseContext } from '@core/interfaces/idate-parse-context.interface';
