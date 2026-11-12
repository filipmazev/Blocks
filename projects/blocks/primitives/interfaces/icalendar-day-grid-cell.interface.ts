import type { IsoDate } from '@filip.mazev/blocks/core';

/**
 * One raw day cell produced by calendar grid generation before selection state is applied.
 */
export interface ICalendarDayGridCell {
  /** Canonical date of the cell. */
  readonly date: IsoDate;
  /** Displayed day number in the active calendar. */
  readonly day: number;
  /** Whether the cell belongs to the focused month. */
  readonly inMonth: boolean;
  /** Localized week number of the cell's week. */
  readonly weekNumber: string;
  /** Canonical first day of the cell's week. */
  readonly weekStart: IsoDate;
  /** Zero-based weekday of the cell. */
  readonly weekday: number;
}
