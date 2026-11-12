import type { ITimeColumnOption, ITimeWheelColumns } from '@core/interfaces/itime-wheel-columns.interface';
import type { HourCycle, IsoTime, ITimeRange, TimePrecision } from '@core/types/date-time.types';

import { dayPeriods, parseTimeParts, serializeTime } from './date-time-format.helpers';

/**
 * Convert a canonical time of day into minutes since midnight.
 *
 * @param time - Canonical time to convert.
 */
export function timeToMinutes(time: IsoTime): number {
  const parts = parseTimeParts(time);

  return parts ? parts.hour * 60 + parts.minute : 0;
}

/**
 * Convert minutes since midnight into a canonical time.
 *
 * @param minutes - Minutes since midnight; values wrap across a single day.
 * @param precision - Smallest retained time unit. Defaults to `'minute'`.
 */
export function minutesToTime(minutes: number, precision: TimePrecision = 'minute'): IsoTime {
  const normalized = ((Math.round(minutes) % 1440) + 1440) % 1440;
  const hour = Math.floor(normalized / 60);
  const minute = normalized % 60;

  return precision === 'hour' ? `${pad(hour)}:00` : `${pad(hour)}:${pad(minute)}`;
}

/**
 * Compare two canonical times for ordering.
 *
 * @param a - First canonical time.
 * @param b - Second canonical time.
 */
export function compareIsoTimes(a: IsoTime, b: IsoTime): number {
  return timeToMinutes(a) - timeToMinutes(b);
}

/**
 * Shift a time by a number of minutes, wrapping across midnight.
 *
 * @param time - Starting canonical time.
 * @param minutes - Minutes to add; negative values move backwards.
 * @param precision - Smallest retained time unit. Defaults to `'minute'`.
 */
export function shiftTime(time: IsoTime, minutes: number, precision: TimePrecision = 'minute'): IsoTime {
  return minutesToTime(timeToMinutes(time) + minutes, precision);
}

/**
 * Round a time to the nearest configured step and serialize it at the requested precision.
 *
 * @param time - Time to round.
 * @param precision - Smallest retained unit.
 * @param minuteStep - Minute increment to snap to. Defaults to `1`.
 * @param secondStep - Second increment to snap to. Defaults to `1`.
 * @param millisecondStep - Millisecond increment to snap to. Defaults to `1`.
 */
export function snapTime(time: IsoTime, precision: TimePrecision, minuteStep: number = 1, secondStep: number = 1, millisecondStep: number = 1): IsoTime {
  const parts = parseTimeParts(time);

  if (!parts) return time;

  const minute = Math.round(parts.minute / Math.max(1, minuteStep)) * Math.max(1, minuteStep);
  const second = Math.round(parts.second / Math.max(1, secondStep)) * Math.max(1, secondStep);
  const millisecond = Math.round(parts.millisecond / Math.max(1, millisecondStep)) * Math.max(1, millisecondStep);
  const base = minutesToTime(parts.hour * 60 + minute, 'minute');

  if (precision === 'minute' || precision === 'hour') return base;

  if (precision === 'second') return `${base}:${pad(second)}`;

  return `${base}:${pad(second)}.${String(millisecond).padStart(3, '0')}`;
}

/**
 * Return whether a time falls inside an inclusive range, honoring overnight ranges.
 *
 * @param time - Time to test.
 * @param range - Inclusive time range.
 * @param allowOvernight - Whether an end earlier than the start wraps past midnight. Defaults to `false`.
 */
export function isTimeInRange(time: IsoTime, range: ITimeRange, allowOvernight: boolean = false): boolean {
  if (!allowOvernight || range.start <= range.end) return time >= range.start && time <= range.end;

  return time >= range.start || time <= range.end;
}

/**
 * Return whether a time is within optional minimum and maximum bounds.
 *
 * @param time - Time to test.
 * @param min - Inclusive minimum, or null when unbounded.
 * @param max - Inclusive maximum, or null when unbounded.
 */
export function isTimeWithinBounds(time: IsoTime, min: IsoTime | null, max: IsoTime | null): boolean {
  if (min && time < min) return false;

  if (max && time > max) return false;

  return true;
}

/**
 * Return whether a time lies in one of the configured blocked intervals.
 *
 * @param time - Time to test.
 * @param intervals - Inclusive blocked time ranges.
 * @param allowOvernight - Whether intervals may wrap past midnight. Defaults to `false`.
 */
export function isTimeInBlockedInterval(time: IsoTime, intervals: readonly ITimeRange[], allowOvernight: boolean = false): boolean {
  return intervals.some((interval) => isTimeInRange(time, interval, allowOvernight));
}

/**
 * Build wheel columns for a time and configuration.
 *
 * @param time - Current time used to resolve the active 12-hour period.
 * @param precision - Finest rendered column.
 * @param hourCycle - 12- or 24-hour presentation.
 * @param locale - BCP 47 locale used for localized day periods.
 * @param minuteStep - Minute increment between options.
 * @param secondStep - Second increment between options.
 * @param millisecondStep - Millisecond increment between options.
 * @param isDisabled - Optional predicate marking individual times unavailable.
 */
export function buildTimeColumns(
  time: IsoTime,
  precision: TimePrecision,
  hourCycle: HourCycle,
  locale: string,
  minuteStep: number = 1,
  secondStep: number = 1,
  millisecondStep: number = 1,
  isDisabled?: (time: IsoTime) => boolean
): ITimeWheelColumns {
  const parts = parseTimeParts(time) ?? { hour: 0, minute: 0, second: 0, millisecond: 0 };
  const periods = dayPeriods(locale);
  const hourValues = hourCycle === 12 ? Array.from({ length: 12 }, (_, index) => index + 1) : Array.from({ length: 24 }, (_, index) => index);
  const hours = hourValues.map<ITimeColumnOption>((hour) => {
    const hour24 = hourCycle === 12 ? (hour === 12 ? (parts.hour >= 12 ? 12 : 0) : parts.hour >= 12 ? hour + 12 : hour) : hour;

    return { value: String(hour), label: pad(hour), disabled: isDisabled ? isDisabled(`${pad(hour24)}:${pad(parts.minute)}`) : false };
  });
  const minutes = buildNumericOptions(0, 59, Math.max(1, minuteStep)).map<ITimeColumnOption>((minute) => ({
    value: pad(minute),
    label: pad(minute),
    disabled: isDisabled ? isDisabled(`${pad(parts.hour)}:${pad(minute)}`) : false
  }));
  const seconds = buildNumericOptions(0, 59, Math.max(1, secondStep)).map<ITimeColumnOption>((second) => ({
    value: pad(second),
    label: pad(second),
    disabled: false
  }));
  const milliseconds = buildNumericOptions(0, 999, Math.max(1, millisecondStep)).map<ITimeColumnOption>((millisecond) => ({
    value: String(millisecond).padStart(3, '0'),
    label: String(millisecond).padStart(3, '0'),
    disabled: false
  }));

  return {
    hours,
    minutes,
    seconds: precision === 'second' || precision === 'millisecond' ? seconds : [],
    milliseconds: precision === 'millisecond' ? milliseconds : [],
    periods: hourCycle === 12 ? periods.map((period) => ({ value: period, label: period, disabled: false })) : []
  };
}

/**
 * Return the display hour for a 12-hour clock.
 *
 * @param hour24 - Hour on a 24-hour clock.
 */
export function toHour12(hour24: number): number {
  return hour24 % 12 === 0 ? 12 : hour24 % 12;
}

/**
 * Return whether a canonical time matches the configured precision step.
 *
 * @param time - Time to validate.
 * @param minuteStep - Required minute increment. Defaults to `1`.
 * @param secondStep - Required second increment. Defaults to `1`.
 * @param millisecondStep - Required millisecond increment. Defaults to `1`.
 */
export function isTimeOnStep(time: IsoTime, minuteStep: number = 1, secondStep: number = 1, millisecondStep: number = 1): boolean {
  const parts = parseTimeParts(time);

  if (!parts) return false;

  return parts.minute % Math.max(1, minuteStep) === 0 && parts.second % Math.max(1, secondStep) === 0 && parts.millisecond % Math.max(1, millisecondStep) === 0;
}

/**
 * Snap a canonical time to the configured precision steps.
 *
 * Rounds to the nearest allowed minute, second and millisecond and carries overflow into the next larger unit so wheels always display a selectable
 * option matching the value.
 *
 * @param time - Canonical time to normalize.
 * @param precision - Smallest retained unit. Defaults to `'minute'`.
 * @param minuteStep - Minute increment. Defaults to `1`.
 * @param secondStep - Second increment. Defaults to `1`.
 * @param millisecondStep - Millisecond increment. Defaults to `1`.
 */
export function snapTimeToStep(
  time: IsoTime,
  precision: TimePrecision = 'minute',
  minuteStep: number = 1,
  secondStep: number = 1,
  millisecondStep: number = 1
): IsoTime {
  const parts = parseTimeParts(time);

  if (!parts) return time;

  const minuteSize = Math.max(1, Math.trunc(minuteStep));
  const secondSize = Math.max(1, Math.trunc(secondStep));
  const millisecondSize = Math.max(1, Math.trunc(millisecondStep));

  let minute = Math.round(parts.minute / minuteSize) * minuteSize;
  let second = Math.round(parts.second / secondSize) * secondSize;
  let millisecond = Math.round(parts.millisecond / millisecondSize) * millisecondSize;
  let hour = parts.hour;

  if (millisecond >= 1000) {
    millisecond -= 1000;
    second += 1;
  }

  if (second >= 60) {
    second -= 60;
    minute += 1;
  }

  if (minute >= 60) {
    minute -= 60;
    hour = (hour + 1) % 24;
  }

  return serializeTime({ hour, minute, second, millisecond }, precision);
}

/**
 * Return whether a time range respects ordering and optional overnight semantics.
 *
 * @param range - Range to validate.
 * @param allowOvernight - Whether an end before the start represents an overnight range. Defaults to `false`.
 */
export function isValidTimeRange(range: ITimeRange, allowOvernight: boolean = false): boolean {
  if (!allowOvernight) return range.start <= range.end;

  return range.start !== range.end;
}

//#region Helpers

function buildNumericOptions(from: number, to: number, step: number): number[] {
  const options: number[] = [];

  for (let value = from; value <= to; value += step) options.push(value);

  return options;
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

//#endregion
