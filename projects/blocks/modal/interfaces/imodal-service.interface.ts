import { ComponentType } from '@angular/cdk/portal';
import { Type } from '@angular/core';

import { ModalRef } from '@modal/classes/modal-ref';

import { IModal } from './imodal.interface';
import { IModalConfig } from './imodal-config.interface';

/**
 * Interface for Modal Service
 */
export interface IModalService {
  /** Function to open a modal with specified component and configuration */
  open<D, R, C extends IModal<D, R> = IModal<D, R>>(component: ComponentType<C>, config?: IModalConfig<D, R>): ModalRef<D, R, C>;
  /** Function to close a specific modal */
  close<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): void;
  /** Function to unregister a specific modal */
  unregister<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): void;
  /** Function to close all open modals */
  closeAll(): void;
  /** Function to get the count of currently open modals */
  modalsCount(): number;
  /** Function to check if a modal with a specific component type is open */
  find<D, R>(componentType: Type<IModal<D, R>>): boolean;
}
