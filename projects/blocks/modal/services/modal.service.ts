import type { WritableSignal } from '@angular/core';

import { ComponentType } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, createComponent, EnvironmentInjector, inject, Injectable, Injector, Renderer2, RendererFactory2, signal, Type } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';

import { filter, skip } from 'rxjs';

import type { IModalStackEntry } from '@modal/interfaces/imodal-stack-entry.interface';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalRef } from '@modal/classes/modal-ref';
import { ModalCore } from '@modal/components/modal-core/modal-core';
import { IModal } from '@modal/interfaces/imodal.interface';
import { IModalConfig } from '@modal/interfaces/imodal-config.interface';
import { IModalService } from '@modal/interfaces/imodal-service.interface';
import { MODAL_DATA } from '@modal/tokens/modal-data.token';

import { ModalGlobalSettingsService } from './modal-global-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements IModalService {
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private readonly applicationRef = inject(ApplicationRef);
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly rendererFactory2 = inject(RendererFactory2);
  private readonly document = inject(DOCUMENT);
  private readonly modalGlobalSettingsService = inject(ModalGlobalSettingsService);

  private readonly renderer: Renderer2;

  private readonly modals: WritableSignal<ReadonlySet<IModalStackEntry>> = signal(new Set<IModalStackEntry>());

  constructor() {
    this.renderer = this.rendererFactory2.createRenderer(null, null);
    this.createSubscriptions();
  }

  /**
   * Opens a modal with the specified component and configuration.
   *
   * @param component - The component to be displayed in the modal.
   * @param config - Optional configuration for the modal.
   * @typeParam D - Application data supplied to the dynamically created overlay content.
   * @typeParam R - Application result returned when the overlay content closes.
   * @typeParam C - Angular content component implementing the corresponding data and result contract.
   * @returns A ModalRef instance representing the opened modal.
   */
  public open<D, R, C extends IModal<D, R> = IModal<D, R>>(component: ComponentType<C>, config?: IModalConfig<D, R>): ModalRef<D, R, C> {
    const resolvedConfig = this.resolveConfig(config);
    const modal = new ModalRef<D, R, C>(new ModalConfig(resolvedConfig), component, this);
    const dataInjector = Injector.create({
      providers: [
        { provide: MODAL_DATA, useValue: config?.data },
        { provide: ModalRef, useValue: modal }
      ],
      parent: this.injector
    });

    const wrapperRef = createComponent(ModalCore<D, R, C>, {
      environmentInjector: this.environmentInjector,
      elementInjector: dataInjector
    });

    modal.attachContainer(wrapperRef);
    wrapperRef.onDestroy(() => {
      this.applicationRef.detachView(wrapperRef.hostView);
      wrapperRef.location.nativeElement.remove();
    });

    try {
      this.applicationRef.attachView(wrapperRef.hostView);
      this.document.body.appendChild(wrapperRef.location.nativeElement);
      this.modals.update((current) => new Set(current).add(modal));
      this.syncNestingDepth();

      // Content constructors can synchronously open children; register and append the parent first.
      const contentInjector = Injector.create({
        providers: [{ provide: ModalCore, useValue: wrapperRef.instance }],
        parent: wrapperRef.injector
      });
      const contentRef = createComponent(component, {
        environmentInjector: this.environmentInjector,
        elementInjector: contentInjector
      });
      const modalElement = contentRef.location.nativeElement;

      modal.attachContent(contentRef);
      this.renderer.setStyle(modalElement, 'height', '97%');
      this.renderer.setStyle(modalElement, 'width', '100%');
      this.renderer.setStyle(modalElement, 'display', 'flex');
      this.renderer.setStyle(modalElement, 'flex-grow', '1');
      modal.open();

      if (wrapperRef.instance.isOpen() && this.isIModal<D, R>(contentRef.instance)) {
        contentRef.instance.modal = modal;
        contentRef.instance.onModalInit();
      }

      return modal;
    } catch (error) {
      if (!wrapperRef.hostView.destroyed) wrapperRef.destroy();

      this.unregister(modal);

      throw error;
    }
  }

  /**
   * Closes the specified modal.
   *
   * @param modal - The ModalRef instance representing the modal to be closed.
   * @typeParam D - Application data supplied to the dynamically created overlay content.
   * @typeParam R - Application result returned when the overlay content closes.
   * @typeParam C - Angular content component implementing the corresponding data and result contract.
   */
  public close<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): void {
    modal.close();
  }

  /**
   * Unregisters the specified modal from the service.
   *
   * @param modal - The ModalRef instance representing the modal to be unregistered.
   * @typeParam D - Application data supplied to the dynamically created overlay content.
   * @typeParam R - Application result returned when the overlay content closes.
   * @typeParam C - Angular content component implementing the corresponding data and result contract.
   */
  public unregister<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): void {
    this.modals.update((current) => {
      const next = new Set(current);

      next.delete(modal);

      return next;
    });
    this.syncNestingDepth();
  }

  /**
   * Closes all open modals.
   *
   * @param onNavigate - Indicates if the closeAll is triggered by navigation event.
   */
  public closeAll(onNavigate: boolean = false): void {
    this.modals().forEach((modal) => {
      if (modal.config().disableCloseOnNavigation !== true || !onNavigate) {
        modal.close('cancel', undefined, true);
      }
    });
  }

  /**
   * Finds if a modal with the specified component type is currently open.
   *
   * @param componentType - The component type to search for.
   * @typeParam D - Application data supplied to the dynamically created overlay content.
   * @typeParam R - Application result returned when the overlay content closes.
   * @returns True if a modal with the specified component type is open, false otherwise.
   */
  public find<D, R>(componentType: Type<IModal<D, R>>): boolean {
    for (const modal of this.modals()) {
      if (modal.componentType === componentType) {
        return true;
      }
    }

    return false;
  }

  /**
   * Read the reactive count of registered modals, including opening and closing dialogs. Reading in a template or computed tracks stack changes.
   *
   * @returns The number of open modals.
   */
  public modalsCount(): number {
    return this.modals().size;
  }

  /**
   * Check whether a modal is the highest registered overlay, including while it is animating closed.
   * @internal
   * @param modal - Reference whose keyboard-dismissal ownership is being checked.
   * @typeParam D - Modal initialization data.
   * @typeParam R - Modal close result.
   * @typeParam C - Mounted content implementing the modal contract.
   * @returns True only for the last registered modal; background dialogs must not handle Escape.
   */
  public isTopmost<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): boolean {
    return [...this.modals()].at(-1) === modal;
  }

  //#region Helpers

  private syncNestingDepth(): void {
    for (const [depth, modal] of [...this.modals()].entries()) modal.setNestingDepth(depth);
  }

  private createSubscriptions(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        skip(1),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        if (this.modalsCount() > 0) {
          this.closeAll(true);
        }
      });
  }

  private isIModal<D, R>(component: unknown): component is IModal<D, R> {
    return typeof component === 'object' && component !== null && 'onModalInit' in component && typeof (component as IModal<D, R>).onModalInit === 'function';
  }

  private resolveConfig<D, R>(config: IModalConfig<D, R> | undefined): IModalConfig<D, R> {
    const requestedAnimation = config?.style?.animate ?? this.modalGlobalSettingsService.animate();

    const resolvedStyle = {
      layout: config?.style?.layout ?? this.modalGlobalSettingsService.layout(),
      animate: requestedAnimation,
      hasBackdrop: config?.style?.hasBackdrop ?? this.modalGlobalSettingsService.hasBackdrop(),
      showCloseButton: config?.style?.showCloseButton ?? this.modalGlobalSettingsService.showCloseButton(),
      contentWrapper: config?.style?.contentWrapper ?? this.modalGlobalSettingsService.contentWrapper(),
      overrideFullHeight: config?.style?.overrideFullHeight ?? this.modalGlobalSettingsService.overrideFullHeight(),
      breakpoints: config?.style?.breakpoints,
      mobileConfig: config?.style?.mobileConfig,
      wrapperClasses: config?.style?.wrapperClasses,
      wrapperStyles: config?.style?.wrapperStyles,
      closeDelay: config?.style?.closeDelay
    };

    return {
      ...config,
      disableClose: config?.disableClose ?? this.modalGlobalSettingsService.disableClose(),
      disableCloseOnBackdropClick: config?.disableCloseOnBackdropClick ?? this.modalGlobalSettingsService.disableCloseOnBackdropClick(),
      disableCloseOnNavigation: config?.disableCloseOnNavigation ?? this.modalGlobalSettingsService.disableCloseOnNavigation(),
      closeGuardOnlyOnCancel: config?.closeGuardOnlyOnCancel ?? this.modalGlobalSettingsService.closeGuardOnlyOnCancel(),
      style: resolvedStyle
    };
  }

  //#endregion
}
