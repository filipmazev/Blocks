import { Directive, inject, TemplateRef } from '@angular/core';

import type { IStepperLabelContext } from '@navigation/interfaces/istepper-label-context.interface';

/** Custom visual label inside a bx-step; supply plain label text for assistive technology. */
@Directive({ selector: 'ng-template[bxStepLabel]' })
export class StepLabelDirective {
  /** Typed label template captured for its owner. */
  public readonly templateRef = inject<TemplateRef<IStepperLabelContext>>(TemplateRef);

  /**
   * Narrows Angular template variables to the public label context.
   * @param directive - Directive owning the template.
   * @param context - Template context checked by Angular.
   */
  public static ngTemplateContextGuard(directive: StepLabelDirective, context: unknown): context is IStepperLabelContext {
    return !!directive && !!context;
  }
}
