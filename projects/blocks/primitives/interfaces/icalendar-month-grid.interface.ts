import type { IsoDate } from '@filip.mazev/blocks/core';
import type { ICalendarDayGridCell } from '@primitives/interfaces/icalendar-day-grid-cell.interface';

/**
 * Generated grid for one displayed month.
 */
export interface ICalendarMonthGrid {
  /** Canonical first day of the displayed month. */
  readonly monthStart: IsoDate;
  /** Localized month and year label. */
  readonly label: string;
  /** Stabilized month key used for request deduplication. */
  readonly key: string;
  /** Day cells in reading order. */
  readonly cells: readonly ICalendarDayGridCell[];
}
