import { Observable } from "rxjs";
import { ComponentRef, Type } from "@angular/core";
import { GenericModal } from "../classes/generic-modal";
import { GenericModalConfig } from "../classes/generic-modal-config";
import { GenericModalComponent } from "../components/generic-modal";
import { GenericModalState } from "../enums/generic-modal-state.enum";
import { IGenericCloseResult } from "./igeneric-close-result.interface";

export interface IGenericModalRef<
    D = any,
    R = any,
    C extends GenericModal<D, R> = GenericModal<D, R>> {
    modalContainer: Type<GenericModalComponent<D, R, C>>;
    modalContainerRef: ComponentRef<GenericModalComponent<D, R, C>>;
    modalContainerElement: HTMLElement;
    parentElement?: HTMLElement;

    componentRef: ComponentRef<C>;

    modalState$(): Observable<GenericModalState>;

    selfIdentifier: { constructor: Function };
    modalConfig?: GenericModalConfig<D>;

    afterClosed(): Observable<IGenericCloseResult<R>>;
    backdropClick(): Observable<MouseEvent>;

    open(): void;
    close: (state: "confirm" | "cancel", result: R | undefined, forceClose: boolean, fromSelf: boolean, from: { constructor: Function } | undefined) => void;
}
