import type { IDateMetadata } from '@core/interfaces/idate-metadata.interface';
import type { ResolvableText } from '@core/types/core.types';

/**
 * Availability state retained by a picker while a resolver request is pending or failed.
 */
export interface IDateAvailabilityState {
  /** Dates loaded for the current visible range. */
  readonly dates: readonly IDateMetadata[];
  /** Whether the current request is pending. */
  readonly loading: boolean;
  /** Error message for the current failed request, or undefined when no failure is active. */
  readonly error: ResolvableText | undefined;
  /** Whether a retry is available for the current failure. */
  readonly retryable: boolean;
  /** Revision of the request that produced this state. */
  readonly revision: number;
  /** Whether the latest request completed with no dates and no error. */
  readonly empty: boolean;
}
