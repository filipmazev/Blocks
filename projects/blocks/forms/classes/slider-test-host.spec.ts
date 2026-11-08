import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';

import { SliderDirective } from '@forms/directives/slider/slider.directive';

@Component({
  selector: 'app-slider-test-host',
  imports: [SliderDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<input #input bxSlider type="range" min="0" max="100" value="20" aria-label="Precision control" />'
})
export class SliderTestHost {
  /** Native precision control used to verify that decorative motion never owns its value. */
  public readonly input: Signal<ElementRef<HTMLInputElement>> = viewChild.required<ElementRef<HTMLInputElement>>('input');
}
