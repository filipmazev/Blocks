import type { ICalendarDayCell } from '@primitives/interfaces/icalendar-day-cell.interface';
import type { ICalendarRangeCorners } from '@primitives/interfaces/icalendar-range-corners.interface';

/**
 * Resolve exposed and inward corners from adjacent calendar cells without rounding joined edges.
 * @param cells - Calendar cells in row-major order; selection and preview retain independent contours.
 * @param columns - Positive number of cells per visual grid row.
 * @returns Logical convex corners and inward corner tones for every cell.
 */
export function calendarRangeCorners(cells: readonly Pick<ICalendarDayCell, 'inRange' | 'isPreview'>[], columns: number): readonly ICalendarRangeCorners[] {
  return cells.map((cell, index) => {
    const column = index % columns;
    const before = column > 0 ? index - 1 : -1;
    const after = column + 1 < columns ? index + 1 : -1;
    const above = index - columns;
    const below = index + columns;
    const matches = (candidate: number): boolean => !!cells[candidate]?.inRange && cells[candidate].isPreview === cell.isPreview;
    const concave = (a: number, b: number, diagonal: number): 'selection' | 'preview' | null => {
      const neighbor = cells[a];

      if (cell.inRange || !neighbor?.inRange || !cells[b]?.inRange || !cells[diagonal]?.inRange) return null;

      if (neighbor.isPreview !== cells[b].isPreview || neighbor.isPreview !== cells[diagonal].isPreview) return null;

      return neighbor.isPreview ? 'preview' : 'selection';
    };

    return {
      startStart: cell.inRange && !matches(above) && !matches(before),
      startEnd: cell.inRange && !matches(above) && !matches(after),
      endStart: cell.inRange && !matches(below) && !matches(before),
      endEnd: cell.inRange && !matches(below) && !matches(after),
      concaveStartStart: concave(above, before, before < 0 ? -1 : before - columns),
      concaveStartEnd: concave(above, after, after < 0 ? -1 : after - columns),
      concaveEndStart: concave(below, before, before < 0 ? -1 : before + columns),
      concaveEndEnd: concave(below, after, after < 0 ? -1 : after + columns)
    };
  });
}
