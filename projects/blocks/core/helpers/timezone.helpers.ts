import type { IWeekInfoSource } from '@core/interfaces/iweek-info-source.interface';
import type { ITimeZoneOption, IZonedTimeResolution, LocalTimeDisambiguation } from '@core/types/date-time.types';

import { MS_PER_MINUTE, TIME_ZONE_FALLBACKS } from '@core/constants/date-time.constants';
import { TIME_ZONE_FORMATTER_CACHE } from '@core/constants/date-time-caches.constants';

import { toIsoDate } from './civil-date.helpers';

/**
 * Return the UTC offset of a time zone at a specific instant.
 *
 * @param instant - Instant whose offset should be resolved.
 * @param timeZone - IANA time-zone identifier.
 */
export function getTimeZoneOffsetMinutes(instant: Date, timeZone: string): number {
  return getZonedParts(instant, timeZone).offsetMinutes;
}

/**
 * Return the wall-clock components of an instant in a time zone.
 *
 * @param instant - Instant to convert.
 * @param timeZone - IANA time-zone identifier.
 */
export function getZonedParts(
  instant: Date,
  timeZone: string
): { year: number; month: number; day: number; hour: number; minute: number; second: number; millisecond: number; offsetMinutes: number } {
  const formatter = getPartsFormatter(timeZone);
  const parts = formatter.formatToParts(instant);
  const read = (type: string): number => Number(parts.find((part) => part.type === type)?.value ?? 0);
  const year = read('year');
  const month = read('month');
  const day = read('day');
  const hour = read('hour') % 24;
  const minute = read('minute');
  const second = read('second');
  const millisecond = instant.getMilliseconds();
  const asUtc = Date.UTC(year, month - 1, day, hour, minute, second, millisecond);

  return { year, month, day, hour, minute, second, millisecond, offsetMinutes: Math.round((asUtc - instant.getTime()) / MS_PER_MINUTE) };
}

/**
 * Return the canonical local date of an instant in a time zone.
 *
 * @param instant - Instant to convert.
 * @param timeZone - IANA time-zone identifier.
 */
export function isoDateInTimeZone(instant: Date, timeZone: string): string {
  const parts = getZonedParts(instant, timeZone);

  return toIsoDate(parts.year, parts.month, parts.day);
}

/**
 * Return the local time of day of an instant in a time zone.
 *
 * @param instant - Instant to convert.
 * @param timeZone - IANA time-zone identifier.
 * @param includeMilliseconds - Whether the serialized time includes fractional seconds. Defaults to `false`.
 */
export function isoTimeInTimeZone(instant: Date, timeZone: string, includeMilliseconds: boolean = false): string {
  const parts = getZonedParts(instant, timeZone);
  const base = `${pad(parts.hour)}:${pad(parts.minute)}${includeMilliseconds ? `:${pad(parts.second)}.${String(parts.millisecond).padStart(3, '0')}` : ''}`;

  return base;
}

/**
 * Resolve a wall-clock date and time inside a time zone to a unique instant.
 *
 * Nonexistent times occur when the offset moves forwards and ambiguous times when it moves backwards. The disambiguation policy chooses an earlier,
 * later, compatible or rejecting outcome without guessing silently.
 *
 * @param parts - Wall-clock components to resolve; milliseconds default to zero.
 * @param timeZone - IANA time-zone identifier.
 * @param disambiguation - Policy applied to nonexistent or ambiguous wall clocks. Defaults to `'compatible'`.
 */
export function zonedPartsToInstant(
  parts: { year: number; month: number; day: number; hour: number; minute: number; second?: number; millisecond?: number },
  timeZone: string,
  disambiguation: LocalTimeDisambiguation = 'compatible'
): IZonedTimeResolution {
  const desired = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second ?? 0, parts.millisecond ?? 0);
  const firstOffset = getTimeZoneOffsetMinutes(new Date(desired), timeZone) * MS_PER_MINUTE;
  const firstCandidate = new Date(desired - firstOffset);
  const secondOffset = getTimeZoneOffsetMinutes(firstCandidate, timeZone) * MS_PER_MINUTE;
  const secondCandidate = new Date(desired - secondOffset);
  const matches = (candidate: Date): boolean => {
    const actual = getZonedParts(candidate, timeZone);

    return (
      actual.year === parts.year &&
      actual.month === parts.month &&
      actual.day === parts.day &&
      actual.hour === parts.hour &&
      actual.minute === parts.minute &&
      actual.second === (parts.second ?? 0)
    );
  };

  const candidates = [firstCandidate, secondCandidate].filter((candidate) => matches(candidate));
  const unique = [...new Set(candidates.map((candidate) => candidate.getTime()))].sort((a, b) => a - b);

  if (unique.length === 1) return { instant: new Date(unique[0]), ambiguous: false, nonexistent: false };

  if (unique.length > 1) {
    if (disambiguation === 'reject') return { instant: null, ambiguous: true, nonexistent: false };

    return { instant: new Date(disambiguation === 'later' ? unique[unique.length - 1] : unique[0]), ambiguous: true, nonexistent: false };
  }

  if (disambiguation === 'reject') return { instant: null, ambiguous: false, nonexistent: true };

  const beforeOffset = getTimeZoneOffsetMinutes(new Date(desired - 86_400_000), timeZone) * MS_PER_MINUTE;
  const afterOffset = getTimeZoneOffsetMinutes(new Date(desired + 86_400_000), timeZone) * MS_PER_MINUTE;
  const earlier = new Date(desired - beforeOffset);
  const later = new Date(desired - afterOffset);

  return { instant: disambiguation === 'earlier' ? earlier : later, ambiguous: false, nonexistent: true };
}

/**
 * Convert a wall-clock value with a time zone into an ISO instant with explicit UTC offset.
 *
 * @param value - Wall-clock date, time and IANA time-zone identifier.
 * @param disambiguation - Policy applied to nonexistent or ambiguous wall clocks. Defaults to `'compatible'`.
 */
export function zonedValueToInstantIso(
  value: { date: string; time: string; timeZone: string },
  disambiguation: LocalTimeDisambiguation = 'compatible'
): string | null {
  const date = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.date);
  const time = /^(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?$/.exec(value.time);

  if (!date || !time) return null;

  const resolution = zonedPartsToInstant(
    {
      year: Number(date[1]),
      month: Number(date[2]),
      day: Number(date[3]),
      hour: Number(time[1]),
      minute: Number(time[2]),
      second: Number(time[3] ?? 0),
      millisecond: Number((time[4] ?? '0').padEnd(3, '0'))
    },
    value.timeZone,
    disambiguation
  );

  if (!resolution.instant) return null;

  return toIsoInstantWithOffset(resolution.instant, value.timeZone);
}

/**
 * Format an instant as ISO 8601 with the offset of a specific time zone.
 *
 * @param instant - Instant to serialize.
 * @param timeZone - IANA time-zone identifier supplying the offset.
 */
export function toIsoInstantWithOffset(instant: Date, timeZone: string): string {
  const parts = getZonedParts(instant, timeZone);
  const offset = parts.offsetMinutes;
  const sign = offset < 0 ? '-' : '+';
  const absolute = Math.abs(offset);

  return `${toIsoDate(parts.year, parts.month, parts.day)}T${pad(parts.hour)}:${pad(parts.minute)}:${pad(parts.second)}.${String(parts.millisecond).padStart(3, '0')}${sign}${pad(Math.floor(absolute / 60))}:${pad(absolute % 60)}`;
}

/**
 * Format a UTC offset in minutes as a `GMT±HH:MM` label.
 *
 * @param offsetMinutes - Offset from UTC in minutes.
 */
export function formatOffsetLabel(offsetMinutes: number): string {
  const sign = offsetMinutes < 0 ? '-' : '+';
  const absolute = Math.abs(offsetMinutes);

  return `GMT${sign}${pad(Math.floor(absolute / 60))}:${pad(absolute % 60)}`;
}

/**
 * Resolve a localized label and current offset for one time zone.
 *
 * @param id - IANA time-zone identifier.
 * @param locale - BCP 47 locale used for the label.
 * @param instant - Instant whose offset and name should be shown. Defaults to the current instant.
 */
export function timeZoneOption(id: string, locale: string, instant: Date = new Date()): ITimeZoneOption {
  let label = id.replaceAll('_', ' ');
  let offsetMinutes: number | null = null;

  try {
    const formatter = new Intl.DateTimeFormat(locale, { timeZone: id, timeZoneName: 'long', year: 'numeric' });
    const name = formatter.formatToParts(instant).find((part) => part.type === 'timeZoneName')?.value;

    label = name ? `${label} (${name})` : label;
    offsetMinutes = getTimeZoneOffsetMinutes(instant, id);
  } catch {
    offsetMinutes = null;
  }

  return { id, label, offsetMinutes };
}

/**
 * Return sorted IANA time-zone identifiers supported by the runtime.
 */
export function supportedTimeZones(): readonly string[] {
  const intl = Intl as typeof Intl & { supportedValuesOf?: (key: 'timeZone') => string[] };

  return intl.supportedValuesOf?.('timeZone') ?? TIME_ZONE_FALLBACKS;
}

/**
 * Return the locale's preferred first day of the week and minimum first-week length.
 *
 * @param locale - BCP 47 locale to inspect.
 */
export function localeWeekInfo(locale: string): { firstDay: number; minimalDays: number } {
  const intlLocale = new Intl.Locale(locale) as unknown as IWeekInfoSource;
  const info = intlLocale.getWeekInfo?.() ?? intlLocale.weekInfo;

  return { firstDay: info?.firstDay === 7 ? 0 : (info?.firstDay ?? 1), minimalDays: info?.minimalDays ?? 4 };
}

/**
 * Return whether a locale commonly uses a 24-hour clock.
 *
 * @param locale - BCP 47 locale to inspect.
 */
export function localeUsesHour24(locale: string): boolean {
  const formatted = new Intl.DateTimeFormat(locale, { hour: 'numeric' }).formatToParts(new Date(2026, 0, 1, 15));

  return !formatted.some((part) => part.type === 'dayPeriod');
}

//#region Helpers

function getPartsFormatter(timeZone: string): Intl.DateTimeFormat {
  const key = `parts:${timeZone}`;
  const cached = TIME_ZONE_FORMATTER_CACHE.get(key);

  if (cached) return cached;

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  TIME_ZONE_FORMATTER_CACHE.set(key, formatter);

  return formatter;
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

//#endregion

/**
 * Return the wall-clock time of an instant in a time zone at a requested precision.
 *
 * @param instant - Instant to convert.
 * @param timeZone - IANA time-zone identifier.
 * @param precision - Smallest retained time unit. Defaults to `'minute'`.
 */
export function zonedTimeOfInstant(instant: Date, timeZone: string, precision: 'hour' | 'minute' | 'second' | 'millisecond' = 'minute'): string {
  const parts = getZonedParts(instant, timeZone);
  const base = `${pad(parts.hour)}:${pad(parts.minute)}`;

  if (precision === 'hour' || precision === 'minute') return base;

  if (precision === 'second') return `${base}:${pad(parts.second)}`;

  return `${base}:${pad(parts.second)}.${String(parts.millisecond).padStart(3, '0')}`;
}
