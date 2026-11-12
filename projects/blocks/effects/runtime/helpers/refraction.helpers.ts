import type { GlassinessMode } from '@effects/runtime/types/refraction.types';
import type { RefractionMap } from '@effects/runtime/types/refraction-maps.types';

import { REFRACTION_CACHE } from '@effects/runtime/constants/refraction.constants';

import { finiteClamp } from './dom.helpers';
import { buildRefraction } from './refraction-maps.helpers';

/**
 * CSS.supports checks parsing, not whether an SVG filter actually processes backdrop pixels.
 *
 * @param view - Browser window whose filter, observer, and device capabilities are inspected.
 * @param mode - Requested refraction policy; off disables support and auto applies capability/device constraints. Defaults to `'auto'`.
 */
export const supportsRefraction = (view: Window & typeof globalThis, mode: GlassinessMode = 'auto'): boolean => {
  if (mode === 'off' || !view.CSS?.supports || typeof view.ResizeObserver !== 'function') return false;

  const css = view.CSS;
  const syntax = css.supports('backdrop-filter', 'url("#bx-refraction-probe")') || css.supports('-webkit-backdrop-filter', 'url("#bx-refraction-probe")');
  const masks = css.supports('mask-composite', 'intersect') || css.supports('-webkit-mask-composite', 'source-in');
  const chromium = /(?:Chrome|Chromium|Edg|OPR)\//.test(view.navigator.userAgent) && !/(?:iPhone|iPad|iPod)/.test(view.navigator.userAgent);

  return syntax && masks && (mode === 'on' || chromium);
};

/**
 * Read the host's computed top-left corner radius as a finite CSS-pixel value.
 *
 * @param host - Surface element whose computed corner radius is measured.
 */
export const readRadius = (host: HTMLElement): number => {
  const style = host.ownerDocument.defaultView?.getComputedStyle(host);

  if (!style) return 0;

  const raw = style.borderTopLeftRadius.split(' ')[0];
  const radius = parseFloat(raw) || 0;

  return raw.endsWith('%') ? (Math.min(host.offsetWidth, host.offsetHeight) * radius) / 100 : radius;
};

/**
 * Nine-slice maps describe equal circular corners. Preserve other shapes with the existing material.
 *
 * @param host - Surface element whose rendered dimensions are checked.
 * @param style - Computed style used to validate material geometry.
 */
export const hasRefractionGeometry = (host: HTMLElement, style: CSSStyleDeclaration): boolean => {
  const radius = style.borderTopLeftRadius;
  const axes = radius.split(' ');
  const uniform = ['border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius'].every(
    (property) => style.getPropertyValue(property) === radius
  );

  return uniform && axes.every((value) => value === axes[0]) && (!axes[0].endsWith('%') || host.offsetWidth === host.offsetHeight);
};

/**
 * Reuse or build a bounded cached refraction map for the requested surface geometry.
 *
 * @param short - Shorter surface dimension in CSS pixels.
 * @param radius - Requested corner radius in CSS pixels, clamped to fit the surface.
 */
export const cachedRefraction = (short: number, radius: number): RefractionMap => {
  radius = Math.max(0.01, Math.min(radius, short / 2));

  const reach = Math.max(2, Math.min(Math.floor(short / 2), Math.ceil(radius)));
  const key = `${radius}|${reach}`;

  let map = REFRACTION_CACHE.get(key);

  if (!map) {
    map = buildRefraction(short, radius);

    const oldest = REFRACTION_CACHE.keys().next().value;

    if (REFRACTION_CACHE.size >= 96 && oldest !== undefined) REFRACTION_CACHE.delete(oldest);

    REFRACTION_CACHE.set(key, map);
  }

  return map;
};

/**
 * Resolve a surface's optional optical displacement multiplier without changing its cached geometry.
 * @param style - Computed surface style containing the optional `--bx-refraction-strength` value.
 * @returns A multiplier from zero to one; omitted or malformed values preserve the default strength of one.
 */
export const readRefractionStrength = (style: CSSStyleDeclaration): number =>
  finiteClamp(parseFloat(style.getPropertyValue('--bx-refraction-strength')), 0, 1, 1);

/**
 * Resolve an optional backdrop magnification around the center of a glass lens.
 * @param style - Computed surface style containing `--bx-refraction-magnification`.
 * @returns A magnification from one to two; omitted or malformed values retain the original size.
 */
export const readRefractionMagnification = (style: CSSStyleDeclaration): number =>
  finiteClamp(parseFloat(style.getPropertyValue('--bx-refraction-magnification')), 1, 2, 1);
