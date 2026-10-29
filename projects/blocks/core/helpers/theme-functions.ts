import { BxThemeId, THEME_PALETTES } from '../types/appearance.types';

/** Accept only current palette IDs when restoring a saved selection. */
export function resolveThemeId(value: string | null | undefined): BxThemeId | undefined {
  return THEME_PALETTES.find((item) => item.id === value)?.id;
}
