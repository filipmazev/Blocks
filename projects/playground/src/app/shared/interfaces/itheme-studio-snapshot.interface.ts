import type { StudioMode } from '@playground/types/theme-studio.types';

import type { IThemeStudioDocument } from './itheme-studio-document.interface';

export interface IThemeStudioSnapshot {
  readonly document: IThemeStudioDocument;
  readonly mode: StudioMode | null;
  readonly text: Readonly<Record<string, string>>;
  readonly errors: Readonly<Record<string, string>>;
}
