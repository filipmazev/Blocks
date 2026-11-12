import type { IsoDate, PeriodKind } from '@filip.mazev/blocks/core';

/**
 * One rendered period cell for month, quarter, year or decade presentation.
 */
export interface ICalendarPeriodCell {
  /** Canonical anchor date of the period; the first day for month, quarter and year cells. */
  readonly date: IsoDate;
  /** Localized label of the period. */
  readonly label: string;
  /** Period granularity represented by the cell. */
  readonly kind: PeriodKind | 'decade';
  /** Zero-based index of the period inside its parent grid, used for focus ordering. */
  readonly index: number;
  /** Whether the cell belongs to the ancestor period currently being browsed. */
  readonly inPeriod: boolean;
  /** Whether the cell is inside a committed range or its period preview. */
  readonly inRange: boolean;
  /** Whether the cell belongs to a pointer or keyboard preview rather than the committed selection. */
  readonly isPreview: boolean;
  /** Whether the cell is the first period of the committed range or its preview. */
  readonly isRangeStart: boolean;
  /** Whether the cell is the last period of the committed range or its preview. */
  readonly isRangeEnd: boolean;
  /** Whether the cell represents the current committed value. */
  readonly isSelected: boolean;
  /** Whether the cell is today's period. */
  readonly isToday: boolean;
  /** Whether the cell cannot be selected. */
  readonly disabled: boolean;
  /** Roving tab index for keyboard focus. */
  readonly tabIndex: number;
}
