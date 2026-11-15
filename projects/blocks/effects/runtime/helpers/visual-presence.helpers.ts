import type { IVisualPresence } from '@effects/runtime/interfaces/ivisual-presence.interface';
import type { IVisualPresenceOptions } from '@effects/runtime/interfaces/ivisual-presence-options.interface';

import { MOTION_PRESETS } from '@effects/runtime/constants/motion.constants';

import { createSpringMotion } from './spring-motion.helpers';

/**
 * Fade a visual without changing its layout, transform, accessible name, or interaction state. Uses the shared exact spring and lazy frame scheduler.
 * @param element - Dedicated visual layer; callers own positioning and semantic hiding of obsolete content.
 * @param options - Optional initial visibility, hidden scale and hidden-settlement callback. Defaults to a visible layer and 0.9 hidden scale.
 * @returns Disposable controller. Snap on live reduced motion and destroy with the owning view.
 */
export function createVisualPresence(element: HTMLElement | SVGElement, options: IVisualPresenceOptions = {}): IVisualPresence {
  const properties = ['opacity', 'scale', 'transform-origin'] as const;
  const original = properties.map((property) => [element.style.getPropertyValue(property), element.style.getPropertyPriority(property)]);
  const requestedScale = options.hiddenScale ?? 0.9;
  const hiddenScale = Number.isFinite(requestedScale) ? Math.max(0, Math.min(1, requestedScale)) : 0.9;

  let visible = options.initiallyVisible ?? true;
  let notified = false;
  let destroyed = false;

  const motion = createSpringMotion(
    [visible ? 1 : 0],
    ([value], [velocity]) => {
      const progress = Math.max(0, Math.min(1, value));

      element.style.opacity = String(progress);
      element.style.scale = String(hiddenScale + (1 - hiddenScale) * progress);
      element.style.transformOrigin = 'center';

      if (!visible && value === 0 && velocity === 0 && !notified) {
        notified = true;
        options.onHidden?.();
      }
    },
    MOTION_PRESETS.snappy
  );

  return {
    update(next, immediate = false) {
      if (destroyed) return;

      if (next !== visible) notified = false;

      visible = next;
      motion.retarget([visible ? 1 : 0], immediate);
    },
    destroy() {
      if (destroyed) return;

      destroyed = true;
      motion.destroy();
      properties.forEach((property, index) => {
        const [value, priority] = original[index];

        if (value) element.style.setProperty(property, value, priority);
        else element.style.removeProperty(property);
      });
    }
  };
}
