import type { RangeCrossingPolicy } from '@core/types/date-time.types';

/**
 * Options controlling range validation.
 */
export interface IRangeValidationOptions {
  /** Minimum number of inclusive days a range may cover. Defaults to `1`. */
  readonly minLength?: number;
  /** Maximum number of inclusive days a range may cover; null leaves the length unbounded. */
  readonly maxLength?: number | null;
  /** Whether a range may start and end on the same day. Defaults to `true`. */
  readonly allowSameDay?: boolean;
  /** Policy applied when the range would include a restricted date. Defaults to `'reject'`. */
  readonly crossingPolicy?: RangeCrossingPolicy;
}
