import { Type } from "@angular/core";
import { ComponentType } from "@angular/cdk/portal";
import { IModalConfig } from "./imodal-config.interface";
import { ModalRef } from "../classes/modal-ref";
import { IModal } from "./imodal";

/**
 * Interface for Modal Service
 * @param {Function} open Function to open a modal with specified component and configuration
 * @param {Function} close Function to close a specific modal
 * @param {Function} unregister  Function to unregister a specific modal
 * @param {Function} closeAll Function to close all open modals
 * @param {Function} modalsCount Function to get the count of currently open modals
 * @param {Function} find Function to check if a modal with a specific component type is open
 */
export interface IModalService {
    open<D, R, C extends IModal<D, R> = IModal<D, R>>(component: ComponentType<C>, config?: IModalConfig<D>): ModalRef<D, R, C>;
    close<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): void;
    unregister<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): void;
    closeAll(): void;
    modalsCount(): number;
    find<D, R>(componentType: Type<IModal<D, R>>): boolean;
}