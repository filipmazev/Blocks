// Adapted from Nordify refraction (MIT). See effects/THIRD_PARTY_NOTICES.md.
import type { CORNERS, EDGES, SLOTS } from '@effects/runtime/constants/refraction-maps.constants';

export type Slot = (typeof SLOTS)[number];

export type Corner = (typeof CORNERS)[number];

export type Edge = (typeof EDGES)[number];

export type Axis = 'x' | 'y';

export type Tiles = { r: number; reach: number; img: Partial<Record<Slot, string>> };

export type SliceRect = { x: number; y: number; w: number; h: number };

/** Space around the element in CSS px: top, right, bottom, left. */
export type ReflectAvail = [number, number, number, number];

export type RefractionMap = {
  /** Edge tiles: one grey component each (top/bottom y, left/right x). */
  slice: Tiles & { img: Record<Edge, string> };
  /** Corner tiles per axis: magnitude times direction, pre-multiplied. */
  prod: Record<Axis, Record<Corner, string>>;
  /** Tilt magnitude; its sign across the straight run comes from `tiltRamp`. */
  tilt: Tiles & { img: Record<Slot, string> };
  tiltRamp: string;
  gain: number;
};

export type V3 = [number, number, number];

export type ReflectionMap = {
  slice: Tiles & { img: Record<Edge, string> };
  prod: Record<Axis, Record<Corner, string>>;
  /** Fresnel weight as a nine-slice CSS mask (PNG corners, gradient edges). */
  mask: Tiles & { img: Record<Slot, string> };
  /** Overhang of the layer: top, right, bottom, left. */
  pad: ReflectAvail;
  scale: number;
  blur: number;
};

/** One displacement field, with separate grayscale components to preserve wide-gamut colors. */
export type RefractionField = { edges: Record<Edge, SVGFEImageElement>; corners: Record<`${Axis}${Corner}`, SVGFEImageElement> };
