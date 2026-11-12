/**
 * Pad a numeric time component to two digits.
 *
 * @param value - Numeric component to pad.
 */
export function padTimeComponent(value: number): string {
  return String(value).padStart(2, '0');
}

/**
 * Format a UTC offset in minutes as a `GMT±HH:MM` label.
 *
 * @param offsetMinutes - Offset from UTC in minutes.
 */
export function formatTimeZoneOffset(offsetMinutes: number): string {
  const sign = offsetMinutes < 0 ? '-' : '+';
  const absolute = Math.abs(offsetMinutes);

  return `GMT${sign}${padTimeComponent(Math.floor(absolute / 60))}:${padTimeComponent(absolute % 60)}`;
}

/**
 * Resolve a positive dropdown interval into seconds, including numeric minutes and h/m/s duration strings.
 * @param value - Minutes as a number, or a duration such as '30m', '1.5 hours', or '45 seconds'; undefined uses the fallback.
 * @param fallbackMinutes - Positive fallback in minutes, normally the picker's minute step.
 * @returns Interval in seconds; malformed or nonpositive input uses the fallback.
 */
export function timePickerIntervalSeconds(value: number | string | undefined, fallbackMinutes: number): number {
  const fallback = Math.max(1, fallbackMinutes) * 60;

  if (value === undefined) return fallback;

  if (typeof value === 'number') return Number.isFinite(value) && value > 0 ? value * 60 : fallback;

  const match = /^\s*(\d+(?:\.\d+)?)\s*(h|hours?|m|mins?|minutes?|s|seconds?)?\s*$/i.exec(value);

  if (!match || Number(match[1]) <= 0) return fallback;

  const units = match[2]?.toLowerCase() ?? 'm';
  const factor = units.startsWith('h') ? 3600 : units.startsWith('s') ? 1 : 60;

  return Number(match[1]) * factor;
}
