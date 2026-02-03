import { Component } from '@angular/core';
import { Modal } from '../../../../../../../modal/src/lib/classes/modal';
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
}