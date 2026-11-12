/**
 * Resolved offset information for one instant in one time zone.
 */
export interface ITimeZoneOffset {
  /** Offset from UTC in minutes at the instant; east of UTC is positive. */
  readonly offsetMinutes: number;
  /** IANA time-zone identifier the offset was resolved for. */
  readonly timeZone: string;
}
