import type { Axis, Corner, Edge, RefractionField, SliceRect, Tiles } from '@effects/runtime/types/refraction-maps.types';

import { CORNERS, EDGES, PACK_Y, UNPACK } from '@effects/runtime/constants/refraction-maps.constants';

import { sliceRect } from './refraction-maps.helpers';

/**
 * Create an SVG element in the parent's document, assign attributes, append it, and return it.
 *
 * @param parent - Element or fragment receiving the generated SVG child.
 * @param tag - SVG element tag determining the returned element type.
 * @param attrs - Initial SVG attribute names and string/numeric values. Defaults to `{}`.
 * @typeParam K - SVG element tag determining the concrete returned element type.
 */
export function el<K extends keyof SVGElementTagNameMap>(parent: Element | DocumentFragment, tag: K, attrs: Record<string, string | number> = {}) {
  const node = parent.ownerDocument.createElementNS('http://www.w3.org/2000/svg', tag);

  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));

  parent.appendChild(node);

  return node;
}

/**
 * Append a decorative, accessibility-hidden span for a material rendering layer.
 *
 * @param parent - Element or fragment receiving the decorative layer.
 * @param cls - CSS class names applied to the layer.
 */
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
/**
 * Update an SVG/DOM attribute only when its string value changes, avoiding redundant filter invalidation.
 *
 * @param node - Element whose attribute should be updated.
 * @param name - Attribute name to write.
 * @param value - Numeric or string attribute value to serialize.
 */
export const setAttr = (node: Element, name: string, value: number | string) => {
  const next = String(value);

  if (node.getAttribute(name) !== next) node.setAttribute(name, next);
};

/**
 * Apply the x, y, width, and height attributes of a filter slice rectangle.
 *
 * @param node - SVG element receiving the rectangle attributes.
 * @param r - Slice rectangle describing the desired position and dimensions.
 */
export const setRect = (node: Element, r: SliceRect) => {
  setAttr(node, 'x', r.x);
  setAttr(node, 'y', r.y);
  setAttr(node, 'width', r.w);
  setAttr(node, 'height', r.h);
};

/**
 * Write an inline CSS property only when its value changes.
 *
 * @param node - Element receiving the inline style.
 * @param name - CSS property name to update.
 * @param value - Serialized CSS value to apply.
 */
export const setStyle = (node: HTMLElement, name: string, value: string) => {
  if (node.style.getPropertyValue(name) !== value) node.style.setProperty(name, value);
};

/**
 * Apply matching standard and WebKit backdrop-filter values without redundant style writes.
 *
 * @param node - Decorative layer receiving the backdrop filter.
 * @param value - Serialized backdrop-filter expression.
 */
export const setBackdrop = (node: HTMLElement, value: string) => {
  setStyle(node, 'backdrop-filter', value);
  setStyle(node, '-webkit-backdrop-filter', value);
};

/**
 * Create edge and corner SVG image primitives for independent x/y displacement fields.
 *
 * @param filter - SVG filter that will own the generated field primitives.
 * @param p - Unique result-name prefix separating this field from other filter stages.
 */
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

/**
 * Grey x and y become one coloured map only at the very end (see maps.ts).
 *
 * @param filter - SVG filter that will own the field-packing stages.
 * @param x - SVG result name of the grayscale horizontal displacement field.
 * @param y - SVG result name of the grayscale vertical displacement field.
 * @param out - Unique SVG result name for the packed displacement map.
 */
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

/**
 * Assign cached edge and corner image data URLs to an SVG displacement field.
 *
 * @param field - SVG field primitives to populate.
 * @param map - Edge and per-axis corner images generated for the selected material geometry.
 */
export function setFieldImages(field: RefractionField, map: { slice: Tiles & { img: Record<Edge, string> }; prod: Record<Axis, Record<Corner, string>> }) {
  for (const slot of EDGES) setAttr(field.edges[slot], 'href', map.slice.img[slot]);

  for (const axis of ['x', 'y'] as const) for (const c of CORNERS) setAttr(field.corners[`${axis}${c}`], 'href', map.prod[axis][c]);
}

/**
 * Position displacement-field edge and corner tiles within the current surface bounds.
 *
 * @param field - SVG field primitives to lay out.
 * @param tiles - Reference corner radius and edge reach of the cached tile set.
 * @param w - Target surface width in CSS pixels.
 * @param h - Target surface height in CSS pixels.
 * @param ox - Horizontal offset of the field in CSS pixels. Defaults to `0`.
 * @param oy - Vertical offset of the field in CSS pixels. Defaults to `0`.
 * @param independentAxes - Fit optical depth independently on each axis; defaults to false for physical corner geometry.
 */
export function layField(field: RefractionField, tiles: Tiles, w: number, h: number, ox = 0, oy = 0, independentAxes = false) {
  for (const slot of EDGES) setRect(field.edges[slot], sliceRect(slot, w, h, tiles.r, tiles.reach, ox, oy, independentAxes));

  for (const c of CORNERS) {
    const rect = sliceRect(c, w, h, tiles.r, tiles.reach, ox, oy, independentAxes);

    setRect(field.corners[`x${c}`], rect);
    setRect(field.corners[`y${c}`], rect);
  }
}
