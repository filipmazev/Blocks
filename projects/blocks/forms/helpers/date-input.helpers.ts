import type { DatePickerValue, IsoDate } from '@filip.mazev/blocks/core';

import { isDateRangeValue } from '@filip.mazev/blocks/core';

/**
 * Normalize an ISO date or composite Signal Forms bound to one calendar boundary.
 * @param value - Optional scalar, selected-date array or range supplied as an input or form constraint; null/undefined leaves the bound open.
 * @param boundary - Minimum uses the earliest selected date or range start; maximum uses the latest selected date or range end.
 * @returns Canonical date boundary, preserving null/undefined when no bound is supplied.
 */
export function dateInputBound(value: DatePickerValue | undefined, boundary: 'min' | 'max'): IsoDate | null | undefined {
  if (value == null || typeof value === 'string') return value;

  if (Array.isArray(value)) {
    const ordered = [...value].sort();

    return (boundary === 'min' ? ordered[0] : ordered.at(-1)) ?? null;
  }

  if (isDateRangeValue(value)) return boundary === 'min' ? value.start : value.end;

  return null;
}
