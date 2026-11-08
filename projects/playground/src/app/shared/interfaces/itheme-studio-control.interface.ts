import type { ThemeCssVariable } from '@filip.mazev/blocks/core';
import type { StudioFamily } from '@playground/types/theme-studio.types';

export interface IThemeStudioControl {
  readonly name: ThemeCssVariable;
  readonly label: string;
  readonly family: StudioFamily;
  readonly group: string;
  readonly advanced: boolean;
  readonly hint: string;
}
