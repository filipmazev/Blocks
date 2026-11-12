import type { IDateRange } from '@core/interfaces/idate-range.interface';

/**
 * Outcome of validating a date range.
 */
export interface IRangeValidation {
  /** Whether the range may be committed after applying the crossing policy. */
  readonly valid: boolean;
  /** Machine-readable failure reason, or null when valid. */
  readonly reason: 'order' | 'same-day' | 'min-length' | 'max-length' | 'endpoint' | 'crossing' | null;
  /** Range to commit; equals the original range unless truncation was applied. */
  readonly range: IDateRange;
}
