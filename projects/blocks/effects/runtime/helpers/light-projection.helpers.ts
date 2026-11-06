import type { ILightProjection } from '@effects/runtime/interfaces/ilight-projection.interface';

import type { IPointLight } from './scene.helpers';

/**
 * Share source falloff and the nearest receiving perimeter between the source budget and final rendering.
 *
 * @param light - Resolved light position and projection settings.
 * @param bounds - Receiver bounds used to project light onto its edges.
 * @returns Source coordinates, closest receiving edge and separate interior/edge influence weights.
 */
export function projectLight(light: IPointLight, bounds: DOMRect): ILightProjection {
  const cx = bounds.left + bounds.width / 2;
  const cy = bounds.top + bounds.height / 2;
  const lx = light.bounds ? Math.max(light.bounds.left, Math.min(cx, light.bounds.right)) : light.x;
  const ly = light.bounds ? Math.max(light.bounds.top, Math.min(cy, light.bounds.bottom)) : light.y;
  const distance = Math.hypot(lx - cx, ly - cy, light.z);

  let edgeX = Math.max(bounds.left, Math.min(lx, bounds.right));
  let edgeY = Math.max(bounds.top, Math.min(ly, bounds.bottom));

  if (lx >= bounds.left && lx <= bounds.right && ly >= bounds.top && ly <= bounds.bottom) {
    const distances = [lx - bounds.left, bounds.right - lx, ly - bounds.top, bounds.bottom - ly];
    const closest = distances.indexOf(Math.min(...distances));

    if (closest === 0) edgeX = bounds.left;
    else if (closest === 1) edgeX = bounds.right;
    else if (closest === 2) edgeY = bounds.top;
    else edgeY = bounds.bottom;
  }

  const edgeDistance = Math.hypot(edgeX - lx, edgeY - ly, light.z);

  return {
    x: lx,
    y: ly,
    edgeX,
    edgeY,
    weight: light.intensity * Math.pow(Math.max(0, 1 - distance / light.radius), 2) * (light.z / distance),
    edgeWeight: Math.min(0.85, light.intensity * Math.pow(Math.max(0, 1 - edgeDistance / light.radius), 2))
  };
}
