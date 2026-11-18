/** Shared horizontal intent threshold in CSS pixels; release uses the runtime's bounded projection. */
export const SWIPE_ACTION_THRESHOLD = 8;
/** Semantic context foregrounds use the same readable roles as other Blocks action copy. */
export const SWIPE_ACTION_FOREGROUNDS = {
  primary: 'var(--bx-text-brand)',
  accent: 'var(--bx-text-accent)',
  success: 'var(--bx-text-success-readable, var(--bx-text-success))',
  danger: 'var(--bx-text-danger-readable, var(--bx-text-danger))',
  info: 'var(--bx-text-info-readable, var(--bx-text-info))',
  warn: 'var(--bx-text-warn-readable, var(--bx-text-warn))',
  grayscale: 'var(--bx-text-primary)'
} as const;
/** Idle gap in milliseconds ending a horizontal wheel burst, shorter than the runtime's stale-velocity interval. */
export const SWIPE_WHEEL_IDLE = 80;
/** Default hover/focus dwell in milliseconds for compact icon action names. Large truncated captions remain immediate. */
export const SWIPE_TOOLTIP_DWELL = 400;
/** Bounded entrance calibration with stagger delays in milliseconds; settling uses the shared elastic spring. */
export const SWIPE_ACTION_ENTRANCE = {
  staggerMs: 50,
  maxStaggerMs: 150,
  hiddenScale: 0.72,
  singleHiddenScale: 0.97,
  pop: 0.16,
  singlePop: 0.015,
  strain: 0.025,
  singleStrain: 0.008,
  velocityWeight: 0.1,
  travel: 0.12
} as const;

/** Default fractions of the additional stretch distance; only actual gesture travel can arm release activation. */
export const SWIPE_FULL_ACTION = {
  armThreshold: 0.65,
  commitThreshold: 0.78,
  destructiveCommitThreshold: 0.94,
  resistance: 1.25,
  destructiveResistance: 8,
  destructivePlateau: 0.15,
  resistanceEnd: 0.4,
  destructiveResistanceEnd: 0.9
} as const;
