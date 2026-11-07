import { Directive, inject, TemplateRef } from '@angular/core';

/** Defers step content creation to the owning stepper's contentPolicy. */
@Directive({ selector: 'ng-template[bxStepContent]' })
export class StepContentDirective {
  /** Captured template; instantiated only by a wizard. */
  public readonly templateRef = inject<TemplateRef<unknown>>(TemplateRef);
}
