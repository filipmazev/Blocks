import type { IsoDate, IsoTime } from '@core/types/date-time.types';

/**
 * Parsed representation of a .NET `DateTime` or `DateTimeOffset` ISO value.
 *
 * `'local'` values carry no offset and therefore no unique instant, matching `DateTimeKind.Unspecified`; converting them requires an application time zone.
 */
export interface IDotNetDateValue {
  /** Whether the source value was local, UTC or offset-qualified. */
  readonly kind: 'local' | 'utc' | 'offset';
  /** Canonical calendar date. */
  readonly date: IsoDate;
  /** Canonical time of day. */
  readonly time: IsoTime;
  /** Offset from UTC in minutes for offset-qualified values; null for local values. */
  readonly offsetMinutes: number | null;
  /** Unique instant when the source carried an offset or UTC marker; null for local values. */
  readonly instant: Date | null;
}
