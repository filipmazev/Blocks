import { ComponentRef, OnDestroy, OnInit, Signal } from "@angular/core";
import { Observable } from "rxjs";
import { ModalConfig } from "../classes/modal-config";
import { ModalCloseMode } from "../types/modal.types";
import { IModal } from "./imodal";

/**
 * Interface for the Modal Component
 * @param D The type of data passed to the modal
 * @param R The type of result returned from the modal
 * @param C The type of the modal component, will default to IModal<D, R>
 * @param {ComponentRef<any>} componentRef (optional) The component reference (the component that is being displayed in the modal), will default to undefined (for non-dynamic modals)
 * @param {ModalConfig} config (optional) The configuration for the modal, will default to default values for the configuration
 * @param {boolean} isOpen (required) Whether the modal is open or not
 * @param {Observable<MouseEvent>} backdropClick (required) The observable for the backdrop click event, will be used to listen for backdrop clicks (subscribed to the backdropClickSubject)
 * @param {Function} close (required) The function to run when the modal closes, will return the result of the modal
 */
export interface IModalComponenet<
    D, 
    R, 
    ConfirmModalData,
    C extends IModal<D, R> = IModal<D, R>,     
    ConfirmModal extends IModal<ConfirmModalData, undefined> = IModal<ConfirmModalData, undefined>> extends OnInit, OnDestroy {
    componentRef?: ComponentRef<C>;
    config?: ModalConfig<D, ConfirmModalData, ConfirmModal>;

    isOpen: Signal<boolean>;

    backdropClick: Observable<MouseEvent>;

    close: (state: ModalCloseMode, result: R | undefined, fromInsideInteraction: boolean, forceClose: boolean) => void;
}