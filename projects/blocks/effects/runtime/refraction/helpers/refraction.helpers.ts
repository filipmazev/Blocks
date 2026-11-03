import { REFRACTION_CACHE } from '../constants/refraction.constants';
import { buildRefraction } from './refraction-maps.helpers';
import type { RefractionMap } from '../types/refraction-maps.types';
import type { GlassinessMode } from '../types/refraction.types';

/** CSS.supports checks parsing, not whether an SVG filter actually processes backdrop pixels. */
export const supportsRefraction = (view: Window & typeof globalThis, mode: GlassinessMode = 'auto'): boolean => {
  if (mode === 'off' || !view.CSS?.supports || typeof view.ResizeObserver !== 'function') return false;

  const css = view.CSS;
  const syntax = css.supports('backdrop-filter', 'url("#bx-refraction-probe")') || css.supports('-webkit-backdrop-filter', 'url("#bx-refraction-probe")');
  const masks = css.supports('mask-composite', 'intersect') || css.supports('-webkit-mask-composite', 'source-in');
  const chromium = /(?:Chrome|Chromium|Edg|OPR)\//.test(view.navigator.userAgent) && !/(?:iPhone|iPad|iPod)/.test(view.navigator.userAgent);

  return syntax && masks && (mode === 'on' || chromium);
};

export const readRadius = (host: HTMLElement): number => {
  const style = host.ownerDocument.defaultView?.getComputedStyle(host);

  if (!style) return 0;

  const raw = style.borderTopLeftRadius.split(' ')[0];
  const radius = parseFloat(raw) || 0;

  return raw.endsWith('%') ? (Math.min(host.offsetWidth, host.offsetHeight) * radius) / 100 : radius;
};

/** Nine-slice maps describe equal circular corners. Preserve other shapes with the existing material. */
export const hasRefractionGeometry = (host: HTMLElement, style: CSSStyleDeclaration): boolean => {
  const radius = style.borderTopLeftRadius;
  const axes = radius.split(' ');
  const uniform = ['border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius'].every(
    (property) => style.getPropertyValue(property) === radius
  );

  return uniform && axes.every((value) => value === axes[0]) && (!axes[0].endsWith('%') || host.offsetWidth === host.offsetHeight);
};

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
