/**
 * Resolution of a wall-clock date and time inside a time zone.
 */
export interface IZonedTimeResolution {
  /** Resolved UTC instant, or null when the wall clock does not exist and rejection was requested. */
  readonly instant: Date | null;
  /** Whether the wall clock occurs twice because the offset moves backwards. */
  readonly ambiguous: boolean;
  /** Whether the wall clock does not exist because the offset moves forwards. */
  readonly nonexistent: boolean;
}
