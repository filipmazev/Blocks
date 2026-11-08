import type { ILighting } from '@effects/runtime/interfaces/ilighting.interface';
import type { ISurfaceHooks } from '@effects/runtime/interfaces/isurface-hooks.interface';
import type { IGlassScene, IGlassSceneOptions } from '@effects/runtime/types/runtime.types';

import { SceneRuntime } from '@effects/runtime/classes/scene-runtime';
import { runtimes } from '@effects/runtime/constants/scene.constants';

export type { ILightContribution } from '@effects/runtime/interfaces/ilight-contribution.interface';
/** @deprecated Use ILightContribution; the historical type name remains available for compatibility. */
export type { ILightContribution as LightContribution } from '@effects/runtime/interfaces/ilight-contribution.interface';

export type { ILighting } from '@effects/runtime/interfaces/ilighting.interface';
/** @deprecated Use ILighting; the historical type name remains available for compatibility. */
export type { ILighting as Lighting } from '@effects/runtime/interfaces/ilighting.interface';

export type { IPointLight } from '@effects/runtime/interfaces/ipoint-light.interface';
/** @deprecated Use IPointLight; the historical type name remains available for compatibility. */
export type { IPointLight as PointLight } from '@effects/runtime/interfaces/ipoint-light.interface';

function runtimeFor(doc: Document): SceneRuntime {
  let runtime = runtimes.get(doc);

  if (!runtime) {
    runtime = new SceneRuntime(doc);
    runtimes.set(doc, runtime);
  }

  return runtime;
}

/**
 * One delegated pointer stream and visibility observer per document, never per control.
 *
 * @param element - Material surface to register with the shared renderer.
 * @param hooks - Controller callbacks used to apply scene updates and dispose the surface.
 */
export function registerSurface(element: HTMLElement, hooks: ISurfaceHooks): () => void {
  return runtimeFor(element.ownerDocument).register(element, hooks);
}

/**
 * Receive scene lighting for a native pseudo-element without inserting decoration into its host.
 *
 * @param element - Receiving element whose border/decorative lighting should track the shared scene.
 * @param light - Callback applying the current resolved lighting contribution.
 * @param hitTarget - Optional interaction/visibility target when the receiver is decorative. Defaults to `element`.
 */
export function observeGlassLighting(element: HTMLElement, light: (value: ILighting) => void, hitTarget: HTMLElement = element): () => void {
  return registerSurface(element, { light, hitTarget, interactive: () => false, press() {}, release() {}, sync() {} });
}

/**
 * Invalidate a receiver after an application changes its geometry.
 *
 * @param element - Element whose surrounding geometry or source colors have changed.
 * @param immediate - Snap environmental colors after urgent resampling for committed semantic changes. Defaults to false, preserving smooth lighting updates.
 */
export function refreshGlassLighting(element: HTMLElement, immediate = false): void {
  runtimeFor(element.ownerDocument).refreshElement(element, immediate);
}

/**
 * Light fields are explicit; surfaces also sample nearby visual sources for ambient edge color.
 *
 * @param root - Container owning a coordinated lighting scene.
 * @param options - Initial light, reflector, and rendering settings for the scene. Defaults to `{}`.
 */
export function mountGlassScene(root: HTMLElement, options: IGlassSceneOptions = {}): IGlassScene {
  return runtimeFor(root.ownerDocument).scene(root, options);
}
