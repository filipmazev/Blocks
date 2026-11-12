import type { ISelectionMotion } from '@effects/runtime/interfaces/iselection-motion.interface';
import type { ISelectionMotionOptions } from '@effects/runtime/interfaces/iselection-motion-options.interface';
import type { ISpringMotion } from '@effects/runtime/interfaces/ispring-motion.interface';

import { configurationEvent } from '@effects/runtime/constants/appearance-configuration.constants';
import { MOTION_PRESETS } from '@effects/runtime/constants/motion.constants';

import { inheritedAttribute } from './appearance-configuration.helpers';
import { rememberStyles } from './dom.helpers';
import { createSpringMotion, paintMotionStyles } from './spring-motion.helpers';
import { mountSurface } from './surface.helpers';

/**
 * Mount a traveling material behind existing menu/option rows. Pointer and focus movement never changes application selection.
 * @param root - Content container whose rows share a coordinate space; use an inner div for native restricted-child lists.
 * @param initial - Optional selector and live reduced-motion policy. Defaults to menu items and options with motion enabled.
 * @returns A controller that the owning view must update on preference changes and destroy with the list.
 */
export function mountSelectionMotion(root: HTMLElement, initial: ISelectionMotionOptions = {}): ISelectionMotion {
  const view = root.ownerDocument.defaultView;

  if (!view) throw new Error('Selection motion requires a browser document.');

  const layer = root.ownerDocument.createElement('span');
  const surface = root.ownerDocument.createElement('span');
  const restore = rememberStyles(root, ['position', 'isolation']);

  layer.className = 'bx-selection-layer';
  layer.setAttribute('aria-hidden', 'true');
  surface.className = 'bx-selection-surface';
  surface.setAttribute('aria-hidden', 'true');
  root.dataset['bxSelectionSurface'] = 'true';

  if (view.getComputedStyle(root).position === 'static') root.style.position = 'relative';

  root.style.isolation = 'isolate';
  layer.append(surface);
  root.prepend(layer);

  const skin = mountSurface(surface, { interactive: false, emission: false, reducedMotion: initial.reducedMotion });

  let options = { ...initial };
  let active: HTMLElement | null = null;
  let hovered: HTMLElement | null = null;
  let motion: ISpringMotion | undefined;
  let destroyed = false;
  let pointerActive = false;
  let pointerX: number | undefined;
  let pointerY: number | undefined;

  const preference = view.matchMedia('(prefers-reduced-motion: reduce)');
  const reduced = (): boolean => {
    const inherited = inheritedAttribute(root, 'data-bx-reduced-motion');

    return options.reducedMotion ?? (inherited === null ? preference.matches : inherited === 'true');
  };

  const eligible = (element: Element | null): element is HTMLElement =>
    !!element &&
    root.contains(element) &&
    !element.matches(':disabled, [aria-disabled="true"], .is-disabled') &&
    element.closest('[role="menu"], [role="listbox"]') === root;
  const row = (target: EventTarget | null): HTMLElement | null => {
    const element = target && 'nodeType' in target ? (target as Element) : null;
    const found = element?.closest(options.selector ?? '[role="menuitem"], [role="option"]') ?? null;

    return eligible(found) ? found : null;
  };

  const measure = (snap = false): void => {
    if (destroyed) return;

    // A virtual viewport can restore its own positioning after replacing rows.
    if (view.getComputedStyle(root).position === 'static') root.style.position = 'relative';

    if (!eligible(active) || !active.offsetWidth || !active.offsetHeight) {
      surface.style.visibility = 'hidden';
      motion?.destroy();
      motion = undefined;

      return;
    }

    const bounds = active.getBoundingClientRect();
    const origin = root.getBoundingClientRect();
    const target = [bounds.left - origin.left - root.clientLeft, bounds.top - origin.top - root.clientTop, bounds.width, bounds.height];
    const first = !motion;

    // Keep the clipped layer over the viewport without contributing to its scrollable extent.
    paintMotionStyles(layer, {
      transform: `translate3d(${root.scrollLeft}px, ${root.scrollTop}px, 0)`,
      width: `${root.clientWidth}px`,
      height: `${root.clientHeight}px`
    });
    surface.style.setProperty('--bx-selection-row-surface', active.matches('.is-danger') ? 'var(--bx-bg-danger-hover)' : 'var(--bx-bg-element-hover)');
    motion ??= createSpringMotion(
      target,
      ([x, y, width, height], [velocityX, velocityY]) => {
        const stretch = reduced() ? 0 : Math.min(0.025, Math.hypot(velocityX, velocityY) / 30000);

        paintMotionStyles(
          surface,
          {
            transform: `translate3d(${x}px, ${y}px, 0) scale(${1 - stretch / 3}, ${1 + stretch})`,
            width: `${Math.max(1, width)}px`,
            height: `${Math.max(1, height)}px`
          },
          true
        );
      },
      MOTION_PRESETS.smooth
    );
    motion.retarget(target, snap || first || reduced() || pointerActive);
    surface.style.visibility = 'visible';
  };

  const fallback = (): HTMLElement | null => {
    const focused = row(root.ownerDocument.activeElement);

    return focused?.matches(':focus-visible') ? focused : row(root.querySelector('[aria-selected="true"]'));
  };

  const underPointer = (): HTMLElement | null =>
    pointerX === undefined || pointerY === undefined ? null : row(root.ownerDocument.elementFromPoint(pointerX, pointerY));

  const focus = (event: FocusEvent): void => {
    const focused = row(event.target);

    pointerActive = !focused?.matches(':focus-visible');

    if (!pointerActive) hovered = null;

    active = focused ?? fallback();
    measure();
  };

  const over = (event: PointerEvent): void => {
    if (event.pointerType === 'touch') return;

    const next = row(event.target);

    pointerX = event.clientX;
    pointerY = event.clientY;
    hovered = next;

    if (next === active && pointerActive) return;

    pointerActive = true;
    active = next;
    measure();
  };

  const leave = (event: Event): void => {
    // Leaving a hovered list restores its selected/focused row without sweeping across other options.
    pointerActive = event.type === 'pointerleave' || !row(event.target)?.matches(':focus-visible');

    if (event.type === 'pointerleave') {
      hovered = null;
      pointerX = pointerY = undefined;
    }

    active = fallback();
    measure();
  };

  const onPreference = (): void => {
    skin.update({ interactive: false, emission: false, reducedMotion: reduced() });
    measure();
  };

  const scroll = (event: Event): void => {
    const target = event.target;

    if (target !== root.ownerDocument && target !== root && !(target instanceof view.Element && target.contains(root))) return;

    if (pointerActive) {
      hovered = underPointer();
      active = hovered ?? fallback();
    }

    measure(true);
  };

  const observer = view.ResizeObserver ? new view.ResizeObserver(() => measure()) : undefined;
  const mutation = new view.MutationObserver((records) => {
    if (!records.some((record) => !layer.contains(record.target))) return;

    if (pointerActive && pointerX !== undefined) {
      hovered = underPointer();
      active = hovered ?? fallback();
    } else if (!eligible(active) || records.some((record) => record.attributeName === 'aria-selected')) {
      active = pointerActive && eligible(hovered) ? hovered : fallback();
    }

    measure();
  });

  root.addEventListener('pointerover', over, { passive: true });
  root.addEventListener('pointermove', over, { passive: true });
  root.addEventListener('pointerleave', leave, { passive: true });
  root.addEventListener('focusin', focus);
  root.addEventListener('focusout', leave);
  root.ownerDocument.addEventListener('scroll', scroll, { capture: true, passive: true });
  preference.addEventListener('change', onPreference);
  root.ownerDocument.addEventListener(configurationEvent, onPreference);
  observer?.observe(root);
  mutation.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-selected', 'disabled', 'aria-disabled'] });
  active = fallback();
  measure();

  return {
    update(next) {
      options = { ...options, ...next };
      skin.update({ interactive: false, emission: false, reducedMotion: reduced() });
      measure();
    },
    destroy() {
      if (destroyed) return;

      destroyed = true;
      motion?.destroy();
      skin.destroy();
      observer?.disconnect();
      mutation.disconnect();
      root.removeEventListener('pointerover', over);
      root.removeEventListener('pointermove', over);
      root.removeEventListener('pointerleave', leave);
      root.removeEventListener('focusin', focus);
      root.removeEventListener('focusout', leave);
      root.ownerDocument.removeEventListener('scroll', scroll, true);
      preference.removeEventListener('change', onPreference);
      root.ownerDocument.removeEventListener(configurationEvent, onPreference);
      layer.remove();
      delete root.dataset['bxSelectionSurface'];
      restore();
    }
  };
}
