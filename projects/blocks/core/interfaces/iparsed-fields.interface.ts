/**
 * Field values captured while matching a date or time pattern.
 */
export interface IParsedFields {
  /** Four- or six-digit year. */
  year?: number;
  /** Zero-based month index resolved from a number or localized name. */
  monthIndex?: number;
  /** One-based day of month. */
  day?: number;
  /** Hour captured before day-period conversion. */
  hour?: number;
  /** Minute of hour. */
  minute?: number;
  /** Second of minute. */
  second?: number;
  /** Millisecond of second. */
  millisecond?: number;
  /** Localized day period captured for 12-hour patterns. */
  dayPeriod?: string;
  /** One-based quarter captured by quarter patterns. */
  quarter?: number;
  /** Week number captured by week patterns. */
  week?: number;
  /** Whether the pattern contains an explicit hour-cycle token. */
  hasHourCycleToken: boolean;
}
