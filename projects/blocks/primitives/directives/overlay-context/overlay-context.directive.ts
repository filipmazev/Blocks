import type { InputSignal } from '@angular/core';

import { Directive, forwardRef, input } from '@angular/core';

import { IBxOverlayContext } from '@primitives/interfaces/ibx-overlay-context.interface';
import { BX_OVERLAY_CONTEXT } from '@primitives/tokens/overlay-context.token';

@Directive({
  selector: '[bxOverlayContext]',
  standalone: true,
  providers: [{ provide: BX_OVERLAY_CONTEXT, useExisting: forwardRef(() => BxOverlayContextDirective) }]
})
export class BxOverlayContextDirective implements IBxOverlayContext {
  /** Context selecting the overlay host/top-layer policy inherited by nested overlays. Defaults to an empty configuration. */
  public readonly bxOverlayContext: InputSignal<IBxOverlayContext> = input<IBxOverlayContext>({});

  /** Expose whether this context explicitly selects top-layer hosting; undefined leaves the shared default in effect. */
  public get useTopLayer(): boolean | undefined {
    return this.bxOverlayContext().useTopLayer;
  }
}
