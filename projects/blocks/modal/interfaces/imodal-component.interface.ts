import { ComponentRef, OnDestroy, OnInit, Signal } from '@angular/core';

import { Observable } from 'rxjs';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalCloseMode } from '@modal/types/modal.types';

import { IModal } from './imodal.interface';

/**
 * Interface for the Modal Component
 * @typeParam D The type of data passed to the modal
 * @typeParam R The type of result returned from the modal
 * @typeParam C The type of the modal component, will default to IModal<D, R>
 */
export interface IModalComponent<D, R, C extends IModal<D, R> = IModal<D, R>> extends OnInit, OnDestroy {
  /** (optional) The component reference (the component that is being displayed in the modal), will default to undefined (for non-dynamic modals) */
  componentRef?: ComponentRef<C>;
  /** (optional) The configuration for the modal, will default to default values for the configuration */
  readonly config: Signal<ModalConfig<D, R>>;

  /** (required) Whether the modal is open or not */
  isOpen: Signal<boolean>;

  /** (required) The observable for the backdrop click event, will be used to listen for backdrop clicks (subscribed to the backdropClickSubject) */
  backdropClick: Observable<MouseEvent>;

  /** (required) The function to run when the modal closes, will return the result of the modal */
  close: (state: ModalCloseMode, result: R | undefined, fromInsideInteraction: boolean, forceClose: boolean) => void;
}
