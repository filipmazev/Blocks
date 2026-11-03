import { CORNERS, EDGES, PACK_Y, UNPACK } from '../constants/refraction-maps.constants';
import { sliceRect } from './refraction-maps.helpers';
import type { Axis, Corner, Edge, SliceRect, Tiles, RefractionField } from '../types/refraction-maps.types';

export function el<K extends keyof SVGElementTagNameMap>(parent: Element | DocumentFragment, tag: K, attrs: Record<string, string | number> = {}) {
  const node = parent.ownerDocument.createElementNS('http://www.w3.org/2000/svg', tag);

  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));

  parent.appendChild(node);
  return node;
}

export function layer(parent: Element | DocumentFragment, cls: string) {
  const node = parent.ownerDocument.createElement('span');
  node.className = cls;
  node.setAttribute('aria-hidden', 'true');
  parent.appendChild(node);
  return node;
}

/* Writing an SVG attribute, even to the same value, invalidates the filter
   and re-filters the backdrop. During a resize most values do not change
   (corners keep their size, only the edges grow), so compare first. */
export const setAttr = (node: Element, name: string, value: number | string) => {
  const next = String(value);

  if (node.getAttribute(name) !== next) node.setAttribute(name, next);
};

export const setRect = (node: Element, r: SliceRect) => {
  setAttr(node, 'x', r.x);
  setAttr(node, 'y', r.y);
  setAttr(node, 'width', r.w);
  setAttr(node, 'height', r.h);
};

export const setStyle = (node: HTMLElement, name: string, value: string) => {
  if (node.style.getPropertyValue(name) !== value) node.style.setProperty(name, value);
};

export const setBackdrop = (node: HTMLElement, value: string) => {
  setStyle(node, 'backdrop-filter', value);
  setStyle(node, '-webkit-backdrop-filter', value);
};

export function buildField(filter: SVGFilterElement, p: string): RefractionField {
  el(filter, 'feFlood', { 'flood-color': 'rgb(128,128,128)', result: `${p}base` });
  const edges = {} as RefractionField['edges'];

  for (const slot of EDGES) edges[slot] = el(filter, 'feImage', { preserveAspectRatio: 'none', result: `${p}${slot}` });

  const corners = {} as RefractionField['corners'];

  for (const axis of ['x', 'y'] as const) {
    for (const c of CORNERS) corners[`${axis}${c}`] = el(filter, 'feImage', { preserveAspectRatio: 'none', result: `${p}c${axis}${c}` });

    const merge = el(filter, 'feMerge', { result: `${p}${axis}` });
    el(merge, 'feMergeNode', { in: `${p}base` });

    for (const c of CORNERS) el(merge, 'feMergeNode', { in: `${p}c${axis}${c}` });

    for (const slot of axis === 'x' ? ['left', 'right'] : ['top', 'bottom']) el(merge, 'feMergeNode', { in: `${p}${slot}` });
  }

  return { edges, corners };
}

/** Grey x and y become one coloured map only at the very end (see maps.ts). */
export function packField(filter: SVGFilterElement, x: string, y: string, out: string) {
  el(filter, 'feColorMatrix', { in: y, type: 'matrix', values: PACK_Y, result: `${out}ya` });
  el(filter, 'feComposite', { in: x, in2: `${out}ya`, operator: 'in', result: `${out}xy` });
  el(filter, 'feColorMatrix', { in: `${out}xy`, type: 'matrix', values: UNPACK, result: out });
  return el(filter, 'feDisplacementMap', {
    in: 'SourceGraphic',
    in2: out,
    xChannelSelector: 'R',
    yChannelSelector: 'G',
    result: 'bent'
  });
}

export function setFieldImages(field: RefractionField, map: { slice: Tiles & { img: Record<Edge, string> }; prod: Record<Axis, Record<Corner, string>> }) {
  for (const slot of EDGES) setAttr(field.edges[slot], 'href', map.slice.img[slot]);

  for (const axis of ['x', 'y'] as const) for (const c of CORNERS) setAttr(field.corners[`${axis}${c}`], 'href', map.prod[axis][c]);
}

export function layField(field: RefractionField, tiles: Tiles, w: number, h: number, ox = 0, oy = 0) {
  for (const slot of EDGES) setRect(field.edges[slot], sliceRect(slot, w, h, tiles.r, tiles.reach, ox, oy));

  for (const c of CORNERS) {
    const rect = sliceRect(c, w, h, tiles.r, tiles.reach, ox, oy);
    setRect(field.corners[`x${c}`], rect);
    setRect(field.corners[`y${c}`], rect);
  }
}
