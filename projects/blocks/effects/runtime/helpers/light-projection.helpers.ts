import type { ILightProjection } from '@effects/runtime/interfaces/ilight-projection.interface';

import type { IPointLight } from './scene.helpers';

/**
 * Resolves the linear transform a surface applies to its own content, including the individual `rotate` and `scale` properties.
 *
 * @param style - Computed style of the surface.
 * @returns The composed matrix, or `null` when the surface is untransformed or the platform lacks matrix support.
 */
function elementMatrix(style: CSSStyleDeclaration): DOMMatrix | null {
  if (typeof DOMMatrix !== 'function') return null;

  const rotate = style.rotate;
  const scale = style.scale;
  const transform = style.transform;
  const rotated = !!rotate && rotate !== 'none';
  const scaled = !!scale && scale !== 'none';
  const transformed = !!transform && transform !== 'none';

  // Untransformed surfaces are the common case; skip the matrix allocation entirely.
  if (!rotated && !scaled && !transformed) return null;

  const matrix = new DOMMatrix();

  if (rotated) {
    const parts = rotate.trim().split(/\s+/);
    const angle = Number.parseFloat(parts[parts.length - 1] ?? '0');

    if (Number.isFinite(angle)) matrix.rotateSelf(angle);
  }

  if (scaled) {
    const parts = scale
      .trim()
      .split(/\s+/)
      .map((value) => Number.parseFloat(value));

    matrix.scaleSelf(parts[0] || 1, parts[1] || parts[0] || 1);
  }

  if (transformed) matrix.multiplySelf(new DOMMatrix(transform));

  return matrix.isIdentity ? null : matrix;
}

/**
 * Projects a light onto a receiver in the receiver's own coordinate space.
 *
 * Tilted surfaces paint gradients in their rotated space and their visible edges are not the axis-aligned bounds, so both the highlight position and the
 * distance to the nearest real edge are measured after undoing the surface transform. Occlusion is still tested at the mapped viewport edge point.
 *
 * @param element - Surface receiving the light.
 * @param bounds - Axis-aligned bounds of the surface in viewport pixels.
 * @param light - Resolved light position and projection settings.
 * @param style - Batch-scoped computed-style reader, reused so tilted surfaces do not re-resolve styles per light.
 * @returns Source coordinates, closest receiving edge, interior/edge weights and local percentages.
 */
export function projectLight(element: HTMLElement, bounds: DOMRect, light: IPointLight, style: (element: Element) => CSSStyleDeclaration): ILightProjection {
  const view = element.ownerDocument.defaultView;
  const computed = view ? style(element) : null;
  // Read the used size from the batch style cache; offsetWidth/offsetHeight would force a layout flush per light during scroll.
  const width = computed ? Number.parseFloat(computed.width) || 0 : 0;
  const height = computed ? Number.parseFloat(computed.height) || 0 : 0;
  const cx = bounds.left + bounds.width / 2;
  const cy = bounds.top + bounds.height / 2;
  const px = light.bounds ? Math.max(light.bounds.left, Math.min(cx, light.bounds.right)) : light.x;
  const py = light.bounds ? Math.max(light.bounds.top, Math.min(cy, light.bounds.bottom)) : light.y;
  const align = (value: number) => Math.max(0, Math.min(100, value));
  const matrix = view && width && height ? elementMatrix(style(element)) : null;

  if (!matrix) {
    let edgeX = Math.max(bounds.left, Math.min(px, bounds.right));
    let edgeY = Math.max(bounds.top, Math.min(py, bounds.bottom));

    if (px >= bounds.left && px <= bounds.right && py >= bounds.top && py <= bounds.bottom) {
      const distances = [px - bounds.left, bounds.right - px, py - bounds.top, bounds.bottom - py];
      const closest = distances.indexOf(Math.min(...distances));

      if (closest === 0) edgeX = bounds.left;
      else if (closest === 1) edgeX = bounds.right;
      else if (closest === 2) edgeY = bounds.top;
      else edgeY = bounds.bottom;
    }

    const distance = Math.hypot(px - cx, py - cy, light.z);
    const edgeDistance = Math.hypot(edgeX - px, edgeY - py, light.z);

    return {
      x: px,
      y: py,
      edgeX,
      edgeY,
      weight: light.intensity * Math.pow(Math.max(0, 1 - distance / light.radius), 2) * (light.z / Math.max(1, distance)),
      edgeWeight: Math.min(0.85, light.intensity * Math.pow(Math.max(0, 1 - edgeDistance / light.radius), 2)),
      localX: align(((px - bounds.left) / Math.max(1, bounds.width)) * 100),
      localY: align(((py - bounds.top) / Math.max(1, bounds.height)) * 100)
    };
  }

  const inverse = matrix.inverse();
  const dx = px - cx;
  const dy = py - cy;
  const localX = width / 2 + inverse.a * dx + inverse.c * dy;
  const localY = height / 2 + inverse.b * dx + inverse.d * dy;

  let edgeLocalX = Math.max(0, Math.min(width, localX));
  let edgeLocalY = Math.max(0, Math.min(height, localY));

  if (localX >= 0 && localX <= width && localY >= 0 && localY <= height) {
    const distances = [localX, width - localX, localY, height - localY];
    const closest = distances.indexOf(Math.min(...distances));

    if (closest === 0) edgeLocalX = 0;
    else if (closest === 1) edgeLocalX = width;
    else if (closest === 2) edgeLocalY = 0;
    else edgeLocalY = height;
  }

  const distance = Math.hypot(localX - width / 2, localY - height / 2, light.z);
  const edgeDistance = Math.hypot(edgeLocalX - localX, edgeLocalY - localY, light.z);
  const offsetX = edgeLocalX - width / 2;
  const offsetY = edgeLocalY - height / 2;

  return {
    x: px,
    y: py,
    edgeX: cx + matrix.a * offsetX + matrix.c * offsetY,
    edgeY: cy + matrix.b * offsetX + matrix.d * offsetY,
    weight: light.intensity * Math.pow(Math.max(0, 1 - distance / light.radius), 2) * (light.z / Math.max(1, distance)),
    edgeWeight: Math.min(0.85, light.intensity * Math.pow(Math.max(0, 1 - edgeDistance / light.radius), 2)),
    localX: align((localX / width) * 100),
    localY: align((localY / height) * 100)
  };
}
