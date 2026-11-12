import type { IDateMetadata } from '@filip.mazev/blocks/core';
import type { ICalendarDayCell } from '@primitives/interfaces/icalendar-day-cell.interface';

/**
 * Template context supplied to a custom day-cell template.
 */
export interface ICalendarDayContext {
  /** Day cell being rendered. */
  readonly $implicit: ICalendarDayCell;
  /** Whether the cell is selected. */
  readonly selected: boolean;
  /** Whether the cell is inside the range or preview. */
  readonly inRange: boolean;
  /** Whether the cell is a range endpoint. */
  readonly endpoint: boolean;
  /** Whether the cell is today. */
  readonly today: boolean;
  /** Whether the cell cannot be selected. */
  readonly disabled: boolean;
  /** Availability metadata for the date. */
  readonly metadata: IDateMetadata | undefined;
}
