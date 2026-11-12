import type { IsoTime } from '@core/types/date-time.types';

/**
 * Deterministic inputs supplied to time preset resolvers.
 */
export interface ITimePresetContext {
  /** Current instant supplied by the deterministic clock. */
  readonly now: Date;
  /** Current local time of day in the context time zone. */
  readonly nowTime: IsoTime;
  /** Active IANA time zone. */
  readonly timeZone: string;
  /** Active BCP 47 locale. */
  readonly locale: string;
}
