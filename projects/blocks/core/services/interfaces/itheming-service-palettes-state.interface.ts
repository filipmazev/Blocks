import { BxThemeId } from '@core/types/appearance.types';

/** Resolved palettes state used by ThemingService. */
export interface IThemingServicePalettesState {
  /** Resolved id value. */
  id: BxThemeId;
  /** Resolved label value. */
  label: string;
  /** Resolved class Name value. */
  className: string;
  /** Resolved colors value. */
  colors: readonly [string, string];
}
