import { Directive, TemplateRef, inject } from '@angular/core';
import { ModalCore } from '../components/modal-core';
import { GenericModalWarnings } from '../enums/generic-modal-warnings.enum';

@Directive({
  selector: '[modalHeader]', 
  standalone: true
})
export class ModalHeaderDirective {
  private templateRef = inject(TemplateRef);
  private modal = inject(ModalCore, { optional: true });

  constructor() {
    if (this.modal) {
      this.modal.setHeaderTemplate(this.templateRef);
    } else {
      console.warn(GenericModalWarnings.HEADER_DIRECTIVE_OUTSIDE_MODAL);
    }
  }
}