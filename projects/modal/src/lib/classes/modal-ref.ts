import { ComponentRef, Type } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ModalConfig } from "./modal-config";
import { ModalCore } from "../components/modal-core";
import { ModalState } from "../enums/modal-state.enum";
import { IModalCloseResult } from "../interfaces/imodal-close-result.interface";
import { IModalRef } from "../interfaces/imodal-ref.interface";
import { ModalService } from "../services/modal.service";
import { ModalCloseMode } from "../types/modal.types";
import { Modal } from "./modal";

export class ModalRef<
    D = unknown,
    R = any,
    C extends Modal<D, R> = Modal<D, R>> implements IModalRef<D, R, C> {

    //#region Modal Container

    private _modalContainer: Type<ModalCore<D, R, C>> = {} as Type<ModalCore<D, R, C>>;

    private set modalContainer(modalContainer: Type<ModalCore<D, R, C>>) {
        this._modalContainer = modalContainer;
    }

    public get modalContainer(): Type<ModalCore<D, R, C>> {
        return this._modalContainer;
    }

    private _modalContainerRef: ComponentRef<ModalCore<D, R, C>> = {} as ComponentRef<ModalCore<D, R, C>>;

    private set modalContainerRef(modalContainerRef: ComponentRef<ModalCore<D, R, C>>) {
        this._modalContainerRef = modalContainerRef;
    }

    public get modalContainerRef(): ComponentRef<ModalCore<D, R, C>> {
        return this._modalContainerRef;
    }

    private _modalContainerElement: HTMLElement = {} as HTMLElement;

    private set modalContainerElement(modalContainerElement: HTMLElement) {
        this._modalContainerElement = modalContainerElement;
    }

    public get modalContainerElement(): HTMLElement {
        return this._modalContainerElement;
    }

    private _parentElement: HTMLElement | undefined = undefined;

    private set parentElement(parentElement: HTMLElement | undefined) {
        this._parentElement = parentElement;
    }

    public get parentElement(): HTMLElement | undefined {
        return this._parentElement;
    }

    //#endregion

    //#region Component

    private _componentRef: ComponentRef<C> = {} as ComponentRef<C>;

    private set componentRef(componentRef: ComponentRef<C>) {
        this._componentRef = componentRef;
    }

    public get componentRef(): ComponentRef<C> {
        return this._componentRef;
    }

    //#endregion

    //#region Self

    private _modalState: ModalState = ModalState.CLOSED;

    private modalState = new BehaviorSubject<ModalState>(this.getStatus());

    public modalState$(): Observable<ModalState> {
        return this.modalState.asObservable();
    }

    private getStatus(): ModalState {
        return this._modalState;
    }

    private _selfIdentifier: { constructor: Function } = {} as {
        constructor: Function;
    };

    private set selfIdentifier(selfIdentifier: { constructor: Function }) {
        this._selfIdentifier = selfIdentifier;
    }

    public get selfIdentifier(): { constructor: Function } {
        return this._selfIdentifier;
    }

    private _modalConfig?: ModalConfig<D> = undefined;

    private set modalConfig(modalConfig: ModalConfig<D> | undefined) {
        this._modalConfig = modalConfig;
    }

    public get modalConfig(): ModalConfig<D> | undefined {
        return this._modalConfig;
    }
    //#endregion

    //#region Observables

    private backdropClickSubject: Subject<MouseEvent> = new Subject<MouseEvent>();

    public backdropClick(): Observable<MouseEvent> {
        return this.backdropClickSubject.asObservable();
    }

    private backdropClicked(event: MouseEvent) {
        this.backdropClickSubject.next(event);
    }

    private afterCloseSubject: Subject<IModalCloseResult<R>> = new Subject<IModalCloseResult<R>>();

    public afterClosed(): Observable<IModalCloseResult<R>> {
        return this.afterCloseSubject.asObservable();
    }

    private afterClose(result: IModalCloseResult<R>) {
        this.afterCloseSubject.next(result);
    }

    //#endregion

    constructor(
        componentRef: ComponentRef<C>,
        selfIdentifier: { constructor: Function },
        modalContainerRef: ComponentRef<ModalCore<D, R, C>>,
        private modalService: ModalService,
        modalConfig?: ModalConfig<D>,
    ) {
        this.modalConfig = modalConfig;
        this.modalContainerRef = modalContainerRef;
        this.modalContainerElement = modalContainerRef.location.nativeElement;

        this.componentRef = componentRef;
        this.selfIdentifier = selfIdentifier;
    }

    //#region Public Methods

    public async open(): Promise<void> {
        this._modalState = ModalState.OPENING;
        this.modalState.next(ModalState.OPENING);

        this.modalContainerRef.instance.componentRef = this._componentRef;

        const config = new ModalConfig(this.modalConfig);

        this.modalContainerRef.instance.config = config;

        this.modalContainerRef.instance.closeFunction = this.handleClose.bind(this);

        this.parentElement?.appendChild(this.modalContainerElement);

        this.modalContainerRef.instance.backdropClick.subscribe((event) => {
            this.backdropClicked(event);
        });

        this._modalState = ModalState.OPEN;
        this.modalState.next(ModalState.OPEN);
    }

    public close(state: ModalCloseMode = "cancel", result: R | undefined = undefined, forceClose: boolean = false): void {
        this.modalContainerRef.instance.close(state, result, false, forceClose);
    }

    //#endregion

    //#region Private Methods

    private handleClose(result: IModalCloseResult<R>): void {
        this._modalState = ModalState.CLOSING;
        this.modalState.next(ModalState.CLOSING);

        setTimeout(
            () => {
                if (this.modalConfig?.afterClose) {
                    this.modalConfig.afterClose();
                }

                this.modalContainerRef.destroy();

                this._modalState = ModalState.CLOSED;
                this.modalState.next(ModalState.CLOSED);

                this.afterClose(result);
                this.modalService?.close(this.selfIdentifier, true);
            }, this.modalContainerRef.instance.animationDuration);
    }
    //#endregion
}
