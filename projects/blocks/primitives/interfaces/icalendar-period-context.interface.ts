import type { ICalendarPeriodCell } from '@primitives/interfaces/icalendar-period-cell.interface';

/**
 * Template context supplied to a custom period-cell template.
 */
export interface ICalendarPeriodContext {
  /** Period cell being rendered. */
  readonly $implicit: ICalendarPeriodCell;
  /** Whether the period is selected. */
  readonly selected: boolean;
  /** Whether the period is inside a selected range. */
  readonly inRange: boolean;
  /** Whether the period is a range endpoint. */
  readonly endpoint: boolean;
  /** Whether the period cannot be selected. */
  readonly disabled: boolean;
}
