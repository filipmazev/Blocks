import type { DeviceTheme, SemanticCssVariable, ThemeCssVariable } from '@filip.mazev/blocks/core';

export type StudioColorToken = Extract<ThemeCssVariable, SemanticCssVariable>;
export type StudioSharedToken = Exclude<ThemeCssVariable, StudioColorToken>;
export type StudioMode = DeviceTheme;
export type StudioFamily = 'Colors' | 'Borders' | 'Corners' | 'Shadows' | 'Spacing';
export type StudioValues = Readonly<Partial<Record<ThemeCssVariable, string>>>;

export type StudioSetupStep = 'configure' | 'install' | 'apply';
