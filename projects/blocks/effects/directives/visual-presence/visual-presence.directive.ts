import type { InputSignal, OutputEmitterRef } from '@angular/core';

import { afterRenderEffect, DestroyRef, Directive, ElementRef, inject, input, output } from '@angular/core';

import type { IVisualPresence } from '@filip.mazev/blocks/effects/runtime';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { createVisualPresence } from '@filip.mazev/blocks/effects/runtime';

/** Animates a persistent visual layer. Callers retain layout, focus, hit testing, and accessible-name ownership. */
@Directive({ selector: '[bxVisualPresence]', standalone: true })
export class BxVisualPresenceDirective {
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly bxA11yService = inject(BxA11yService);

  /** Visual destination; false fades to zero opacity while preserving layout and accessible text. Required input. */
  public readonly bxVisualPresence: InputSignal<boolean> = input.required<boolean>();
  /** Animate a newly created visible layer from hidden. Defaults to false; existing layers always retarget continuously. */
  public readonly bxVisualPresenceEnter: InputSignal<boolean> = input(false);
  /** Enable decorative transitions; defaults to true. Live reduced-motion preferences always take precedence. */
  public readonly bxVisualPresenceAnimated: InputSignal<boolean> = input(true);
  /** Initial scale at zero opacity, clamped to 0–1; defaults to 0.9. Set 1 for undistorted text before creating the layer. */
  public readonly bxVisualPresenceScale: InputSignal<number> = input(0.9);

  /** Emitted after a hidden destination settles, including immediate reduced-motion updates; carries no payload. */
  public readonly presenceHidden: OutputEmitterRef<void> = output();

  private presence: IVisualPresence | undefined;

  constructor() {
    afterRenderEffect(() => {
      const visible = this.bxVisualPresence();
      const reduced = this.bxA11yService.isReducedMotion() || !this.bxVisualPresenceAnimated();
      const initial = !this.presence;

      this.presence ??= createVisualPresence(this.elementRef.nativeElement, {
        initiallyVisible: visible && !this.bxVisualPresenceEnter(),
        hiddenScale: this.bxVisualPresenceScale(),
        onHidden: () => this.presenceHidden.emit()
      });
      this.presence.update(visible, reduced || (initial && !this.bxVisualPresenceEnter()));
    });
    inject(DestroyRef).onDestroy(() => this.presence?.destroy());
  }
}
