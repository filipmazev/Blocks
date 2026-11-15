import type { Signal, WritableSignal } from '@angular/core';

import { afterNextRender, afterRenderEffect, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';

import type { IGlassScene } from '@filip.mazev/blocks/effects/runtime';

import { ThemingService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { mountGlassScene } from '@filip.mazev/blocks/effects/runtime';
import { Icon } from '@filip.mazev/blocks/icons';

/** A real glass receiver over large text, with a local environmental light using the shared renderer. */
@Component({
  selector: 'app-surface-preview',
  imports: [BxSurfaceDirective, Icon],
  templateUrl: './surface-preview.html',
  styleUrl: './surface-preview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurfacePreview {
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private readonly themingService = inject(ThemingService);

  private readonly source: Signal<ElementRef<HTMLElement>> = viewChild.required('source');

  protected readonly lightingTarget: WritableSignal<HTMLElement | undefined> = signal(undefined);

  private scene: IGlassScene | undefined;

  constructor() {
    afterRenderEffect(() => {
      this.themingService.activeTheme();
      this.themingService.palette();
      this.themingService.appearance();
      this.scene?.refresh();
    });

    afterNextRender(() => {
      const lightingTarget = this.nativeElement.closest<HTMLElement>('article') ?? this.nativeElement;

      this.lightingTarget.set(lightingTarget);

      const scene = mountGlassScene(this.nativeElement);

      this.scene = scene;

      const updateLight = (): void => {
        const source = this.source().nativeElement.getBoundingClientRect();
        const target = lightingTarget.getBoundingClientRect();

        scene.update({
          lights: [
            {
              element: lightingTarget,
              offsetX: target.width ? (source.left + source.width / 2 - target.left) / target.width : 0.8,
              offsetY: target.height ? (source.top + source.height / 2 - target.top) / target.height : 0.2,
              color: 'var(--bx-accent)',
              intensity: 1.4,
              radius: 320,
              z: 100
            }
          ]
        });
      };

      const observer = new ResizeObserver(updateLight);

      observer.observe(this.nativeElement);
      updateLight();
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        scene.destroy();
      });
    });
  }
}
