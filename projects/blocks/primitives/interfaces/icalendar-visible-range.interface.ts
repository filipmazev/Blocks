import type { IsoDate } from '@filip.mazev/blocks/core';

/**
 * Visible calendar range published for asynchronous availability requests.
 */
export interface ICalendarVisibleRange {
  /** First canonical date rendered by the grid. */
  readonly start: IsoDate;
  /** Last canonical date rendered by the grid. */
  readonly end: IsoDate;
  /** Stable keys of the displayed months. */
  readonly monthKeys: readonly string[];
}
