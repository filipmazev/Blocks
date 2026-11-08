import type { StudioColorToken, StudioMode, StudioValues } from '@playground/types/theme-studio.types';

import { STUDIO_BASE_SHADES } from '@playground/shared/constants/theme-studio-presets.constants';

/** Resolve a coordinated neutral scale using the existing generated palette primitives.
 * @param family - Neutral palette family; default keeps inherited values.
 * @param mode - Supported light or dark mode.
 * @param color - Reader for generated primitive colors; absent colors are omitted.
 * @returns Semantic neutral overrides for the requested mode.
 */
export function studioBaseColors(family: string, mode: StudioMode, color: (family: string, shade: number) => string): StudioValues {
  if (family === 'default') return {};

  return Object.fromEntries(
    Object.entries(STUDIO_BASE_SHADES)
      .map(([name, shades]) => [name, color(family, shades[mode === 'light' ? 0 : 1])])
      .filter(([, value]) => !!value)
  );
}

/** Build menu surface or interaction fills from existing subtle semantic roles.
 * @param kind - Menu surfaces or hover/active interaction fills.
 * @param preset - Neutral, primary or accent preset; inherited/default values produce no overrides.
 * @param colors - Effective semantic colors for one mode.
 * @returns Both related fills, retaining the source palette's light/dark behavior.
 */
export function studioMenuColors(kind: 'color' | 'accent', preset: unknown, colors: StudioValues): StudioValues {
  const names: readonly StudioColorToken[] =
    kind === 'color' ? ['--bx-bg-surface', '--bx-bg-surface-alt'] : ['--bx-bg-element-hover', '--bx-bg-element-active'];
  const color =
    preset === 'primary'
      ? colors['--bx-primary-subtle']
      : preset === 'accent'
        ? colors['--bx-accent-subtle']
        : preset === 'neutral'
          ? colors['--bx-bg-neutral']
          : undefined;

  return color ? Object.fromEntries(names.map((name) => [name, color])) : {};
}
