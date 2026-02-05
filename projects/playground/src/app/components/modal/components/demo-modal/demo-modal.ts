import { Component } from '@angular/core';
import { Modal } from '../../../../../../../modal/src/lib/classes/modal';
import { ModalHeaderDirective } from '../../../../../../../modal/src/lib/directives/modal-header.directive';
import { ModalFooterDirective } from '../../../../../../../modal/src/public-api';
import { IDemoModalData } from '../../../../shared/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '../../../../shared/interfaces/modals/result/idemo-modal-result.interface';

@Component({
  selector: 'app-demo-modal',
  imports: [
    ModalHeaderDirective,
    ModalFooterDirective
  ],
  templateUrl: './demo-modal.html',
  styleUrl: './demo-modal.scss',
})
export class DemoModal extends Modal<IDemoModalData, IDemoModalResult> {

  protected confirm(): void {
    this.modal?.close('confirm', {
      openedCount: this.data.openedCount + 1
    });
  }
}