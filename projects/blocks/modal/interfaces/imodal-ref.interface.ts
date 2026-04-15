import { Observable } from 'rxjs';
import { ComponentRef, Type } from '@angular/core';
import { ModalConfig } from '../classes/modal-config';
import { ModalCore } from '../components/modal-core';
import { ModalState } from '../enums/modal-state.enum';
import { IModalCloseResult } from './imodal-close-result.interface';
import { IModal } from './imodal.interface';

/**
 * Interface for the Modal Reference
 * @param D The type of data passed to the modal
 * @param R The type of result returned from the modal
 * @param C The type of the modal component, will default to IModal<D, R>
 * @param {Type<ModalCore<D, R, C>>} modalContainer The type of the modal container component
 * @param {ComponentRef<ModalCore<D, R, C>>} modalContainerRef The component reference of the modal container
 * @param {HTMLElement} modalContainerElement The HTML element of the modal container
 * @param {HTMLElement | undefined} parentElement (optional) The parent HTML element where the modal is attached
 * @param {ComponentRef<C>} componentRef The component reference of the modal content
 * @param {Observable<ModalState>} modalState$ Observable that emits the current state of the modal
 * @param {ModalConfig<D> | undefined} modalConfig (optional) The configuration of the modal
 * @param {Observable<IModalCloseResult<R | undefined>>} afterClosed Observable that emits when the modal has been closed
 * @param {Observable<MouseEvent>} backdropClick Observable that emits when the backdrop is clicked
 * @param {Function} open Function to open the modal
 * @param {Function} close Function to close the modal with specified parameters
 */
export interface IModalRef<D, R, C extends IModal<D, R> = IModal<D, R>> {
  modalContainer: Type<ModalCore<D, R, C>>;
  modalContainerRef: ComponentRef<ModalCore<D, R, C>>;
  modalContainerElement: HTMLElement;
  parentElement?: HTMLElement;

  componentRef: ComponentRef<C>;

  modalState$(): Observable<ModalState>;

  modalConfig?: ModalConfig<D, R>;

  afterClosed(): Observable<IModalCloseResult<R | undefined>>;
  backdropClick(): Observable<MouseEvent>;

  open(): void;
  close: (state: 'confirm' | 'cancel', result: R | undefined, forceClose: boolean, fromSelf: boolean, from: { constructor: Type<unknown> } | undefined) => void;
}
