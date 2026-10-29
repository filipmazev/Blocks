import { Directive, inject, TemplateRef } from '@angular/core';

/** Instantiate panel content only while its tab is selected. */
@Directive({ selector: 'ng-template[bxTabContent]', standalone: true })
export class TabContentDirective {
  public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}
