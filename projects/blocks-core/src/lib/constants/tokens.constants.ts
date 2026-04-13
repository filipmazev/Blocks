import { SemanticColorToken } from '../../public-api';

export const PALETTE_NAMES = ['orange', 'purple', 'red', 'green', 'error', 'success', 'information', 'neutral'] as const;
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

  'text-heading': 'bg-surface',
  'text-primary': 'bg-surface',
  'text-secondary': 'bg-surface',
  'text-brand': 'bg-surface',
  'text-inverse': 'primary',
  'on-primary': 'primary',

  primary: 'primary-subtle',
  'primary-hover': 'on-primary',
  'primary-active': 'on-primary',
  'primary-subtle': 'text-primary',

  'border-subtle': 'bg-surface',
  'border-default': 'bg-surface',
  'border-strong': 'bg-surface',
  'border-brand': 'bg-surface',

  'info-bg': 'info-text',
  'info-bg-subtle': 'info-border',
  'info-border': 'info-bg',
  'info-text': 'info-bg',

  'success-bg': 'success-text',
  'success-bg-subtle': 'success-border',
  'success-border': 'success-bg',
  'success-text': 'success-bg',

  'warn-bg': 'warn-text',
  'warn-bg-subtle': 'warn-border',
  'warn-border': 'warn-bg',
  'warn-text': 'warn-bg',

  'error-bg': 'error-text',
  'error-bg-subtle': 'error-border',
  'error-border': 'error-bg',
  'error-text': 'error-bg',

  'scroll-bg': 'bg-surface',
  'scroll-thumb': 'scroll-bg',
  'scroll-thumb-hover': 'scroll-bg'
};
