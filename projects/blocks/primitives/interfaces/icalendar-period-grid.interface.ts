import type { IsoDate } from '@filip.mazev/blocks/core';

/**
 * Generated cells for month, quarter, year or decade presentation.
 */
export interface ICalendarPeriodGrid {
  /** Label of the ancestor period being browsed. */
  readonly label: string;
  /** Period cells in reading order. */
  readonly cells: readonly { date: IsoDate; label: string; index: number; inPeriod: boolean }[];
}
