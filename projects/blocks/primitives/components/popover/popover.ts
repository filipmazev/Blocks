import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';

@Component({
  selector: 'bx-popover',
  imports: [BxSurfaceDirective],
  template:
    '<div class="bx-popover-surface" bxSurface [bxSurfaceInteractive]="false" [bxReducedTransparency]="opaque()"><div class="bx-popover-content"><ng-content /></div></div>',
  styleUrl: './popover.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Popover {
  /** Optional opaque presentation; absent follows the application appearance. */
  public readonly opaque = input<boolean | undefined>(undefined);
}
