import { inject, Injectable } from '@angular/core';

import { IModal } from '@modal/interfaces/imodal.interface';
import { MODAL_DATA } from '@modal/tokens/modal-data.token';

import { ModalRef } from './modal-ref';

@Injectable()
export class Modal<D, R> implements IModal<D, R> {
  private readonly injectedData = inject<D>(MODAL_DATA);

  /**
   * Data injected into the modal component.
   */
  public data: D = this.injectedData;
  /**
   * Reference to the ModalRef instance associated with this modal.
   */
  public modal!: ModalRef<D, R>;

  /**
   * Called when the modal is initialized.
   */
  public onModalInit(): void {}

  /**
   * Closes the modal (with "cancel" reason) with an optional result.
   * @param result The result to be passed when closing the modal.
   */
  public close(result?: R) {
    this.modal?.close('cancel', result);
  }
}
