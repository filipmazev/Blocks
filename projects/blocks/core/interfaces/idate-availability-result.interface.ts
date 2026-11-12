import type { IDateMetadata } from '@core/interfaces/idate-metadata.interface';
import type { ResolvableText } from '@core/types/core.types';

/**
 * Result returned by an availability resolver for one request.
 */
export interface IDateAvailabilityResult {
  /** Metadata for the requested dates. */
  readonly dates: readonly IDateMetadata[];
  /** Optional translated message shown when the whole requested range is unavailable. */
  readonly emptyMessage?: ResolvableText;
}
