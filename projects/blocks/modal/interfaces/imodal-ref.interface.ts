import { ComponentRef, Signal } from '@angular/core';

import { Observable } from 'rxjs';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalCore } from '@modal/components/modal-core/modal-core';
import { ModalState } from '@modal/enums/modal-state.enum';

import { IModal } from './imodal.interface';
import { IModalCloseResult } from './imodal-close-result.interface';
import { IModalPatch } from './imodal-patch.interface';

/**
 * Interface for the Modal Reference
 * @typeParam D The type of data passed to the modal
 * @typeParam R The type of result returned from the modal
 * @typeParam C The type of the modal component, will default to IModal<D, R>
 */
export interface IModalRef<D, R, C extends IModal<D, R> = IModal<D, R>> {
  /** Mounted presentation host; undefined after destruction. */
  readonly modalContainerRef: ComponentRef<ModalCore<D, R, C>> | undefined;
  /** Mounted overlay element; undefined after destruction. */
  readonly modalContainerElement: HTMLElement | undefined;
  /** Mounted application content; undefined after destruction. */
  readonly componentRef: ComponentRef<C> | undefined;

  /** Observable that emits the current state of the modal */
  modalState$(): Observable<ModalState>;

  /** Authoritative reactive configuration; read config() and use patch() for supported changes. */
  readonly config: Signal<ModalConfig<D, R>>;

  /** Observable that emits when the modal has been closed */
  afterClosed(): Observable<IModalCloseResult<R | undefined>>;
  /** Observable that emits when the backdrop is clicked */
  backdropClick(): Observable<MouseEvent>;

  /** Function to open the modal */
  open(): void;
  /**
   * Merge supported runtime configuration without recreating the modal.
   * @param patch - Partial updates; undefined retains values and supported null clears them.
   */
  patch(patch: IModalPatch): void;
  /**
   * Request guarded closure.
   * @param state - Confirm or cancel mode; defaults to cancel.
   * @param result - Optional application result.
   * @param forceClose - Bypass guards when true; defaults to false.
   */
  close(state?: 'confirm' | 'cancel', result?: R, forceClose?: boolean): void;
}
