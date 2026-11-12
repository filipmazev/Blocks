import type { ITimeColumnOption } from '@core/interfaces/itime-column-option.interface';

/**
 * Wheel columns generated for one time value.
 */
export interface ITimeWheelColumns {
  /** Hour options for the active clock cycle. */
  readonly hours: readonly ITimeColumnOption[];
  /** Minute options honoring the configured minute step. */
  readonly minutes: readonly ITimeColumnOption[];
  /** Second options honoring the configured second step. */
  readonly seconds: readonly ITimeColumnOption[];
  /** Millisecond options honoring the configured millisecond step. */
  readonly milliseconds: readonly ITimeColumnOption[];
  /** Localized AM/PM options, present only for a 12-hour cycle. */
  readonly periods: readonly ITimeColumnOption[];
}

export type { ITimeColumnOption } from '@core/interfaces/itime-column-option.interface';
