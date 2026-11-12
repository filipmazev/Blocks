import type { IGlassTransition, IGlassTransitionOptions, MotionResult } from '@effects/runtime/types/runtime.types';

import { configurationEvent } from '@effects/runtime/constants/appearance-configuration.constants';
import { MOTION_PRESETS } from '@effects/runtime/constants/motion.constants';

import { inheritedAttribute } from './appearance-configuration.helpers';
import { finiteClamp, rememberStyles } from './dom.helpers';
import { refreshGlassLighting } from './scene.helpers';
import { createSpringMotion, paintMotionStyles } from './spring-motion.helpers';

/**
 * Materialize a positioned overlay with restrained scale and opacity, preserving its collision-aware position.
 * @param origin - Opening element providing the transition interaction context.
 * @param target - Already positioned overlay element whose material is animated.
 * @param options - Optional motion preference, scale, and paint callback. Defaults to inherited preferences and a 0.985 entrance scale.
 */
export function createGlassTransition(origin: HTMLElement, target: HTMLElement, options: IGlassTransitionOptions = {}): IGlassTransition {
  const doc = target.ownerDocument;
  const view = doc.defaultView;

  if (!view) throw new Error('Glass transitions must be mounted in a browser document.');

  if (origin.ownerDocument !== doc) throw new Error('Glass transition endpoints must share a document.');

  const skin = target.matches('[data-bx-surface]') ? target : (target.querySelector<HTMLElement>('[data-bx-surface]') ?? target);
  const restoreVisibility = rememberStyles(target, ['visibility']);
  const restoreSkin = rememberStyles(skin, ['opacity', 'scale', 'transform-origin']);
  const restoreCompositing = rememberStyles(skin, ['will-change']);
  const compositing = view.getComputedStyle(skin).willChange;
  const opacity = Number(view.getComputedStyle(skin).opacity);
  const scale = finiteClamp(options.scale, 0.9, 1, 0.985);
  const preference = view.matchMedia('(prefers-reduced-motion: reduce)');

  let above = target.getBoundingClientRect().bottom <= origin.getBoundingClientRect().top;

  let disposed = false;
  let active = false;
  let destination = 0;
  let renderedOpacity = 0;
  let resolvePending: ((result: MotionResult) => void) | undefined;

  // Keep the backdrop root stable when the spring crosses full opacity or settles.
  skin.style.willChange = compositing === 'auto' ? 'opacity' : `${compositing}, opacity`;

  const reduced = (): boolean => {
    const inherited = inheritedAttribute(origin, 'data-bx-reduced-motion');

    return options.reducedMotion ?? (inherited === null ? preference.matches : inherited === 'true');
  };

  const motion = createSpringMotion(
    [0],
    ([position], [velocity]) => {
      const progress = Math.max(0, Math.min(1, position));

      renderedOpacity = destination === 1 ? Math.max(renderedOpacity, progress) : Math.min(renderedOpacity, progress);
      paintMotionStyles(skin, {
        opacity: String(renderedOpacity * opacity),
        scale: String(scale + (1 - scale) * position),
        'transform-origin': above ? 'center bottom' : 'center top'
      });
      options.onUpdate?.();

      if (!active || position !== destination || velocity !== 0) return;

      active = false;
      restoreSkin();
      restoreVisibility();

      if (destination === 0) target.style.visibility = 'hidden';

      refreshGlassLighting(skin);

      const resolve = resolvePending;

      resolvePending = undefined;
      resolve?.('finished');
    },
    MOTION_PRESETS.snappy
  );

  function move(open: boolean): Promise<MotionResult> {
    if (disposed) return Promise.resolve('cancelled');

    resolvePending?.('cancelled');
    destination = open ? 1 : 0;
    active = true;
    restoreVisibility();

    const finished = new Promise<MotionResult>((resolve) => {
      resolvePending = resolve;
    });

    motion.retarget([destination], reduced());

    return finished;
  }

  const onPreference = (): void => {
    if (active && reduced()) motion.retarget([destination], true);
  };

  preference.addEventListener('change', onPreference);
  doc.addEventListener(configurationEvent, onPreference);

  return {
    enter: () => move(true),
    exit: () => move(false),
    refresh() {
      if (!disposed) above = target.getBoundingClientRect().bottom <= origin.getBoundingClientRect().top;
    },
    destroy() {
      if (disposed) return;

      disposed = true;
      active = false;
      motion.destroy();
      resolvePending?.('cancelled');
      resolvePending = undefined;
      preference.removeEventListener('change', onPreference);
      doc.removeEventListener(configurationEvent, onPreference);
      restoreSkin();
      restoreCompositing();
      restoreVisibility();
    }
  };
}
