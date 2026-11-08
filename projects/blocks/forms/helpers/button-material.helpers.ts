import type { ButtonColor, ButtonVariant } from '@forms/types/form.types';

import { BUTTON_EMISSION_EMPHASIS, BUTTON_EMISSION_STRENGTH } from '@forms/constants/button-material.constants';

/**
 * Resolve emission from the existing button appearance and semantic role without changing reception.
 * @param variant - Existing button presentation; filled and floating actions receive the strongest emission.
 * @param outlined - Whether the action uses a restrained outline instead of its normal backing.
 * @param color - Semantic role; danger/warning receive modest emphasis and grayscale remains neutral.
 * @returns A local engine emission multiplier within its supported 0–2 range.
 */
export function buttonEmissionStrength(variant: ButtonVariant, outlined: boolean, color: ButtonColor): number {
  const appearance = variant === 'text' ? 'text' : outlined ? 'outlined' : variant === 'tonal' ? 'tonal' : variant === 'icon' ? 'icon' : 'filled';

  return BUTTON_EMISSION_STRENGTH[appearance] * BUTTON_EMISSION_EMPHASIS[color];
}
