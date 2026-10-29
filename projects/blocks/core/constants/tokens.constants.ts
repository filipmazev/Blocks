import { SemanticColorToken } from '../types/theme.types';

export const PALETTE_NAMES = [
  'primary',
  'accent',
  'carbon',
  'cobalt',
  'ember',
  'brick-rose',
  'azure',
  'violet',
  'teal',
  'tangerine',
  'indigo',
  'cyan',
  'lime',
  'cool-violet',
  'cyber-yellow',
  'cyber-slate',
  'blue',
  'orange',
  'purple',
  'red',
  'green',
  'danger',
  'warn',
  'success',
  'information',
  'neutral'
] as const;
export const SHADE_NUMBERS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] as const;

export const TOKEN_PREFIX = 'bx';
export const TOKEN_DELIMITER = '-';
export const TOKEN_COLOR_DELIMITER = 'color';
export const FALLBACK_COLOR = '#000000';

export const SEMANTIC_PAIRS: Partial<Record<SemanticColorToken, SemanticColorToken>> = {
  'bg-canvas': 'text-primary',
  'bg-surface': 'text-primary',
  'bg-surface-alt': 'text-primary',
  'bg-element': 'text-primary',
  'bg-element-hover': 'text-primary',

  'text-heading': 'bg-element',
  'text-primary': 'bg-element',
  'text-secondary': 'bg-element',
  'text-brand': 'bg-surface',
  'text-inverse': 'primary',
  'on-primary': 'primary',
  'on-primary-hover': 'primary-hover',
  'on-primary-active': 'primary-active',

  accent: 'accent-subtle',
  'accent-hover': 'on-accent-hover',
  'accent-active': 'on-accent-active',
  'accent-subtle': 'text-accent',
  'on-accent': 'accent',
  'on-accent-hover': 'accent-hover',
  'on-accent-active': 'accent-active',
  'text-accent': 'accent-subtle',
  'border-accent': 'bg-surface',

  primary: 'primary-subtle',
  'primary-hover': 'on-primary',
  'primary-active': 'on-primary',
  'primary-subtle': 'text-primary',

  'border-subtle': 'bg-surface',
  'border-default': 'bg-surface',
  'border-strong': 'bg-surface',
  'border-brand': 'bg-surface',

  'bg-info': 'text-info',
  'bg-info-active': 'text-info',
  'bg-info-hover': 'text-info',
  'bg-info-disabled': 'border-info',
  'bg-info-subtle': 'border-info',
  'border-info': 'bg-info',
  'text-info': 'bg-info',

  'bg-success': 'text-success',
  'bg-success-active': 'text-success',
  'bg-success-hover': 'text-success',
  'bg-success-disabled': 'border-success',
  'bg-success-subtle': 'border-success',
  'border-success': 'bg-success',
  'text-success': 'bg-success',

  'bg-warn': 'text-warn',
  'bg-warn-active': 'text-warn',
  'bg-warn-hover': 'text-warn',
  'bg-warn-disabled': 'border-warn',
  'bg-warn-subtle': 'border-warn',
  'border-warn': 'bg-warn',
  'text-warn': 'bg-warn',

  'bg-danger': 'text-danger',
  'bg-danger-active': 'text-danger',
  'bg-danger-hover': 'text-danger',
  'bg-danger-disabled': 'border-danger',
  'bg-danger-subtle': 'border-danger',
  'border-danger': 'bg-danger',
  'text-danger': 'bg-danger',

  'scroll-bg': 'bg-surface',
  'scroll-thumb': 'scroll-bg',
  'scroll-thumb-hover': 'scroll-bg'
};
