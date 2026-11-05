import type { IGlassTransition, IGlassTransitionOptions, MotionResult } from '@effects/runtime/types/runtime.types';

import { configurationEvent } from '@effects/runtime/constants/appearance-configuration.constants';

import { inheritedAttribute } from './appearance-configuration.helpers';
import { rememberStyles } from './dom.helpers';
import { subscribeFrame } from './frame-scheduler.helpers';

/**
 * Fade a positioned overlay without changing the geometry of its content.
 *
 * @param origin - Opening element providing the transition interaction context.
 * @param target - Already positioned overlay element whose material opacity is animated.
 * @param options - Optional transition timing, motion preference, and lifecycle configuration. Defaults to `{}`.
 */
export function createGlassTransition(origin: HTMLElement, target: HTMLElement, options: IGlassTransitionOptions = {}): IGlassTransition {
  const doc = target.ownerDocument;
  const view = doc.defaultView;

  if (!view) throw new Error('Glass transitions must be mounted in a browser document.');

  if (origin.ownerDocument !== doc) throw new Error('Glass transition endpoints must share a document.');

  const skin = target.matches('[data-bx-surface]') ? target : (target.querySelector<HTMLElement>('[data-bx-surface]') ?? target);
  const restoreVisibility = rememberStyles(target, ['visibility']);
  const opacity = Number(view.getComputedStyle(skin).opacity);
  const readOpacity = () => Number(view.getComputedStyle(skin).opacity);
  const preference = view.matchMedia('(prefers-reduced-motion: reduce)');

  let disposed = false;
  let active = false;
  let value = 0;
  let destination = 0;
  let animation: Animation | undefined;
  let unsubscribe: (() => void) | undefined;
  let resolvePending: ((result: MotionResult) => void) | undefined;

  const reduced = () => {
    const inherited = inheritedAttribute(origin, 'data-bx-reduced-motion');

    return options.reducedMotion ?? (inherited === null ? preference.matches : inherited === 'true');
  };

  function settle(): void {
    active = false;
    value = destination;
    unsubscribe?.();
    unsubscribe = undefined;
    animation?.cancel();
    animation = undefined;
    restoreVisibility();

    if (destination === 0) target.style.visibility = 'hidden';

    const resolve = resolvePending;

    resolvePending = undefined;
    resolve?.('finished');
  }

  function move(open: boolean): Promise<MotionResult> {
    if (disposed) return Promise.resolve('cancelled');

    // Read the interpolated value only when reversing an in-flight fade.
    const from = animation && opacity > 0 ? readOpacity() / opacity : value;

    resolvePending?.('cancelled');
    animation?.cancel();
    animation = undefined;
    unsubscribe?.();
    unsubscribe = undefined;
    destination = open ? 1 : 0;
    active = true;
    restoreVisibility();

    const finished = new Promise<MotionResult>((resolve) => {
      resolvePending = resolve;
    });

    if (reduced() || from === destination) settle();
    else {
      // Animate the surface itself to preserve backdrop-root behavior. Native
      // animation avoids style mutations that invalidate scene lighting each frame.
      const current = skin.animate([{ opacity: from * opacity }, { opacity: destination * opacity }], {
        duration: (open ? 180 : 140) * Math.abs(destination - from),
        easing: 'ease-in-out',
        fill: 'both'
      });

      animation = current;
      void current.finished
        .then(() => {
          if (animation === current && !disposed) settle();
        })
        .catch(() => {
          /* Reversing or destroying a fade cancels its animation. */
        });

      if (options.onUpdate)
        unsubscribe = subscribeFrame(() => {
          options.onUpdate?.();

          return active && !disposed;
        });
    }

    return finished;
  }

  const onPreference = () => {
    if (active && reduced()) settle();
  };

  preference.addEventListener('change', onPreference);
  doc.addEventListener(configurationEvent, onPreference);

  return {
    enter: () => move(true),
    exit: () => move(false),
    refresh() {},
    destroy() {
      if (disposed) return;

      disposed = true;
      active = false;
      unsubscribe?.();
      unsubscribe = undefined;
      resolvePending?.('cancelled');
      resolvePending = undefined;
      preference.removeEventListener('change', onPreference);
      doc.removeEventListener(configurationEvent, onPreference);
      animation?.cancel();
      animation = undefined;
      restoreVisibility();
    }
  };
}
