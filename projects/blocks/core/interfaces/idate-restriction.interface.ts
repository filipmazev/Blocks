import type { IDateMetadata } from '@core/interfaces/idate-metadata.interface';
import type { DateRestrictionReason } from '@core/types/date-restriction.types';

/**
 * Outcome of evaluating one date against the restriction configuration.
 */
export interface IDateRestriction {
  /** Whether the date cannot be selected. */
  readonly disabled: boolean;
  /** Machine-readable reason for the restriction, or null when selectable. */
  readonly reason: DateRestrictionReason | null;
  /** Metadata attached to the date, or undefined when none was supplied. */
  readonly metadata: IDateMetadata | undefined;
}
