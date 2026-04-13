import { Component } from '@angular/core';
import { Modal } from '@modal/classes/modal';
import { ModalFooterDirective } from '@modal/directives/modal-footer.directive';

@Component({
  selector: 'app-confirm-close',
  imports: [ModalFooterDirective],
  templateUrl: './confirm-close.html',
  styleUrl: './confirm-close.scss'
})
export class ConfirmClose extends Modal<string, undefined> {
  protected confirm(): void {
    this.modal?.close('confirm');
  }
}
