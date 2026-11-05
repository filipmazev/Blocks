import { ComponentRef, Type } from '@angular/core';

import { Observable } from 'rxjs';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalCore } from '@modal/components/modal-core/modal-core';
import { ModalState } from '@modal/enums/modal-state.enum';

import { IModal } from './imodal.interface';
import { IModalCloseResult } from './imodal-close-result.interface';

/**
 * Interface for the Modal Reference
 * @typeParam D The type of data passed to the modal
 * @typeParam R The type of result returned from the modal
 * @typeParam C The type of the modal component, will default to IModal<D, R>
 */
export interface IModalRef<D, R, C extends IModal<D, R> = IModal<D, R>> {
  /** The type of the modal container component */
  modalContainer: Type<ModalCore<D, R, C>>;
  /** The component reference of the modal container */
  modalContainerRef: ComponentRef<ModalCore<D, R, C>>;
  /** The HTML element of the modal container */
  modalContainerElement: HTMLElement;
  /** (optional) The parent HTML element where the modal is attached */
  parentElement?: HTMLElement;

  /** The component reference of the modal content */
  componentRef: ComponentRef<C>;

  /** Observable that emits the current state of the modal */
  modalState$(): Observable<ModalState>;

  /** (optional) The configuration of the modal */
  modalConfig?: ModalConfig<D, R>;

  /** Observable that emits when the modal has been closed */
  afterClosed(): Observable<IModalCloseResult<R | undefined>>;
  /** Observable that emits when the backdrop is clicked */
  backdropClick(): Observable<MouseEvent>;

  /** Function to open the modal */
  open(): void;
  /** Function to close the modal with specified parameters */
  close: (state: 'confirm' | 'cancel', result: R | undefined, forceClose: boolean, fromSelf: boolean, from: { constructor: Type<unknown> } | undefined) => void;
}
