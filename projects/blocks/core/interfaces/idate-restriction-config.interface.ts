import type { IDateMetadata } from '@core/interfaces/idate-metadata.interface';
import type { IDateRange } from '@core/interfaces/idate-range.interface';
import type { IsoDate } from '@core/types/date-time.types';

/**
 * Declarative restrictions applied to a calendar or date picker.
 */
export interface IDateRestrictionConfig {
  /** Earliest selectable date; null leaves the lower bound open. */
  readonly min?: IsoDate | null;
  /** Latest selectable date; null leaves the upper bound open. */
  readonly max?: IsoDate | null;
  /** Individual dates that cannot be selected. */
  readonly disabledDates?: readonly IsoDate[];
  /** Inclusive date intervals that cannot be selected. */
  readonly disabledIntervals?: readonly IDateRange[];
  /** Zero-based weekdays that cannot be selected, where Sunday is 0. */
  readonly disabledWeekdays?: readonly number[];
  /** Application predicate returning true when a date cannot be selected. */
  readonly isDateDisabled?: (date: IsoDate) => boolean;
  /** Availability metadata keyed by canonical date. Dates with `'unavailable'` or `'unknown'` status are restricted by conservative pickers. */
  readonly metadata?: readonly IDateMetadata[];
  /** Whether metadata with `'unknown'` status blocks selection. Defaults to `true`. */
  readonly blockUnknownAvailability?: boolean;
}
