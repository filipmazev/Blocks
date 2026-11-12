import type { IsoTime } from '@core/types/date-time.types';

/** Time-of-day default used by time presets and picker fallbacks. */
export interface ITimeDefaults {
  /** Default start time of day for application-owned time ranges. Defaults to `'09:00'`. */
  readonly startTime: IsoTime;
  /** Default end time of day applied to a new time range. Defaults to `'17:00'`. */
  readonly endTime: IsoTime;
}
