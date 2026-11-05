import type { ILightProjection } from '@effects/runtime/interfaces/ilight-projection.interface';

import type { IPointLight } from './scene.helpers';

/**
 * Share the exact influence calculation between the source budget and final rendering.
 *
 * @param light - Resolved light position and projection settings.
 * @param bounds - Receiver bounds used to project light onto its edges.
 */
export function projectLight(light: IPointLight, bounds: DOMRect): ILightProjection {
  const cx = bounds.left + bounds.width / 2;
  const cy = bounds.top + bounds.height / 2;
  const lx = light.bounds ? Math.max(light.bounds.left, Math.min(cx, light.bounds.right)) : light.x;
  const ly = light.bounds ? Math.max(light.bounds.top, Math.min(cy, light.bounds.bottom)) : light.y;
  const distance = Math.hypot(lx - cx, ly - cy, light.z);
  const edgeDistance = Math.hypot(Math.max(bounds.left - lx, 0, lx - bounds.right), Math.max(bounds.top - ly, 0, ly - bounds.bottom), light.z);

  return {
    x: lx,
    y: ly,
    weight: light.intensity * Math.pow(Math.max(0, 1 - distance / light.radius), 2) * (light.z / distance),
    edgeWeight: Math.min(0.85, light.intensity * Math.pow(Math.max(0, 1 - edgeDistance / light.radius), 2))
  };
}
