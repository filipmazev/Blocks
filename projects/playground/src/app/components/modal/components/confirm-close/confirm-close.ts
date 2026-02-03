import { Component, inject } from '@angular/core';
import { Modal } from '../../../../../../../modal/src/lib/classes/modal';
import { MODAL_DATA } from '../../../../../../../modal/src/public-api';

@Component({
  selector: 'app-confirm-close',
  imports: [],
  templateUrl: './confirm-close.html',
  styleUrl: './confirm-close.scss',
})
export class ConfirmClose extends Modal<string, undefined> {
  protected data = inject<string>(MODAL_DATA);
  
  constructor() {
    super();
  }

  override afterModalGet(): void {
  }

  override onDestroy(): void {
  }

  protected confirm(): void {
    this.modal?.close('confirm');
  }
}
