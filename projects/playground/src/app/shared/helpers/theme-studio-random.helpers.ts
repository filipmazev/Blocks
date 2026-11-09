import type { IThemeStudioDocument } from '@playground/interfaces/itheme-studio-document.interface';
import type { IThemeStudioRandomContext } from '@playground/interfaces/itheme-studio-random-context.interface';
import type { StudioMode, StudioSharedToken, StudioValues } from '@playground/types/theme-studio.types';

import { RADIUS_VALUES, SHADOW_VALUES, THEME_PALETTE_IDS } from '@filip.mazev/blocks/core';

import { STUDIO_RANDOM_RECIPES } from '@playground/shared/constants/theme-studio-random.constants';

import { studioBaseColors, studioMenuColors } from './theme-studio-colors.helpers';

/** Generate a coordinated theme from a tested built-in palette and modest corner/elevation multipliers, preserving current spacing.
 * @param context - Current draft and readers for authoritative semantic and primitive colors.
 * @param random - Random source returning a number in [0, 1); injectable for deterministic checks.
 * @returns A complete versioned draft with inherited built-in light/dark roles and hex color overrides, retaining alpha in eight-digit hex.
 */
export function randomStudioTheme(context: IThemeStudioRandomContext, random: () => number = Math.random): IThemeStudioDocument {
  const palettes = THEME_PALETTE_IDS.filter((id) => id !== context.current.palette);
  const palette = palettes[Math.min(palettes.length - 1, Math.floor(random() * palettes.length))];
  const color = (family: string, shade: number): string => context.hex(context.color(family, shade)) ?? '';
  const sampled: Readonly<Record<StudioMode, StudioValues>> = { light: context.sample(palette, 'light'), dark: context.sample(palette, 'dark') };
  const ratios = new Map<string, number>();
  const contrast = (foreground: string, background: string): number => {
    const key = `${foreground}:${background}`;

    if (!ratios.has(key)) ratios.set(key, context.contrast(foreground, background));

    return ratios.get(key) ?? 0;
  };

  const neutral = (family: string, mode: StudioMode): StudioValues => ({
    ...studioBaseColors(family, mode, color),
    ...(mode === 'dark' ? { '--bx-text-secondary': color(family, 300) } : {})
  });
  const previous = { ...context.sample(context.current.palette, 'light'), ...context.current.light };
  const recipeOverrides = (recipe: (typeof STUDIO_RANDOM_RECIPES)[number], mode: StudioMode): StudioValues => {
    const base = neutral(recipe.base, mode);
    const colors = { ...sampled[mode], ...base };

    return Object.fromEntries(
      Object.entries({ ...base, ...studioMenuColors('color', recipe.menu, colors), ...studioMenuColors('accent', recipe.accent, colors) }).map(
        ([name, value]) => [name, context.hex(value) ?? '']
      )
    );
  };

  const readable = STUDIO_RANDOM_RECIPES.filter((recipe) =>
    (['light', 'dark'] as const).every((mode) => {
      const overrides = recipeOverrides(recipe, mode);
      const values = { ...sampled[mode], ...overrides };

      if (!Object.values(overrides).every((value) => /^#[\da-f]{6}(?:[\da-f]{2})?$/i.test(value))) return false;

      return (['--bx-bg-canvas', '--bx-bg-surface', '--bx-bg-surface-alt', '--bx-bg-element-hover', '--bx-bg-element-active'] as const).every((name) =>
        (['--bx-text-primary', '--bx-text-secondary'] as const).every((text) => contrast(values[text] ?? '', values[name] ?? '') >= 4.5)
      );
    })
  );
  const changed = readable.filter((recipe) => color(recipe.base, 700) !== context.hex(previous['--bx-text-primary'] ?? ''));
  const recipes = changed.length ? changed : readable;
  const recipe = recipes[Math.floor(random() * recipes.length)];

  const spacing = Object.fromEntries(Object.entries(context.current.shared).filter(([name]) => name.startsWith('--bx-space-')));

  if (!recipe) return { version: 1, palette, shared: spacing, light: {}, dark: {} };

  const { corners, elevation } = recipe;
  const shared: Partial<Record<StudioSharedToken, string>> = { ...spacing, '--bx-border-width': '1px', '--bx-border-style': 'solid' };

  for (const [key, value] of Object.entries(RADIUS_VALUES)) {
    if (key !== 'none' && key !== 'pill') shared[`--bx-rounded-${key}` as StudioSharedToken] = `${Number((parseFloat(value) * corners).toFixed(4))}rem`;
  }

  for (const [key, value] of Object.entries(SHADOW_VALUES)) {
    let resolved = true;

    const shadow = value
      .replace(/(-?\d*\.?\d+)px/g, (_match, amount: string) => `${Number((Number(amount) * elevation).toFixed(4))}px`)
      .replace(/rgba?\([^()]+\)/g, (literal) => {
        const hex = context.hex(literal);

        if (!hex) resolved = false;

        return hex ?? '';
      });

    if (resolved) shared[`--bx-shadow-${key}` as StudioSharedToken] = shadow;
  }

  return { version: 1, palette, shared, light: recipeOverrides(recipe, 'light'), dark: recipeOverrides(recipe, 'dark') };
}
