import type { StudioValues } from '@playground/types/theme-studio.types';

import { RADIUS_VALUES, SPACING_VALUES } from '@filip.mazev/blocks/core';

/** Build a coordinated radius or spacing scale from generated Sass defaults.
 * @param family - Shared geometry family.
 * @param preset - Named preset; default returns an empty override map.
 */
export function studioScale(family: 'radius' | 'spacing', preset: string): StudioValues {
  const factor =
    family === 'radius'
      ? ({ none: 0, small: 0.5, medium: 1, large: 1.5 } as Record<string, number>)[preset]
      : ({ compact: 0.875, comfortable: 1, spacious: 1.125 } as Record<string, number>)[preset];

  if (factor === undefined) return {};

  const source = family === 'radius' ? RADIUS_VALUES : SPACING_VALUES;

  return Object.fromEntries(
    Object.entries(source)
      .filter(([key]) => !['none', 'pill', '0'].includes(key))
      .map(([key, value]) => [`--bx-${family === 'radius' ? 'rounded' : 'space'}-${key}`, `${Number((parseFloat(value) * factor).toFixed(4))}rem`])
  );
}
