import type { BxThemeId } from '@filip.mazev/blocks/core';
import type { StudioColorToken, StudioSharedToken } from '@playground/types/theme-studio.types';

export interface IThemeStudioDocument {
  readonly version: 1;
  readonly palette: BxThemeId;
  readonly shared: Readonly<Partial<Record<StudioSharedToken, string>>>;
  readonly light: Readonly<Partial<Record<StudioColorToken, string>>>;
  readonly dark: Readonly<Partial<Record<StudioColorToken, string>>>;
}
