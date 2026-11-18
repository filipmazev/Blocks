import { Directive, ElementRef, inject } from '@angular/core';

/** Marks noninteractive custom content in a component's leading or trailing icon position. Preserve the visible text label and hide decorative artwork from assistive technology. */
@Directive({
  selector: '[bxIconStart], [bxIconEnd]',
  host: { style: 'display: inline-flex; align-items: center; flex: none;' }
})
export class IconContentDirective {
  /** Projected host used by loading controls to measure and replace the custom visual without changing layout. */
  public readonly elementRef = inject<ElementRef<HTMLElement | SVGElement>>(ElementRef);
}
