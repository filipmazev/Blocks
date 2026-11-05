import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { BxA11yService } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-menu',
  templateUrl: './menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './menu.scss'
})
export class Menu {
  private readonly bxA11yService = inject(BxA11yService);

  /** Whether decorative motion is enabled after applying shared reduced-motion preferences. */
  public readonly isAnimated: Signal<boolean> = computed(() => {
    return !this.bxA11yService.isReducedMotion();
  });
}
