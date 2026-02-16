import { Directive, TemplateRef, inject } from '@angular/core';
import { ModalCore } from '../components/modal-core';
import { ModalWarnings } from '../enums/modal-warnings.enum';

@Directive({
  selector: '[appModalHeader]',
  standalone: true
})
export class ModalHeaderDirective {
  private readonly templateRef = inject(TemplateRef);
  private readonly modal = inject(ModalCore, { optional: true });

  constructor() {
    if (this.modal) {
      this.modal.setHeaderTemplate(this.templateRef);
    } else {
      console.warn(ModalWarnings.HEADER_DIRECTIVE_OUTSIDE_MODAL);
    }
  }
}
