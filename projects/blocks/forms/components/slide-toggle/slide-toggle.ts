import type { Signal } from '@angular/core';

import { afterRenderEffect, ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';

import { BxA11yService } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { createSpringMotion, ISpringMotion, MOTION_PRESETS, paintMotionStyles } from '@filip.mazev/blocks/effects/runtime';

import { BxCheckedControl } from '@forms/classes/bx-checked-control';
import { FormField } from '@forms/components/form-field/form-field';

@Component({
  selector: 'bx-slide-toggle',
  imports: [BxSurfaceDirective, FormField],
  templateUrl: './slide-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './slide-toggle.scss'
})
export class SlideToggle extends BxCheckedControl {
  private readonly bxA11yService = inject(BxA11yService);

  private readonly track: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('track');

  private motion: ISpringMotion | undefined;

  constructor() {
    super();

    afterRenderEffect(() => {
      const track = this.track()?.nativeElement;
      const value = this.displayedChecked() ? 1 : 0;
      const reduced = this.bxA11yService.isReducedMotion();

      if (!track) return;

      const initial = !this.motion;

      this.motion ??= createSpringMotion(
        [value],
        ([position], [velocity]) => {
          paintMotionStyles(track, {
            '--bx-toggle-position': String(position),
            '--bx-toggle-stretch': String(this.bxA11yService.isReducedMotion() ? 0 : Math.min(0.05, Math.abs(velocity) * 0.008))
          });
        },
        MOTION_PRESETS.elastic
      );
      this.motion.retarget([value], initial || reduced);
    });
    this.destroyRef.onDestroy(() => this.motion?.destroy());
  }
}
