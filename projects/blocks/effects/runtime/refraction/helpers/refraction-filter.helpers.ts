import { SLOTS, TILT_MULTIPLY } from '../constants/refraction-maps.constants';
import { REGION } from '../constants/refraction.constants';
import type { Slot, RefractionMap } from '../types/refraction-maps.types';
import { tiltGain, refractionScale, sliceRect } from './refraction-maps.helpers';
import { el, buildField, packField, setAttr, setRect, layField } from './refraction-svg.helpers';

export const createRefractionFilter = (defs: SVGSVGElement, id: string) => {
  const refrFilter = el(defs, 'filter', {
    id,
    filterUnits: 'userSpaceOnUse',
    'color-interpolation-filters': 'sRGB',
    x: -REGION,
    y: -REGION
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

  return { refrFilter, refrField, tiltTiles, tiltRamp, tiltAdd, refrDisp };
};

export const layoutRefractionFilter = (filter: ReturnType<typeof createRefractionFilter>, map: RefractionMap, width: number, height: number): void => {
  layField(filter.refrField, map.slice, width, height);
  for (const slot of SLOTS) setRect(filter.tiltTiles[slot], sliceRect(slot, width, height, map.tilt.r, map.tilt.reach));
  const radius = Math.max(0.01, Math.min(map.slice.r, width / 2, height / 2));
  setAttr(filter.tiltRamp, 'x', radius);
  setAttr(filter.tiltRamp, 'width', Math.max(0.01, width - 2 * radius));
  setAttr(filter.tiltRamp, 'height', height);
  const gain = tiltGain(map, width, height);
  setAttr(filter.tiltAdd, 'k3', gain);
  setAttr(filter.tiltAdd, 'k4', -gain / 2);
  setAttr(filter.refrDisp, 'scale', refractionScale(map, width, height));
  setAttr(filter.refrFilter, 'width', width + REGION * 2);
  setAttr(filter.refrFilter, 'height', height + REGION * 2);
};
