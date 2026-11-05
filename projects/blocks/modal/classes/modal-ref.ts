import { ComponentType } from '@angular/cdk/portal';
import { ComponentRef, Type } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { ModalCore } from '@modal/components/modal-core';
import { ModalState } from '@modal/enums/modal-state.enum';
import { IModal } from '@modal/interfaces/imodal.interface';
import { IModalCloseResult } from '@modal/interfaces/imodal-close-result.interface';
import { IModalRef } from '@modal/interfaces/imodal-ref.interface';
import { ModalService } from '@modal/services/modal.service';
import { ModalCloseMode } from '@modal/types/modal.types';

import { ModalConfig } from './modal-config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class ModalRef<D = unknown, R = any, C extends IModal<D, R> = IModal<D, R>> implements IModalRef<D, R, C> {
  private _modalContainer: Type<ModalCore<D, R, C>> = {} as Type<ModalCore<D, R, C>>;
  private _modalContainerRef: ComponentRef<ModalCore<D, R, C>> = {} as ComponentRef<ModalCore<D, R, C>>;
  private _modalContainerElement: HTMLElement = {} as HTMLElement;
  private _parentElement: HTMLElement | undefined = undefined;
  private _componentRef: ComponentRef<C> = {} as ComponentRef<C>;
  private _modalState: ModalState = ModalState.CLOSED;
  private modalState: BehaviorSubject<ModalState> = new BehaviorSubject<ModalState>(this.getStatus());
  private _modalConfig?: ModalConfig<D, R> = undefined;
  private backdropClickSubject: Subject<MouseEvent> = new Subject<MouseEvent>();
  private afterCloseSubject: Subject<IModalCloseResult<R | undefined>> = new Subject<IModalCloseResult<R | undefined>>();

  constructor(
    componentRef: ComponentRef<C>,
    public componentType: ComponentType<C>,
    modalContainerRef: ComponentRef<ModalCore<D, R, C>>,
    private modalService: ModalService,
    modalConfig?: ModalConfig<D, R>
  ) {
    this.modalConfig = modalConfig;
    this.modalContainerRef = modalContainerRef;
    this.modalContainerElement = modalContainerRef.location.nativeElement;

    this.componentRef = componentRef;
  }

  public get modalContainer(): Type<ModalCore<D, R, C>> {
    return this._modalContainer;
  }

  public get modalContainerRef(): ComponentRef<ModalCore<D, R, C>> {
    return this._modalContainerRef;
  }

  public get modalContainerElement(): HTMLElement {
    return this._modalContainerElement;
  }

  public get parentElement(): HTMLElement | undefined {
    return this._parentElement;
  }

  public get componentRef(): ComponentRef<C> {
    return this._componentRef;
  }

  public get modalConfig(): ModalConfig<D, R> | undefined {
    return this._modalConfig;
  }

  public backdropClick(): Observable<MouseEvent> {
    return this.backdropClickSubject.asObservable();
  }

  public modalState$(): Observable<ModalState> {
    return this.modalState.asObservable();
  }

  /**
   * Observable that emits when the modal has been closed.
   * @returns An Observable that emits an IModalCloseResult<R | undefined> when the modal is closed.
   */
  public afterClosed(): Observable<IModalCloseResult<R | undefined>> {
    return this.afterCloseSubject.asObservable();
  }

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

  public close(state: ModalCloseMode = 'cancel', result: R | undefined = undefined, forceClose: boolean = false): void {
    this.modalContainerRef.instance.close(state, result, false, forceClose);
  }

  //#region Helpers

  private set modalContainerRef(modalContainerRef: ComponentRef<ModalCore<D, R, C>>) {
    this._modalContainerRef = modalContainerRef;
  }

  private set modalContainerElement(modalContainerElement: HTMLElement) {
    this._modalContainerElement = modalContainerElement;
  }

  private set parentElement(parentElement: HTMLElement | undefined) {
    this._parentElement = parentElement;
  }

  private set componentRef(componentRef: ComponentRef<C>) {
    this._componentRef = componentRef;
  }

  private set modalConfig(modalConfig: ModalConfig<D, R> | undefined) {
    this._modalConfig = modalConfig;
  }

  private getStatus(): ModalState {
    return this._modalState;
  }

  private backdropClicked(event: MouseEvent) {
    this.backdropClickSubject.next(event);
  }

  private afterClose(result: IModalCloseResult<R | undefined>) {
    this.afterCloseSubject.next(result);
  }

  private handleClose(result: IModalCloseResult<R | undefined>): void {
    this._modalState = ModalState.CLOSING;
    this.modalState.next(ModalState.CLOSING);

    setTimeout(() => {
      if (this.modalConfig?.afterClose) {
        this.modalConfig.afterClose();
      }

      this.modalContainerRef.destroy();

      this._modalState = ModalState.CLOSED;
      this.modalState.next(ModalState.CLOSED);

      this.afterClose(result);

      this.modalService?.unregister(this);
    }, this.modalContainerRef.instance.animationDuration);
  }

  //#endregion
}
