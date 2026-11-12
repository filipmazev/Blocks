import type { RefractionMap } from '@effects/runtime/types/refraction-maps.types';

export const BAKE_SLACK_DOWN = 12;
export const BAKE_SLACK_UP = 3;
export const BAKE_SETTLE_MS = 650;
export const AVAIL_STEP = 8;
export const REGION = 2;
export const REFRACTION_CACHE = new Map<string, RefractionMap>();

/** Inward coordinate ramps used to magnify the backdrop around a surface's center. */
export const REFRACTION_MAGNIFICATION_MAPS = {
  x: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="256" height="1"><defs><linearGradient id="r"><stop stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient></defs><rect width="256" height="1" fill="url(#r)"/></svg>')}`,
  y: `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1" height="256"><defs><linearGradient id="r" x2="0" y2="1"><stop stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient></defs><rect width="1" height="256" fill="url(#r)"/></svg>')}`
} as const;
