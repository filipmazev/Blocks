import type { RefractionMap, Slot } from '@effects/runtime/types/refraction-maps.types';

import { REFRACTION_MAGNIFICATION_MAPS, REGION } from '@effects/runtime/constants/refraction.constants';
import { SLOTS, TILT_MULTIPLY } from '@effects/runtime/constants/refraction-maps.constants';

import { refractionScale, sliceRect, tiltGain } from './refraction-maps.helpers';
import { buildField, el, layField, packField, setAttr, setRect } from './refraction-svg.helpers';

/**
 * Create the SVG filter primitives and displacement-field references for a refractive surface.
 *
 * @param defs - SVG container that will own the generated filter.
 * @param id - Unique filter ID referenced by the surface's backdrop-filter URL.
 */
export const createRefractionFilter = (defs: SVGSVGElement, id: string) => {
  const refrFilter = el(defs, 'filter', {
    id,
    filterUnits: 'userSpaceOnUse',
    'color-interpolation-filters': 'sRGB',
    x: -REGION,
    y: -REGION
  });
  const magnifyFieldX = el(refrFilter, 'feImage', {
    x: 0,
    y: 0,
    preserveAspectRatio: 'none',
    href: REFRACTION_MAGNIFICATION_MAPS.x,
    result: 'magnify-x-field'
  });

  el(refrFilter, 'feColorMatrix', { in: 'magnify-x-field', type: 'matrix', values: '1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 1', result: 'magnify-x-map' });

  const magnifyX = el(refrFilter, 'feDisplacementMap', {
    in: 'SourceGraphic',
    in2: 'magnify-x-map',
    xChannelSelector: 'R',
    yChannelSelector: 'G',
    result: 'magnified-x'
  });
  const magnifyFieldY = el(refrFilter, 'feImage', {
    x: 0,
    y: 0,
    preserveAspectRatio: 'none',
    href: REFRACTION_MAGNIFICATION_MAPS.y,
    result: 'magnify-y-field'
  });

  el(refrFilter, 'feColorMatrix', { in: 'magnify-y-field', type: 'matrix', values: '0 0 0 0 0.5  1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 1', result: 'magnify-y-map' });

  const magnifyY = el(refrFilter, 'feDisplacementMap', {
    in: 'magnified-x',
    in2: 'magnify-y-map',
    xChannelSelector: 'R',
    yChannelSelector: 'G',
    result: 'magnified'
  });
  const refrField = buildField(refrFilter, 'r');

  // Tilt: magnitude tiles times a sign field (+1 left, ramp over the straight
  // run, -1 right), added onto the x field with a strength that follows the
  // length of the straight run.
  el(refrFilter, 'feFlood', { 'flood-color': 'rgb(128,128,128)', result: 'tbase' });

  const tiltTiles = {} as Record<Slot, SVGFEImageElement>;

  for (const slot of SLOTS) tiltTiles[slot] = el(refrFilter, 'feImage', { preserveAspectRatio: 'none', result: `t${slot}` });

  const tmag = el(refrFilter, 'feMerge', { result: 'tmag' });

  el(tmag, 'feMergeNode', { in: 'tbase' });

  for (const slot of SLOTS) el(tmag, 'feMergeNode', { in: `t${slot}` });

  el(refrFilter, 'feFlood', { 'flood-color': 'rgb(255,255,255)', result: 'sbase' });

  const tiltRamp = el(refrFilter, 'feImage', { preserveAspectRatio: 'none', y: 0, result: 'sramp' });
  const sfield = el(refrFilter, 'feMerge', { result: 'sfield' });

  el(sfield, 'feMergeNode', { in: 'sbase' });
  el(sfield, 'feMergeNode', { in: 'sramp' });
  el(refrFilter, 'feComposite', { in: 'tmag', in2: 'sfield', operator: 'arithmetic', ...TILT_MULTIPLY, result: 'tvec' });

  const tiltAdd = el(refrFilter, 'feComposite', { in: 'rx', in2: 'tvec', operator: 'arithmetic', k1: 0, k2: 1, result: 'rxt' });
  const refrDisp = packField(refrFilter, 'rxt', 'ry', 'rmap');

  setAttr(refrDisp, 'in', 'magnified');

  return { refrFilter, refrField, tiltTiles, tiltRamp, tiltAdd, refrDisp, magnifyFieldX, magnifyFieldY, magnifyX, magnifyY };
};

/**
 * Lay out refraction primitives and update displacement/tilt strength for the current surface dimensions.
 *
 * @param filter - Filter primitives previously returned by createRefractionFilter.
 * @param map - Cached refraction tiles and scaling metadata to render.
 * @param width - Rendered surface width in CSS pixels.
 * @param height - Rendered surface height in CSS pixels.
 * @param strength - Optical displacement multiplier from zero to one; defaults to one.
 * @param magnification - Backdrop magnification around the surface center; defaults to one (unchanged size).
 */
export const layoutRefractionFilter = (
  filter: ReturnType<typeof createRefractionFilter>,
  map: RefractionMap,
  width: number,
  height: number,
  strength = 1,
  magnification = 1
): void => {
  for (const field of [filter.magnifyFieldX, filter.magnifyFieldY]) {
    setAttr(field, 'width', width);
    setAttr(field, 'height', height);
  }

  const zoom = 1 - 1 / magnification;

  setAttr(filter.refrDisp, 'in', magnification > 1 ? 'magnified' : 'SourceGraphic');
  setAttr(filter.magnifyX, 'scale', width * zoom);
  setAttr(filter.magnifyY, 'scale', height * zoom);
  layField(filter.refrField, map.slice, width, height);

  for (const slot of SLOTS) setRect(filter.tiltTiles[slot], sliceRect(slot, width, height, map.tilt.r, map.tilt.reach));

  const radius = Math.max(0.01, Math.min(map.slice.r, width / 2, height / 2));

  setAttr(filter.tiltRamp, 'x', radius);
  setAttr(filter.tiltRamp, 'width', Math.max(0.01, width - 2 * radius));
  setAttr(filter.tiltRamp, 'height', height);

  const gain = tiltGain(map, width, height);

  setAttr(filter.tiltAdd, 'k3', gain);
  setAttr(filter.tiltAdd, 'k4', -gain / 2);
  setAttr(filter.refrDisp, 'scale', refractionScale(map, width, height) * strength);
  setAttr(filter.refrFilter, 'width', width + REGION * 2);
  setAttr(filter.refrFilter, 'height', height + REGION * 2);
};
