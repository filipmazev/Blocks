import type { ComponentType } from '@angular/cdk/portal';
import type { ComponentRef, Signal, WritableSignal } from '@angular/core';

import { signal } from '@angular/core';

import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

import type { ModalCore } from '@modal/components/modal-core/modal-core';
import type { IModal } from '@modal/interfaces/imodal.interface';
import type { IModalCloseResult } from '@modal/interfaces/imodal-close-result.interface';
import type { IModalHeaderConfig } from '@modal/interfaces/imodal-header-config.interface';
import type { IModalHeaderPatch } from '@modal/interfaces/imodal-header-patch.interface';
import type { IModalPatch } from '@modal/interfaces/imodal-patch.interface';
import type { IModalRef } from '@modal/interfaces/imodal-ref.interface';
import type { ModalService } from '@modal/services/modal.service';
import type { ModalCloseMode } from '@modal/types/modal.types';

import { ModalState } from '@modal/enums/modal-state.enum';

import { ModalConfig } from './modal-config';

/** An existing modal's reactive configuration, mounted content, and guarded close lifecycle.
 * @typeParam D - Initialization data supplied to the content component.
 * @typeParam R - Result emitted after the modal closes.
 * @typeParam C - Mounted content implementing the modal contract.
 */
export class ModalRef<D = unknown, R = unknown, C extends IModal<D, R> = IModal<D, R>> implements IModalRef<D, R, C> {
  private readonly configuration: WritableSignal<ModalConfig<D, R>>;
  private readonly modalState: BehaviorSubject<ModalState> = new BehaviorSubject<ModalState>(ModalState.OPENING);
  private readonly backdropClickSubject: Subject<MouseEvent> = new Subject<MouseEvent>();
  private readonly afterCloseSubject: Subject<IModalCloseResult<R | undefined>> = new Subject<IModalCloseResult<R | undefined>>();
  private readonly subscriptions: Subscription = new Subscription();

  /** Authoritative resolved configuration. Read with config(); use patch() for supported updates. */
  public readonly config: Signal<ModalConfig<D, R>>;

  private contentRef?: ComponentRef<C>;
  private containerRef?: ComponentRef<ModalCore<D, R, C>>;
  private closeTimeout?: ReturnType<typeof setTimeout>;

  constructor(
    config: ModalConfig<D, R>,
    /** Angular component type mounted for this modal. It cannot be changed through patch(). */
    public readonly componentType: ComponentType<C>,
    private readonly modalService: ModalService
  ) {
    this.configuration = signal(config);
    this.config = this.configuration.asReadonly();
  }

  /** Mounted content reference; unavailable after destruction. */
  public get componentRef(): ComponentRef<C> | undefined {
    return this.contentRef;
  }

  /** Mounted presentation host; unavailable after destruction. */
  public get modalContainerRef(): ComponentRef<ModalCore<D, R, C>> | undefined {
    return this.containerRef;
  }

  /** Mounted overlay element; unavailable after destruction. */
  public get modalContainerElement(): HTMLElement | undefined {
    return this.containerRef?.location.nativeElement;
  }

  /**
   * Update this mounted modal's material depth after a stack change.
   * @internal
   * @param depth - Zero-based nesting depth assigned by ModalService.
   */
  public setNestingDepth(depth: number): void {
    this.containerRef?.instance.nestingDepth.set(depth);
  }

  /**
   * Merge supported properties synchronously without recreating content. Closing and destroyed modals ignore updates.
   * @param patch - Runtime changes; undefined retains a value and supported null values clear it.
   */
  public patch(patch: IModalPatch): void {
    if (this.modalState.value === ModalState.CLOSING || this.modalState.value === ModalState.CLOSED) return;

    this.configuration.update(
      (current) =>
        new ModalConfig({
          ...current,
          header: patch.header === null ? undefined : patch.header === undefined ? current.header : this.patchHeader(current.header, patch.header),
          disableClose: patch.disableClose ?? current.disableClose,
          disableCloseOnBackdropClick: patch.disableCloseOnBackdropClick ?? current.disableCloseOnBackdropClick,
          disableCloseOnNavigation: patch.disableCloseOnNavigation ?? current.disableCloseOnNavigation,
          closeGuardOnlyOnCancel: patch.closeGuardOnlyOnCancel ?? current.closeGuardOnlyOnCancel,
          contentClasses: patch.contentClasses === undefined ? current.contentClasses : (patch.contentClasses ?? ''),
          contentStyles: patch.contentStyles === undefined ? current.contentStyles : (patch.contentStyles ?? ''),
          style: {
            ...current.style,
            showCloseButton: patch.style?.showCloseButton ?? current.style.showCloseButton,
            wrapperClasses: patch.style?.wrapperClasses === undefined ? current.style.wrapperClasses : (patch.style.wrapperClasses ?? ''),
            wrapperStyles: patch.style?.wrapperStyles === undefined ? current.style.wrapperStyles : (patch.style.wrapperStyles ?? '')
          }
        })
    );
  }

  /** Observe backdrop activations, including those that do not dismiss the modal. */
  public backdropClick(): Observable<MouseEvent> {
    return this.backdropClickSubject.asObservable();
  }

  /** Observe the opening, open, closing, and closed lifecycle. Completes after destruction. */
  public modalState$(): Observable<ModalState> {
    return this.modalState.asObservable();
  }

  /** Observe the final close mode and optional result. Emits once and completes after destruction. */
  public afterClosed(): Observable<IModalCloseResult<R | undefined>> {
    return this.afterCloseSubject.asObservable();
  }

  /**
   * Connect the presentation host before application content is constructed.
   * @internal
   * @param modalContainerRef - Host sharing this reference's configuration and dismissal lifecycle.
   */
  public attachContainer(modalContainerRef: ComponentRef<ModalCore<D, R, C>>): void {
    this.containerRef = modalContainerRef;
    modalContainerRef.instance.closeFunction = (result) => this.handleClose(result);
    this.subscriptions.add(modalContainerRef.instance.backdropClick.subscribe((event) => this.backdropClickSubject.next(event)));
    modalContainerRef.onDestroy(() => this.finishClose({ state: 'cancel', data: undefined }));
  }

  /**
   * Connect application content to its already-registered presentation host.
   * @internal
   * @param componentRef - Content constructed with this modal's injected reference.
   */
  public attachContent(componentRef: ComponentRef<C>): void {
    this.contentRef = componentRef;

    if (this.containerRef) this.containerRef.instance.componentRef = componentRef;
  }

  /** Mark the attached modal open. Repeated calls cannot reopen a closing or destroyed modal. */
  public open(): void {
    if (this.modalState.value === ModalState.OPENING) this.modalState.next(ModalState.OPEN);
  }

  /**
   * Request guarded closure. Programmatic closure remains available when user dismissal is disabled.
   * @param state - Result mode; defaults to cancel.
   * @param result - Optional application result.
   * @param forceClose - Bypass dismissal guards when true; defaults to false.
   */
  public close(state: ModalCloseMode = 'cancel', result: R | undefined = undefined, forceClose: boolean = false): void {
    if (this.modalState.value === ModalState.CLOSING || this.modalState.value === ModalState.CLOSED) return;

    this.containerRef?.instance.close(state, result, false, forceClose);
  }

  //#region Helpers

  private patchHeader(current: IModalHeaderConfig | undefined, patch: IModalHeaderPatch): IModalHeaderConfig {
    const icon = patch.icon;

    return {
      text: patch.text === undefined ? (current?.text ?? '') : (patch.text ?? ''),
      loading: patch.loading ?? current?.loading,
      loadingLabel: patch.loadingLabel ?? current?.loadingLabel,
      icon:
        icon === null
          ? undefined
          : icon === undefined
            ? current?.icon
            : {
                name: icon.name ?? current?.icon?.name ?? 'info',
                size: icon.size ?? current?.icon?.size,
                color: icon.color ?? current?.icon?.color,
                bgColor: icon.bgColor ?? current?.icon?.bgColor,
                strokeWidth: icon.strokeWidth ?? current?.icon?.strokeWidth
              }
    };
  }

  private handleClose(result: IModalCloseResult<R | undefined>): void {
    if (this.modalState.value === ModalState.CLOSING || this.modalState.value === ModalState.CLOSED) return;

    this.modalState.next(ModalState.CLOSING);

    const duration = this.containerRef?.instance.isAnimated() ? this.containerRef.instance.animationDuration : 0;

    this.closeTimeout = setTimeout(() => this.finishClose(result), duration);
  }

  private finishClose(result: IModalCloseResult<R | undefined>): void {
    if (this.modalState.value === ModalState.CLOSED) return;

    clearTimeout(this.closeTimeout);
    this.subscriptions.unsubscribe();
    this.modalState.next(ModalState.CLOSED);

    const containerRef = this.containerRef;

    this.containerRef = undefined;
    this.contentRef = undefined;

    try {
      this.config().afterClose?.();
    } finally {
      if (containerRef && !containerRef.hostView.destroyed) containerRef.destroy();

      this.modalService.unregister(this);
      this.afterCloseSubject.next(result);
      this.afterCloseSubject.complete();
      this.backdropClickSubject.complete();
      this.modalState.complete();
    }
  }

  //#endregion
}
