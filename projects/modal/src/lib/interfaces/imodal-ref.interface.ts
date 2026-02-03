import { Observable } from "rxjs";
import { ComponentRef, Type } from "@angular/core";
import { Modal } from "../classes/modal";
import { ModalConfig } from "../classes/modal-config";
import { ModalCore } from "../components/modal-core";
import { ModalState } from "../enums/modal-state.enum";
import { IModalCloseResult } from "./imodal-close-result.interface";

export interface IModalRef<
    D = any,
    R = any,
    C extends Modal<D, R> = Modal<D, R>> {
    modalContainer: Type<ModalCore<D, R, C>>;
    modalContainerRef: ComponentRef<ModalCore<D, R, C>>;
    modalContainerElement: HTMLElement;
    parentElement?: HTMLElement;

    componentRef: ComponentRef<C>;

    modalState$(): Observable<ModalState>;

    selfIdentifier: { constructor: Function };
    modalConfig?: ModalConfig<D>;

    afterClosed(): Observable<IModalCloseResult<R>>;
    backdropClick(): Observable<MouseEvent>;

    open(): void;
    close: (state: "confirm" | "cancel", result: R | undefined, forceClose: boolean, fromSelf: boolean, from: { constructor: Function } | undefined) => void;
}
