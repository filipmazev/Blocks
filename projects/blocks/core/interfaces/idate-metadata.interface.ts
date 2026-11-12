import type { ResolvableText } from '@core/types/core.types';
import type { CalendarTone, DateAvailabilityStatus, IsoDate } from '@core/types/date-time.types';

/**
 * Availability and presentation metadata for one calendar day.
 */
export interface IDateMetadata {
  /** Canonical date this metadata describes. */
  readonly date: IsoDate;
  /** Availability state; `'unknown'` keeps a conservative picker from committing the date. */
  readonly status?: DateAvailabilityStatus;
  /** Optional remaining capacity or inventory count displayed by custom day templates. */
  readonly count?: number;
  /** Optional price label or numeric amount rendered by the consumer's day template. */
  readonly price?: string | number;
  /** Optional short label rendered inside the day cell. */
  readonly label?: ResolvableText;
  /** Optional descriptive text exposed as an accessible description and tooltip. */
  readonly description?: ResolvableText;
  /** Semantic tone applied to the cell's selection material. */
  readonly tone?: CalendarTone;
  /** Optional icon name rendered by the consumer's day template. */
  readonly icon?: string;
  /** Optional badge text rendered by the consumer's day template. */
  readonly badge?: ResolvableText;
  /** Application-owned payload forwarded untouched to custom templates. */
  readonly data?: unknown;
}
