import { Component } from '@angular/core';
import { Modal } from '../../../../../../../modal/src/lib/classes/modal';
import { ModalHeaderDirective } from '../../../../../../../modal/src/lib/directives/modal-header.directive';
import { ModalFooterDirective } from '../../../../../../../modal/src/public-api';

@Component({
  selector: 'app-demo-modal',
  imports: [
    ModalHeaderDirective,
    ModalFooterDirective
  ],
  templateUrl: './demo-modal.html',
  styleUrl: './demo-modal.scss',
})
export class DemoModal extends Modal<string, undefined>  {
}