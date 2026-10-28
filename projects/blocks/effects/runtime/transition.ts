import { rememberStyles, smoothstep } from './dom';
import { configurationEvent, inheritedAttribute } from './configuration';
import { subscribeFrame } from './scheduler';
import type { GlassTransition, GlassTransitionOptions, MotionResult } from './types';

/** Fade a positioned overlay without changing the geometry of its content. */
export function createGlassTransition(origin: HTMLElement, target: HTMLElement, options: GlassTransitionOptions = {}): GlassTransition {
  const doc = target.ownerDocument;
  const view = doc.defaultView;
  if (!view) throw new Error('Glass transitions must be mounted in a browser document.');
  if (origin.ownerDocument !== doc) throw new Error('Glass transition endpoints must share a document.');
  const skin = target.matches('[data-bx-surface]') ? target : (target.querySelector<HTMLElement>('[data-bx-surface]') ?? target);
  const restoreOpacity = rememberStyles(skin, ['opacity']);
  const restoreVisibility = rememberStyles(target, ['visibility']);
  const opacity = Number(view.getComputedStyle(skin).opacity);
  const preference = view.matchMedia('(prefers-reduced-motion: reduce)');
  let disposed = false;
  let active = false;
  let value = 0,
    from = 0,
    destination = 0,
    elapsed = 0;
  let unsubscribe: (() => void) | undefined;
  let resolvePending: ((result: MotionResult) => void) | undefined;
  const reduced = () => {
    const inherited = inheritedAttribute(origin, 'data-bx-reduced-motion');
    return options.reducedMotion ?? (inherited === null ? preference.matches : inherited === 'true');
  };
  const paint = () => {
    // Opacity on the CDK pane would create a backdrop root above the material,
    // cutting off its view of the page for every intermediate animation frame.
    // Composite the surface's own backdrop and content together instead.
    skin.style.opacity = String(value * opacity);
    options.onUpdate?.();
  };
  function settle(): void {
    active = false;
    value = destination;
    unsubscribe?.();
    unsubscribe = undefined;
    restoreOpacity();
    restoreVisibility();
    if (destination === 0) target.style.visibility = 'hidden';
    const resolve = resolvePending;
    resolvePending = undefined;
    resolve?.('finished');
  }
  function move(open: boolean): Promise<MotionResult> {
    if (disposed) return Promise.resolve('cancelled');
    resolvePending?.('cancelled');
    unsubscribe?.();
    unsubscribe = undefined;
    from = value;
    destination = open ? 1 : 0;
    elapsed = 0;
    active = true;
    restoreVisibility();
    const finished = new Promise<MotionResult>((resolve) => {
      resolvePending = resolve;
    });
    if (reduced() || from === destination) settle();
    else {
      paint();
      const duration = (open ? 0.18 : 0.14) * Math.abs(destination - from);
      unsubscribe = subscribeFrame((dt) => {
        elapsed += dt;
        value = from + (destination - from) * smoothstep(0, duration, elapsed);
        paint();
        if (disposed) return false;
        if (elapsed >= duration) {
          settle();
          return false;
        }
        return true;
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
      restoreOpacity();
      restoreVisibility();
    }
  };
}

/** @deprecated Use createGlassTransition. */
export const createLiquidTransition = createGlassTransition;
