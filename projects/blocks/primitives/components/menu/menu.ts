import type { Signal } from '@angular/core';

import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, effect, ElementRef, inject } from '@angular/core';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { ISelectionMotion, mountSelectionMotion } from '@filip.mazev/blocks/effects/runtime';

@Component({
  selector: 'bx-menu',
  imports: [BxSurfaceDirective],
  templateUrl: './menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './menu.scss'
})
export class Menu {
  private readonly bxA11yService = inject(BxA11yService);
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. */
  public readonly isAnimated: Signal<boolean> = computed(() => {
    return !this.bxA11yService.isReducedMotion();
  });

  private selectionMotion: ISelectionMotion | undefined;

  constructor() {
    afterNextRender(() => {
      const list = this.nativeElement.querySelector<HTMLElement>('[role="menu"]');

      if (list) this.selectionMotion = mountSelectionMotion(list, { reducedMotion: this.bxA11yService.isReducedMotion() });
    });
    effect(() => {
      const reducedMotion = this.bxA11yService.isReducedMotion();

      this.selectionMotion?.update({ reducedMotion });
    });
    inject(DestroyRef).onDestroy(() => this.selectionMotion?.destroy());
  }
}
