import { Injectable, NgZone, inject } from '@angular/core';
import { GlassLight, GlassScene, mountGlassScene } from '@filip.mazev/blocks/effects/runtime';

export interface BxGlassLight {
  update(light: GlassLight): void;
  destroy(): void;
}

/** Combine local semantic emitters without replacing another field's or toast's light. */
@Injectable({ providedIn: 'root' })
export class BxGlassLightingService {
  private readonly zone = inject(NgZone);
  private readonly groups = new Map<HTMLElement, { scene: GlassScene; lights: Map<symbol, GlassLight> }>();

  public register(root: HTMLElement, light: GlassLight): BxGlassLight {
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
