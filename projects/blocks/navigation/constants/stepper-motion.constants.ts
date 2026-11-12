import type { ISpringOptions } from '@filip.mazev/blocks/effects/runtime';

import { MOTION_PRESETS } from '@filip.mazev/blocks/effects/runtime';

/** Emission follows the existing filled current, tonal complete, and neutral inactive appearances. Reception remains independent. */
export const STEPPER_EMISSION_STRENGTH = {
  inactive: 0.18,
  completed: 0.5,
  active: 1.1,
  error: 1.25
} as const;

/** Slightly extend selection travel while preserving the shared fluid spring's damping ratio. */
export const STEPPER_SELECTION_TIME_SCALE = 1.12;

/** The shared fluid spring slowed by twelve percent, retaining its easing, overshoot and retargetable velocity. */
export const STEPPER_SELECTION_SPRING: Readonly<ISpringOptions> = {
  ...MOTION_PRESETS.fluid,
  mass: MOTION_PRESETS.fluid.mass * STEPPER_SELECTION_TIME_SCALE ** 2,
  damping: MOTION_PRESETS.fluid.damping * STEPPER_SELECTION_TIME_SCALE
};
