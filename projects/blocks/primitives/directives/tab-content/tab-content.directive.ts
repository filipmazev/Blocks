import { Directive, inject, TemplateRef } from '@angular/core';

/** Instantiate panel content only while its tab is selected. */
@Directive({ selector: 'ng-template[bxTabContent]', standalone: true })
export class TabContentDirective {
  /** Captured projected template made available to its owning component. */
  public readonly templateRef = inject<TemplateRef<unknown>>(TemplateRef);
}
