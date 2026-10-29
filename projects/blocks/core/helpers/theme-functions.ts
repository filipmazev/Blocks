import { BxThemeId, LEGACY_THEME_IDS, LegacyBxThemeId, THEME_PALETTES } from '../types/appearance.types';

/** Resolve persisted and pre-rename palette IDs without resetting a user's selection. */
export function resolveThemeId(value: string | null | undefined): BxThemeId | undefined {
  const palette = THEME_PALETTES.find((item) => item.id === value);
  if (palette) return palette.id;
  if (value && Object.prototype.hasOwnProperty.call(LEGACY_THEME_IDS, value)) return LEGACY_THEME_IDS[value as LegacyBxThemeId];
  return undefined;
}
