import { GESTURE_MOTION } from '@effects/runtime/constants/gesture-motion.constants';

/**
 * Project a release destination from recent velocity; use actual coordinates for direct manipulation.
 * @param position - Current finite coordinate, normally CSS pixels.
 * @param velocity - Recent finite velocity in coordinate units per second.
 * @param limit - Maximum projection distance in either direction; must be finite and nonnegative.
 * @param seconds - Projection horizon in seconds, default 0.16; must be finite and nonnegative.
 * @returns A bounded destination for choosing a snap point, not an instruction to commit application state.
 * @throws RangeError when coordinates or bounds are invalid.
 */
export function projectMotion(position: number, velocity: number, limit: number, seconds: number = GESTURE_MOTION.projectionTime): number {
  if (![position, velocity, limit, seconds].every(Number.isFinite) || limit < 0 || seconds < 0) {
    throw new RangeError('Gesture projection requires finite coordinates and nonnegative bounds.');
  }

  return position + Math.max(-limit, Math.min(limit, velocity * seconds));
}
