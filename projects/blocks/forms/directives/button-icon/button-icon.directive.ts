import { Directive, ElementRef, inject } from '@angular/core';

/** Marks a custom projected action icon for replacement while the button is loading. */
@Directive({ selector: '[bxButtonIcon]' })
export class ButtonIconDirective {
  /** Native host reference exposed for coordinated button-icon replacement during loading. */
  public readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
}
