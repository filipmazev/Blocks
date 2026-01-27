import { Component, inject } from '@angular/core';
import { GenericModal } from '../../../../../../../modal/src/lib/classes/generic-modal';
import { GENERIC_MODAL_DATA } from '../../../../../../../modal/src/lib/tokens/generic-modal-data.token';
import { ModalHeaderDirective } from '../../../../../../../modal/src/lib/directives/modal-header.directive';
import { ModalFooterDirective } from '../../../../../../../modal/src/public-api';

@Component({
  selector: 'app-centered-modal',
  imports: [
    ModalHeaderDirective,
    ModalFooterDirective
  ],
  templateUrl: './centered-modal.html',
  styleUrl: './centered-modal.scss',
})
export class CenteredModal extends GenericModal<string, undefined>  {
  protected data = inject<string>(GENERIC_MODAL_DATA);

  constructor() {
    super();
  }
  
  override afterModalGet(): void {
  }

  override onDestroy(): void {
  }
}