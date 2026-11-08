import type { ISpringOptions } from '@effects/runtime/interfaces/ispring-options.interface';

/** Shared spring characteristics; component geometry determines the resulting motion. */
export const MOTION_PRESETS = {
  snappy: { stiffness: 520, damping: 36, mass: 1 },
  smooth: { stiffness: 380, damping: 36, mass: 1 },
  soft: { stiffness: 240, damping: 30, mass: 1 },
  elastic: { stiffness: 440, damping: 25, mass: 1 },
  fluid: { stiffness: 420, damping: 34, mass: 1 }
} as const satisfies Record<string, ISpringOptions>;
