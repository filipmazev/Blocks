import { Component, signal } from '@angular/core';
import { Modal } from '@modal/classes/modal';
import { ModalHeaderDirective } from '@modal/directives/modal-header.directive';
import { ModalFooterDirective } from '@modal/directives/modal-footer.directive';
import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-demo-modal',
  imports: [ModalHeaderDirective, ModalFooterDirective, NgClass],
  templateUrl: './demo-modal.html',
  styleUrl: './demo-modal.scss'
})
export class DemoModal extends Modal<IDemoModalData, IDemoModalResult> {
  protected isSideModal = signal(false);
  protected isCenteredModal = signal(false);

  public override onModalInit(): void {
    const layout = this.modal?.modalConfig?.style.layout;
    this.isSideModal.set(layout === 'right' || layout === 'left');
    this.isCenteredModal.set(layout === 'center');
  }

  protected confirm(): void {
    this.modal?.close('confirm', {
      openedCount: this.data.openedCount + 1
    });
  }
}
