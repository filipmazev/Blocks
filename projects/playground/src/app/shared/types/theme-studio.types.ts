import type { SemanticCssVariable, ThemeCssVariable } from '@filip.mazev/blocks/core';

export type StudioColorToken = Extract<ThemeCssVariable, SemanticCssVariable>;
export type StudioSharedToken = Exclude<ThemeCssVariable, StudioColorToken>;
export type StudioMode = 'light' | 'dark';
export type StudioFamily = 'Colors' | 'Borders' | 'Corners' | 'Shadows' | 'Spacing';
export type StudioValues = Readonly<Partial<Record<ThemeCssVariable, string>>>;

export type StudioSetupStep = 'configure' | 'install' | 'apply';
