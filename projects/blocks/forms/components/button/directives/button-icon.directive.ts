import { Directive, ElementRef, inject } from '@angular/core';

/** Marks a custom projected action icon for replacement while the button is loading. */
@Directive({ selector: '[bxButtonIcon]' })
export class ButtonIconDirective {
  public readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
}
