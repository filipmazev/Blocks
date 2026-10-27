import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { BxA11yService } from '@filip.mazev/blocks/core';

@Component({
  selector: 'bx-menu',
  imports: [BxSurfaceDirective],
  templateUrl: './menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './menu.scss'
})
export class Menu {
  private readonly a11y = inject(BxA11yService);

  public readonly isAnimated = computed(() => {
    return !this.a11y.isReducedMotion();
  });
}
