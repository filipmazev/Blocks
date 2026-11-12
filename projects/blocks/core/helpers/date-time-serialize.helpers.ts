import type { IDotNetDateValue } from '@core/interfaces/idot-net-date-value.interface';
import type { ILegacyMicrosoftDate } from '@core/interfaces/ilegacy-microsoft-date.interface';
import type { IDateTimeValue, IsoDate, IsoTime } from '@core/types/date-time.types';
import type { DateTimeSerializationKind } from '@core/types/date-time-serialization.types';

import { addDays, dayNumber, differenceInDays, parseIsoDate } from './civil-date.helpers';
import { parseTimeParts, serializeTime } from './date-time-format.helpers';
import { getZonedParts, isoDateInTimeZone, isoTimeInTimeZone, zonedPartsToInstant } from './timezone.helpers';

/**
 * Convert a canonical date into a JavaScript `Date` at local midnight.
 *
 * This is an explicit conversion boundary: date-only values stay calendar days, and this helper uses local civil components rather than UTC midnight.
 *
 * @param isoDate - Canonical date to convert.
 */
export function isoDateToLocalDate(isoDate: IsoDate): Date | null {
  const parts = parseIsoDate(isoDate);

  return parts ? new Date(parts.year, parts.month - 1, parts.day) : null;
}

/**
 * Read a canonical date from a JavaScript `Date` using its local civil components.
 *
 * @param date - Date whose local year, month and day should be read.
 */
export function isoDateFromLocalDate(date: Date): IsoDate {
  return `${String(date.getFullYear()).padStart(4, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

/**
 * Resolve a local date and time in a time zone to its unique instant.
 *
 * @param date - Canonical local date.
 * @param time - Canonical local time of day.
 * @param timeZone - IANA time-zone identifier.
 */
export function dateTimeToInstant(date: IsoDate, time: IsoTime, timeZone: string): Date | null {
  const dateParts = parseIsoDate(date);
  const timeParts = parseTimeParts(time);

  if (!dateParts || !timeParts) return null;

  return zonedPartsToInstant(
    {
      year: dateParts.year,
      month: dateParts.month,
      day: dateParts.day,
      hour: timeParts.hour,
      minute: timeParts.minute,
      second: timeParts.second,
      millisecond: timeParts.millisecond
    },
    timeZone
  ).instant;
}

/**
 * Read the local date and time of an instant in a time zone.
 *
 * @param instant - Instant to convert.
 * @param timeZone - IANA time-zone identifier.
 * @param precision - Smallest time unit retained in the result. Defaults to `'minute'`.
 */
export function dateTimeFromInstant(instant: Date, timeZone: string, precision: 'hour' | 'minute' | 'second' | 'millisecond' = 'minute'): IDateTimeValue {
  const parts = getZonedParts(instant, timeZone);

  return {
    date: isoDateInTimeZone(instant, timeZone),
    time: serializeTime(parts, precision),
    timeZone
  };
}

/**
 * Convert an instant into Unix seconds.
 *
 * @param instant - Instant to serialize.
 */
export function toUnixSeconds(instant: Date): number {
  return Math.floor(instant.getTime() / 1000);
}

/**
 * Convert Unix seconds into an instant.
 *
 * @param seconds - Seconds since the Unix epoch.
 */
export function fromUnixSeconds(seconds: number): Date {
  return new Date(seconds * 1000);
}

/**
 * Convert an instant into Unix milliseconds.
 *
 * @param instant - Instant to serialize.
 */
export function toUnixMilliseconds(instant: Date): number {
  return instant.getTime();
}

/**
 * Convert Unix milliseconds into an instant.
 *
 * @param milliseconds - Milliseconds since the Unix epoch.
 */
export function fromUnixMilliseconds(milliseconds: number): Date {
  return new Date(milliseconds);
}

/**
 * Serialize an instant as UTC ISO 8601 with the `Z` designator.
 *
 * @param instant - Instant to serialize.
 */
export function toUtcIso(instant: Date): string {
  return instant.toISOString();
}

/**
 * Parse an ISO 8601 date-time into explicit date, time and offset components.
 *
 * Offsets are preserved exactly; values without an offset remain local and do not produce an instant.
 *
 * @param value - ISO 8601 value such as `'2026-11-23T14:30:00+01:00'`, `'2026-11-23T13:30:00Z'` or `'2026-11-23T14:30:00'`.
 */
export function parseIsoDateTime(value: string): IDotNetDateValue | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,7}))?)?(Z|[+-]\d{2}:?\d{2})?$/.exec(value.trim());

  if (!match) return null;

  const date: IsoDate = `${match[1]}-${match[2]}-${match[3]}`;
  const fraction = (match[7] ?? '0').padEnd(3, '0').slice(0, 3);
  const time: IsoTime = serializeTime(
    { hour: Number(match[4]), minute: Number(match[5]), second: Number(match[6] ?? 0), millisecond: Number(fraction) },
    match[6] ? (match[7] ? 'millisecond' : 'second') : 'minute'
  );
  const offsetToken = match[8];
  const parsedDate = parseIsoDate(date);
  const parsedTime = parseTimeParts(time);

  if (!parsedDate || !parsedTime) return null;

  if (!offsetToken) {
    return { kind: 'local', date, time, offsetMinutes: null, instant: null };
  }

  const offsetMinutes = offsetToken === 'Z' ? 0 : parseOffsetMinutes(offsetToken);

  if (offsetMinutes === null) return null;

  const instant = new Date(
    Date.UTC(parsedDate.year, parsedDate.month - 1, parsedDate.day, parsedTime.hour, parsedTime.minute, parsedTime.second, parsedTime.millisecond) -
      offsetMinutes * 60_000
  );

  return { kind: offsetToken === 'Z' ? 'utc' : 'offset', date, time, offsetMinutes, instant };
}

/**
 * Serialize a local date-time without any offset, matching .NET `DateTimeKind.Unspecified`.
 *
 * @param date - Canonical local date.
 * @param time - Canonical local time of day.
 */
export function toLocalDateTimeIso(date: IsoDate, time: IsoTime): string {
  return `${date}T${normalizeTimeForSerialization(time)}`;
}

/**
 * Serialize a UTC instant as a .NET-compatible ISO string ending in `Z`.
 *
 * @param instant - Instant to serialize.
 */
export function toDotNetUtcIso(instant: Date): string {
  return instant.toISOString();
}

/**
 * Serialize an instant with the offset of a time zone, matching .NET `DateTimeOffset` ISO output.
 *
 * @param instant - Instant to serialize.
 * @param timeZone - IANA time-zone identifier supplying the offset.
 */
export function toDotNetOffsetIso(instant: Date, timeZone: string): string {
  const parts = getZonedParts(instant, timeZone);
  const sign = parts.offsetMinutes < 0 ? '-' : '+';
  const absolute = Math.abs(parts.offsetMinutes);

  return `${isoDateInTimeZone(instant, timeZone)}T${isoTimeInTimeZone(instant, timeZone, true)}${sign}${pad(Math.floor(absolute / 60))}:${pad(absolute % 60)}`;
}

/**
 * Parse a legacy Microsoft JSON date such as `/Date(1763908200000+0100)/`.
 *
 * Values without an offset are UTC, matching ASP.NET JSON serialization.
 *
 * @param value - Legacy JSON date text.
 */
export function parseMicrosoftJsonDate(value: string): ILegacyMicrosoftDate | null {
  const match = /^\/Date\((-?\d+)([+-]\d{4})?\)\/$/.exec(value.trim());

  if (!match) return null;

  const milliseconds = Number(match[1]);
  const offsetMinutes = match[2] ? parseOffsetMinutes(match[2]) : null;

  if (!Number.isFinite(milliseconds) || (match[2] && offsetMinutes === null)) return null;

  return { milliseconds, offsetMinutes, instant: new Date(milliseconds) };
}

/**
 * Serialize an instant as a legacy Microsoft JSON date.
 *
 * @param instant - Instant to serialize.
 * @param offsetMinutes - Optional offset in minutes to append for clients that expect a local offset; omitted values serialize as UTC.
 */
export function toMicrosoftJsonDate(instant: Date, offsetMinutes?: number): string {
  if (offsetMinutes === undefined) return `/Date(${instant.getTime()})/`;

  const sign = offsetMinutes < 0 ? '-' : '+';
  const absolute = Math.abs(offsetMinutes);

  return `/Date(${instant.getTime()}${sign}${pad(Math.floor(absolute / 60))}${pad(absolute % 60)})/`;
}

/**
 * Read a legacy or ISO date-time value into an explicit .NET-compatible model.
 *
 * @param value - ISO 8601 or legacy `/Date(...)/` text.
 */
export function parseDotNetDateValue(value: string): IDotNetDateValue | null {
  const legacy = parseMicrosoftJsonDate(value);

  if (legacy) {
    const parts = getZonedParts(legacy.instant, 'UTC');

    return {
      kind: legacy.offsetMinutes === null ? 'utc' : 'offset',
      date: `${String(parts.year).padStart(4, '0')}-${pad(parts.month)}-${pad(parts.day)}`,
      time: serializeTime(parts, 'millisecond'),
      offsetMinutes: legacy.offsetMinutes ?? 0,
      instant: legacy.instant
    };
  }

  return parseIsoDateTime(value);
}

/**
 * Serialize a date-time model as a value for the requested serialization shape.
 *
 * @param value - Date and time to serialize; the time zone supplies offsets when present.
 * @param kind - Target serialization shape.
 * @param fallbackTimeZone - Time zone used when the value has none and an offset is required.
 */
export function serializeDateTime(value: IDateTimeValue, kind: DateTimeSerializationKind, fallbackTimeZone: string): string | null {
  if (kind === 'date-only') return value.date;

  if (kind === 'local-date-time') return toLocalDateTimeIso(value.date, value.time);

  const timeZone = value.timeZone ?? fallbackTimeZone;
  const instant = dateTimeToInstant(value.date, value.time, timeZone);

  if (!instant) return null;

  return kind === 'utc-instant' ? toUtcIso(instant) : toDotNetOffsetIso(instant, timeZone);
}

/**
 * Return the elapsed wall-clock minutes between two local date-time values in a time zone.
 *
 * Wall-clock duration ignores daylight-saving offset changes, so 09:00 to 17:00 remains eight hours across a transition.
 *
 * @param start - Inclusive start date-time.
 * @param end - Inclusive end date-time.
 */
export function wallClockMinutes(start: IDateTimeValue, end: IDateTimeValue): number | null {
  const startDate = parseIsoDate(start.date);
  const endDate = parseIsoDate(end.date);
  const startTime = parseTimeParts(start.time);
  const endTime = parseTimeParts(end.time);

  if (!startDate || !endDate || !startTime || !endTime) return null;

  const days = differenceInDays(start.date, end.date);
  const minutes = endTime.hour * 60 + endTime.minute - (startTime.hour * 60 + startTime.minute);

  return days === 0 && minutes < 0 ? null : days * 24 * 60 + minutes;
}

/**
 * Return the elapsed minutes between two zoned date-times using their real instants.
 *
 * Elapsed duration differs from wall-clock duration when a daylight-saving transition occurs between the endpoints.
 *
 * @param start - Inclusive start date-time with a time zone.
 * @param end - Inclusive end date-time with a time zone.
 * @param fallbackTimeZone - Time zone used when a value has none.
 */
export function elapsedMinutes(start: IDateTimeValue, end: IDateTimeValue, fallbackTimeZone: string): number | null {
  const startInstant = dateTimeToInstant(start.date, start.time, start.timeZone ?? fallbackTimeZone);
  const endInstant = dateTimeToInstant(end.date, end.time, end.timeZone ?? fallbackTimeZone);

  if (!startInstant || !endInstant) return null;

  return Math.round((endInstant.getTime() - startInstant.getTime()) / 60_000);
}

/**
 * Shift a local date-time by a number of days without changing its wall-clock time.
 *
 * @param value - Local date-time to shift.
 * @param days - Number of calendar days to add.
 */
export function addCalendarDays(value: IDateTimeValue, days: number): IDateTimeValue {
  return { ...value, date: addDays(value.date, days) };
}

/**
 * Return the canonical dates covered by a date-time range, including single-day ranges.
 *
 * @param start - Inclusive start date-time.
 * @param end - Inclusive end date-time.
 */
export function dateTimeRangeDates(start: IDateTimeValue, end: IDateTimeValue): readonly IsoDate[] {
  const count = differenceInDays(start.date, end.date);
  const dates: IsoDate[] = [];
  const direction = count < 0 ? -1 : 1;

  for (let index = 0; index <= Math.abs(count); index++) dates.push(addDays(start.date, index * direction));

  return dates;
}

/**
 * Return the day number of a canonical date for API payloads that require a numeric day.
 *
 * @param isoDate - Canonical date to convert.
 */
export function isoDateToDayNumber(isoDate: IsoDate): number {
  return dayNumber(isoDate);
}

//#region Helpers

function parseOffsetMinutes(value: string): number | null {
  const match = /^([+-])(\d{2}):?(\d{2})$/.exec(value);

  if (!match) return null;

  const hours = Number(match[2]);
  const minutes = Number(match[3]);

  if (hours > 23 || minutes > 59) return null;

  return (match[1] === '-' ? -1 : 1) * (hours * 60 + minutes);
}

function normalizeTimeForSerialization(time: IsoTime): string {
  const parts = parseTimeParts(time);

  return parts ? serializeTime(parts, time.length > 8 ? 'millisecond' : time.length > 5 ? 'second' : 'minute') : time;
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

//#endregion

export type { IDotNetDateValue } from '@core/interfaces/idot-net-date-value.interface';
export type { ILegacyMicrosoftDate } from '@core/interfaces/ilegacy-microsoft-date.interface';
export type { DateTimeSerializationKind } from '@core/types/date-time-serialization.types';
