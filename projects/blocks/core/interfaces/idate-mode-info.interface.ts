import type { PeriodKind } from '@core/types/date-time.types';

/**
 * Normalized semantics of a date selection mode.
 */
export interface IDateModeInfo {
  /** Interaction model used by the calendar and picker. */
  readonly selection: 'single' | 'multiple' | 'range';
  /** Whole-period granularity stored by the mode, or null for plain dates. */
  readonly period: PeriodKind | null;
  /** Whether the mode selects two endpoints. */
  readonly isRange: boolean;
  /** Whether the mode selects whole calendar periods. */
  readonly isPeriod: boolean;
}
