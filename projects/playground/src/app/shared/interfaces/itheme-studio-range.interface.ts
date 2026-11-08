import type { IThemeStudioShadow } from './itheme-studio-shadow.interface';

export interface IThemeStudioRange {
  readonly key: Exclude<keyof IThemeStudioShadow, 'color'>;
  readonly label: string;
  readonly min: number;
  readonly max: number;
  readonly unit: string;
}
