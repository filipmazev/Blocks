import type { ResolvableText } from '@core/types/core.types';
import type { IsoTime } from '@core/types/date-time.types';

/**
 * Consumer-managed availability state for selectable time slots.
 */
export interface ITimeAvailability {
  /** Times available for booking; omitted keeps configured rules authoritative. */
  readonly times?: readonly IsoTime[];
  /** Whether a slot request is in flight. Defaults to `false`. */
  readonly loading?: boolean;
  /** Translated failure message for the last request. Optional. */
  readonly error?: ResolvableText;
  /** Whether the failed request can be retried. Defaults to `true`. */
  readonly retryable?: boolean;
}

export type { TimeAvailabilityRequestSource } from '@core/types/time-availability.types';
