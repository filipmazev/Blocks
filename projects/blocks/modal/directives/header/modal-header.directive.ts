import { Directive, inject, TemplateRef } from '@angular/core';

import { ModalCore } from '@modal/components/modal-core/modal-core';
import { ModalWarnings } from '@modal/enums/modal-warnings.enum';

@Directive({
  selector: '[appModalHeader]',
  standalone: true
})
export class ModalHeaderDirective {
  private readonly templateRef = inject(TemplateRef);
  private readonly modalCore = inject(ModalCore, { optional: true });

  constructor() {
    if (this.modalCore) {
      this.modalCore.setHeaderTemplate(this.templateRef);
    } else {
      console.warn(ModalWarnings.HEADER_DIRECTIVE_OUTSIDE_MODAL);
    }
  }
}
