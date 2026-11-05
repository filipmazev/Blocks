import { Directive, inject, TemplateRef } from '@angular/core';

import { ModalCore } from '@modal/components/modal-core';
import { ModalWarnings } from '@modal/enums/modal-warnings.enum';

@Directive({
  selector: '[appModalFooter]',
  standalone: true
})
export class ModalFooterDirective {
  private readonly templateRef = inject(TemplateRef);
  private readonly modal = inject(ModalCore, { optional: true });

  constructor() {
    if (this.modal) {
      this.modal.setFooterTemplate(this.templateRef);
    } else {
      console.warn(ModalWarnings.FOOTER_DIRECTIVE_OUTSIDE_MODAL);
    }
  }
}
