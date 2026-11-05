import { inject, Injectable, NgZone } from '@angular/core';

import type { IBxGlassLight } from '@effects/interfaces/ibx-glass-light.interface';

import { GlassLight, GlassScene, mountGlassScene } from '@filip.mazev/blocks/effects/runtime';
export type { IBxGlassLight } from '@effects/interfaces/ibx-glass-light.interface';
/** @deprecated Use IBxGlassLight; the historical type name remains available for compatibility. */
export type { IBxGlassLight as BxGlassLight } from '@effects/interfaces/ibx-glass-light.interface';

/** Combine local semantic emitters without replacing another field's or toast's light. */
@Injectable({ providedIn: 'root' })
export class BxGlassLightingService {
  private readonly zone = inject(NgZone);

  private readonly groups: Map<HTMLElement, { scene: GlassScene; lights: Map<symbol, GlassLight> }> = new Map<
    HTMLElement,
    { scene: GlassScene; lights: Map<symbol, GlassLight> }
  >();

  public register(root: HTMLElement, light: GlassLight): IBxGlassLight {
    let group = this.groups.get(root);

    if (!group) {
      group = { scene: this.zone.runOutsideAngular(() => mountGlassScene(root)), lights: new Map() };
      this.groups.set(root, group);
    }

    const current = group;
    const id = Symbol();

    let disposed = false;

    const sync = () => this.zone.runOutsideAngular(() => current.scene.update({ lights: [...current.lights.values()] }));

    current.lights.set(id, light);
    sync();

    return {
      update: (next) => {
        if (!disposed) {
          current.lights.set(id, next);
          sync();
        }
      },
      destroy: () => {
        if (disposed) return;

        disposed = true;
        current.lights.delete(id);

        if (current.lights.size) sync();
        else {
          this.zone.runOutsideAngular(() => current.scene.destroy());
          this.groups.delete(root);
        }
      }
    };
  }
}
