import type { DateRestrictionReason, IDateMetadata, IsoDate } from '@filip.mazev/blocks/core';

/**
 * One rendered day cell in the calendar grid.
 */
export interface ICalendarDayCell {
  /** Canonical date of the cell. */
  readonly date: IsoDate;
  /** Displayed day number in the active calendar. */
  readonly day: number;
  /** Whether the cell belongs to the focused month rather than an adjacent month. */
  readonly inMonth: boolean;
  /** Whether the cell is inside the committed range or range preview. */
  readonly inRange: boolean;
  /** Whether the cell is the first day of the committed range or its preview. */
  readonly isRangeStart: boolean;
  /** Whether the cell is the last day of the committed range or its preview. */
  readonly isRangeEnd: boolean;
  /** Whether the cell belongs to the hover or focus preview. */
  readonly isPreview: boolean;
  /** Whether the cell represents the current committed value. */
  readonly isSelected: boolean;
  /** Whether the cell is today in the effective time zone. */
  readonly isToday: boolean;
  /** Whether the cell falls on a weekend under the active week convention. */
  readonly isWeekend: boolean;
  /** Whether the cell cannot be selected. */
  readonly disabled: boolean;
  /** Machine-readable restriction reason, or null when selectable. */
  readonly restriction: DateRestrictionReason | null;
  /** Availability or presentation metadata supplied for the date. */
  readonly metadata: IDateMetadata | undefined;
  /** Complete localized accessible label of the date, including any metadata description. */
  readonly label: string;
  /** Localized week number of the cell's week. */
  readonly weekNumber: string;
  /** Roving tab index for keyboard focus. */
  readonly tabIndex: number;
}
