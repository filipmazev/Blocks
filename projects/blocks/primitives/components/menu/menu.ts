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
  private readonly a11y = inject(BxA11yService);

  public readonly isAnimated: Signal<boolean> = computed(() => {
    return !this.a11y.isReducedMotion();
  });
}
