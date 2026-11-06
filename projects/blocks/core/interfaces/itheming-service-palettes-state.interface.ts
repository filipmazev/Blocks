import { BxThemeId } from '@core/types/appearance.types';

/** Palette metadata exposed by ThemingService for theme selectors and color previews. */
export interface IThemingServicePalettesState {
  /** Stable palette identifier accepted by the theme configuration APIs. */
  id: BxThemeId;
  /** Human-readable palette name displayed by application theme selectors. */
  label: string;
  /** CSS class that activates this palette on the theme host. */
  className: string;
  /** Two CSS swatch colors in the theme engine's configured preview order; defaults to brand then accent. */
  colors: readonly [string, string];
}
