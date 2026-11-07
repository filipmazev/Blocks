import { inject, Injectable } from '@angular/core';

import { IModal } from '@modal/interfaces/imodal.interface';
import { MODAL_DATA } from '@modal/tokens/modal-data.token';

import { ModalRef } from './modal-ref';

@Injectable()
export class Modal<D, R> implements IModal<D, R> {
  private readonly modalRef = inject<ModalRef<D, R>>(ModalRef);
  private readonly injectedData = inject<D>(MODAL_DATA);

  /** Reference shared with ModalService and the presentation host; available during construction. */
  public readonly modal: ModalRef<D, R> = this.modalRef;

  /** Initialization data injected into the modal content. Patching does not change this payload. */
  public data: D = this.injectedData;

  /** Called when the modal is initialized. */
  public onModalInit(): void {}

  /**
   * Closes the modal (with "cancel" reason) with an optional result.
   *
   * @param result - The result to be passed when closing the modal.
   */
  public close(result?: R): void {
    this.modal?.close('cancel', result);
  }
}
