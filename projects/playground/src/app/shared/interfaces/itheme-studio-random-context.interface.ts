import type { BxThemeId } from '@filip.mazev/blocks/core';
import type { StudioMode, StudioValues } from '@playground/types/theme-studio.types';

import type { IThemeStudioDocument } from './itheme-studio-document.interface';

export interface IThemeStudioRandomContext {
  readonly current: IThemeStudioDocument;
  readonly sample: (palette: BxThemeId, mode: StudioMode) => StudioValues;
  readonly contrast: (foreground: string, background: string) => number;
  readonly color: (family: string, shade: number) => string;
  readonly hex: (color: string) => string | undefined;
}
