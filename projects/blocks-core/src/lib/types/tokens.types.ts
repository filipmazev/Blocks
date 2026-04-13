import * as tokenConsts from '../constants/tokens.constants';

export type ThemePalette = (typeof tokenConsts.PALETTE_NAMES)[number];
export type ThemeShade = (typeof tokenConsts.SHADE_NUMBERS)[number];

export type SemanticColorToken =
  | 'bg-canvas'
  | 'bg-surface'
  | 'bg-surface-alt'
  | 'bg-element'
  | 'bg-element-hover'
  | 'primary'
  | 'primary-hover'
  | 'primary-active'
  | 'primary-subtle'
  | 'on-primary'
  | 'text-heading'
  | 'text-primary'
  | 'text-secondary'
  | 'text-brand'
  | 'text-inverse'
  | 'border-subtle'
  | 'border-default'
  | 'border-strong'
  | 'border-brand'
  | 'info-bg'
  | 'info-bg-subtle'
  | 'info-border'
  | 'info-text'
  | 'success-bg'
  | 'success-bg-subtle'
  | 'success-border'
  | 'success-text'
  | 'warn-bg'
  | 'warn-bg-subtle'
  | 'warn-border'
  | 'warn-text'
  | 'error-bg'
  | 'error-bg-subtle'
  | 'error-border'
  | 'error-text'
  | 'scroll-bg'
  | 'scroll-thumb'
  | 'scroll-thumb-hover';

export type ThemeColorToken = `${ThemePalette}-${ThemeShade}`;
export type Color = ThemeColorToken | SemanticColorToken;
export type ThemedColor = Color | { light: Color; dark?: Color };
