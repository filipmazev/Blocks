import { Component, computed, inject } from '@angular/core';
import { BxA11yService } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  private readonly a11y = inject(BxA11yService);

  public readonly isAnimated = computed(() => {
    return !this.a11y.isReducedMotion();
  });
}
