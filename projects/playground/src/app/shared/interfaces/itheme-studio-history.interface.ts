import type { IThemeStudioSnapshot } from './itheme-studio-snapshot.interface';

export interface IThemeStudioHistory {
  readonly past: readonly IThemeStudioSnapshot[];
  readonly future: readonly IThemeStudioSnapshot[];
}
