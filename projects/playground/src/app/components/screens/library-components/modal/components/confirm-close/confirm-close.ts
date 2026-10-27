import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Button } from '@forms/components/button/button';
import { Modal } from '@modal/classes/modal';
import { ModalFooterDirective } from '@modal/directives/modal-footer.directive';

@Component({
  selector: 'app-confirm-close',
  imports: [ModalFooterDirective, Button],
  templateUrl: './confirm-close.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './confirm-close.scss'
})
export class ConfirmClose extends Modal<string, undefined> {
  protected confirm(): void {
    this.modal?.close('confirm');
  }
}
