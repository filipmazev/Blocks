import type { ISpringMotion } from '@effects/runtime/interfaces/ispring-motion.interface';
import type { ISpringOptions } from '@effects/runtime/interfaces/ispring-options.interface';

import { Spring } from '@effects/runtime/classes/spring';
import { MOTION_PRESETS } from '@effects/runtime/constants/motion.constants';

import { subscribeFrame } from './frame-scheduler.helpers';
import { refreshGlassLighting } from './scene.helpers';
import { rememberRenderedSurfaceStyles } from './surface-style.helpers';

/**
 * Paint decorative motion without invalidating unrelated scene receivers.
 * @param element - Element owned by the motion controller.
 * @param styles - CSS property/value pairs, including custom properties.
 * @param geometry - Refresh this receiver's lighting geometry after moving or resizing it. Defaults to false.
 */
export function paintMotionStyles(element: HTMLElement, styles: Readonly<Record<string, string>>, geometry = false): void {
  for (const [property, value] of Object.entries(styles)) element.style.setProperty(property, value);

  rememberRenderedSurfaceStyles(element);

  if (geometry) refreshGlassLighting(element);
}

/**
 * Animate scalar channels with exact damped springs and one shared, bounded frame clock. Stops when settled; safe without a browser clock.
 * @param initial - Finite starting values, in the same order as subsequent targets.
 * @param render - Paint callback receiving current values and velocities per second. Called after retargeting and on moving frames.
 * @param options - Spring characteristics; defaults to the smooth selection preset.
 * @returns A disposable controller. Owners must snap on live reduced-motion changes and destroy it with their view.
 */
export function createSpringMotion(
  initial: readonly number[],
  render: (values: readonly number[], velocities: readonly number[]) => void,
  options: ISpringOptions = MOTION_PRESETS.smooth
): ISpringMotion {
  const springs = initial.map((value) => new Spring(value, options));
  const paint = (): void =>
    render(
      springs.map((spring) => spring.value),
      springs.map((spring) => spring.velocity)
    );

  let stop: (() => void) | undefined;
  let destroyed = false;

  return {
    retarget(values, immediate = false) {
      if (destroyed) return;

      if (values.length !== springs.length || values.some((value) => !Number.isFinite(value))) {
        throw new RangeError('Motion targets must be finite and match the initial channel count.');
      }

      const snap = immediate || typeof requestAnimationFrame !== 'function';

      springs.forEach((spring, index) => {
        if (snap) spring.snap(values[index]);
        else spring.target = values[index];
      });

      if (snap) {
        stop?.();
        stop = undefined;
      } else if (!stop && springs.some((spring) => spring.value !== spring.target || spring.velocity !== 0)) {
        stop = subscribeFrame((delta) => {
          const moving = springs.map((spring) => spring.step(delta)).some(Boolean);

          paint();

          if (!moving) stop = undefined;

          return moving;
        });
      }

      paint();
    },
    destroy() {
      destroyed = true;
      stop?.();
      stop = undefined;
    }
  };
}
