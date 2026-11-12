/**
 * Parsed legacy Microsoft JSON date.
 */
export interface ILegacyMicrosoftDate {
  /** Milliseconds since the Unix epoch as encoded in the value. */
  readonly milliseconds: number;
  /** Offset from UTC in minutes when the encoded value supplied one; null otherwise. */
  readonly offsetMinutes: number | null;
  /** Unique instant represented by the encoded milliseconds. */
  readonly instant: Date;
}
