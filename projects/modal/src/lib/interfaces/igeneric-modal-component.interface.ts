import { ComponentRef, OnDestroy, OnInit } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { GenericModal } from "../classes/generic-modal";
import { GenericModalConfig } from "../classes/generic-modal-config";
import { ModalCloseMode } from "../types/modal.types";

/**
 * Interface for the Generic Modal Component
 * @param {ComponentRef<any>} componentRef (optional) The component reference (the component that is being displayed in the modal), will default to undefined (for non-dynamic modals)
 * @param {GenericModalConfig} config (optional) The configuration for the modal, will default to default values for the configuration
 * @param {boolean} isOpen (required) Whether the modal is open or not
 * @param {number} animationDuration (required) The duration of the animation (in milliseconds)
 * @param {boolean} isSwipeableModalActive (required) Whether the swipeable modal is active (open) or not
 * @param {Subject<MouseEvent>} backdropClickSubject (required) The subject for the backdrop click event, will be used to listen for backdrop clicks
 * @param {Observable<MouseEvent>} backdropClick (required) The observable for the backdrop click event, will be used to listen for backdrop clicks (subscribed to the backdropClickSubject)
 * @param {Function} closeFunction (optional) The outside function to run when the modal closes (received from the config)
 * @param {Function} close (required) The function to run when the modal closes, will return the result of the modal
 */
export interface IGenericModalComponenet<
    D = any,
    R = any,
    C extends GenericModal<D, R> = GenericModal<D, R>> extends OnInit, OnDestroy {
    componentRef?: ComponentRef<C>;
    config?: GenericModalConfig<D>;

    isOpen: boolean;

    animationDuration: number;

    isSwipeableModalActive: boolean;

    backdropClickSubject: Subject<MouseEvent>;
    backdropClick: Observable<MouseEvent>;

    closeFunction?: Function;
    close: (state: ModalCloseMode, result: R | undefined, fromInsideInteraction: boolean, forceClose: boolean) => void;
}
