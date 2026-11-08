/** Emission follows the existing filled current, tonal complete, and neutral inactive appearances. Reception remains independent. */
export const STEPPER_EMISSION_STRENGTH = {
  inactive: 0.18,
  completed: 0.5,
  active: 1.1,
  error: 1.25
} as const;
