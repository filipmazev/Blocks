import type { IThemeStudioControl } from '@playground/interfaces/itheme-studio-control.interface';
import type { StudioFamily } from '@playground/types/theme-studio.types';

import { CSS_TOKEN_CATALOG, THEME_CSS_VARIABLES } from '@filip.mazev/blocks/core';

export const STUDIO_FAMILIES: readonly StudioFamily[] = ['Colors', 'Borders', 'Corners', 'Shadows', 'Spacing'];
export const STUDIO_BORDER_STYLES: readonly string[] = ['solid', 'dashed', 'dotted', 'double', 'none'];
export const STUDIO_CONTROLS: readonly IThemeStudioControl[] = THEME_CSS_VARIABLES.map((name) => {
  const token = CSS_TOKEN_CATALOG.find((entry) => entry.name === name);
  const family: StudioFamily = name.startsWith('--bx-space-')
    ? 'Spacing'
    : name.startsWith('--bx-rounded-')
      ? 'Corners'
      : name.startsWith('--bx-shadow-')
        ? 'Shadows'
        : name === '--bx-border-width' || name === '--bx-border-style'
          ? 'Borders'
          : 'Colors';

  return {
    name,
    label: name.slice(5).split('-').join(' '),
    family,
    group: token?.group ?? family,
    advanced: /-(hover|active|disabled)$/.test(name),
    hint:
      family === 'Colors'
        ? 'Hex, rgb(), hsl(), black, white or transparent.'
        : family === 'Shadows'
          ? 'Up to 4 shadows: 2–4 px/rem/em lengths and a literal color. “none” removes resting elevation.'
          : name === '--bx-border-style'
            ? 'solid, dashed, dotted, double or none.'
            : family === 'Borders'
              ? '0–8px or 0–0.5rem/em.'
              : '0–128px or 0–8rem/em. Zero is allowed.'
  };
});
