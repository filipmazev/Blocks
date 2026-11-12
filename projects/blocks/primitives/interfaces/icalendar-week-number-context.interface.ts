import type { IsoDate } from '@filip.mazev/blocks/core';

/**
 * Context supplied to a custom week-number template.
 */
export interface ICalendarWeekNumberContext {
  /** Localized week number. */
  readonly $implicit: string;
  /** Canonical first day of the week. */
  readonly weekStart: IsoDate;
}
