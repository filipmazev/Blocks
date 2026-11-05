import { THEME_PALETTES } from '@core/constants/theme-palettes.constants';
import { BxThemeId } from '@core/types/appearance.types';

/**
 * Accept only current palette IDs when restoring a saved selection.
 *
 * @param value - Saved or consumer-supplied palette ID to validate against the supported palettes.
 */
export function resolveThemeId(value: string | null | undefined): BxThemeId | undefined {
  return THEME_PALETTES.find((item) => item.id === value)?.id;
}
