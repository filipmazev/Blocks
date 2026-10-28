import { Directive, forwardRef, input } from '@angular/core';
import { BX_OVERLAY_CONTEXT, IBxOverlayContext } from './overlay-context.token';

@Directive({
  selector: '[bxOverlayContext]',
  standalone: true,
  providers: [{ provide: BX_OVERLAY_CONTEXT, useExisting: forwardRef(() => BxOverlayContextDirective) }]
})
export class BxOverlayContextDirective implements IBxOverlayContext {
  public readonly bxOverlayContext = input<IBxOverlayContext>({});

  public get useTopLayer(): boolean | undefined {
    return this.bxOverlayContext().useTopLayer;
  }
}
