import type { IDateMetadata } from '@core/interfaces/idate-metadata.interface';
import type { ResolvableText } from '@core/types/core.types';

/**
 * Consumer-managed availability state for the visible calendar range.
 */
export interface IDateAvailability {
  /** Metadata for loaded dates; dates absent from the collection are treated as unknown. */
  readonly dates?: readonly IDateMetadata[];
  /** Whether a request is in flight. Defaults to `false`. */
  readonly loading?: boolean;
  /** Translated error message for a failed request. Optional. */
  readonly error?: ResolvableText;
  /** Whether the failed request can be retried. Defaults to `true`. */
  readonly retryable?: boolean;
  /** Revision of the request whose data is represented; older revisions are ignored by resolvers. */
  readonly revision?: number;
}

export type { DateAvailabilityRequestSource } from '@core/types/date-availability.types';
export type { DateAvailabilityResolver } from '@core/types/date-availability-resolver.types';
