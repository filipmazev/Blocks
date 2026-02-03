import { Component, inject } from '@angular/core';
import { Modal } from '../../../../../../../modal/src/lib/classes/modal';
import { MODAL_DATA } from '../../../../../../../modal/src/lib/tokens/modal-data.token';
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
export class CenteredModal extends Modal<string, undefined>  {
  protected data = inject<string>(MODAL_DATA);

  constructor() {
    super();
  }
  
  override afterModalGet(): void {
  }

  override onDestroy(): void {
  }
}