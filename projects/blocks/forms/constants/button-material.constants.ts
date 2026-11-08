import type { ButtonColor } from '@forms/types/form.types';

/** Appearance-dependent emission; independent of received environmental light. */
export const BUTTON_EMISSION_STRENGTH = { text: 0, icon: 0.45, outlined: 0.45, tonal: 0.65, filled: 1.1 } as const;

/** Restrained semantic emphasis applied to the appearance's emission strength. */
export const BUTTON_EMISSION_EMPHASIS: Readonly<Record<ButtonColor, number>> = {
  primary: 1,
  accent: 1,
  success: 1,
  info: 1,
  warn: 1.04,
  danger: 1.1,
  grayscale: 0.35
};
