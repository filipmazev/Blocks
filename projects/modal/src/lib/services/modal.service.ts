import { Injectable, inject, Injector, ApplicationRef, EnvironmentInjector, createComponent, RendererFactory2, Renderer2, Type } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter, skip } from 'rxjs';
import { ModalConfig } from '../classes/modal-config';
import { ModalRef } from '../classes/modal-ref';
import { ModalCore } from '../components/modal-core';
import { IModalConfig } from '../interfaces/imodal-config.interface';
import { IModalService } from '../interfaces/imodal-service.interface';
import { MODAL_DATA } from '../tokens/modal-data.token';
import { ComponentType } from '@angular/cdk/portal';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IModal } from '../interfaces/imodal.interface';
import { ModalGlobalSettingsService } from './modal-global-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements IModalService {
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private readonly appRef = inject(ApplicationRef);
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly rendererFactory = inject(RendererFactory2);
  private readonly document = inject(DOCUMENT);

  private readonly renderer: Renderer2;

  private readonly globalSettings = inject(ModalGlobalSettingsService);

  //#region Properties

  private modals: Set<ModalRef> = new Set();
  private modalsSubject = new BehaviorSubject<Set<ModalRef>>(this.modals);

  //#endregion

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.createSubscriptions();
  }

  //#region Subscription Methods

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

  //#endregion

  //#region Public Methods

  /**
   * Opens a modal with the specified component and configuration.
   * @param component The component to be displayed in the modal.
   * @param config Optional configuration for the modal.
   * @returns A ModalRef instance representing the opened modal.
   */
  public open<D, R, C extends IModal<D, R> = IModal<D, R>>(component: ComponentType<C>, config?: IModalConfig<D, R>): ModalRef<D, R, C> {
    const dataInjector = Injector.create({
      providers: [{ provide: MODAL_DATA, useValue: config?.data }],
      parent: this.injector
    });

    const wrapperRef = createComponent(ModalCore<D, R, C>, {
      environmentInjector: this.environmentInjector,
      elementInjector: dataInjector
    });

    const contentInjector = Injector.create({
      providers: [{ provide: ModalCore, useValue: wrapperRef.instance }],
      parent: wrapperRef.injector
    });

    const contentRef = createComponent(component, {
      environmentInjector: this.environmentInjector,
      elementInjector: contentInjector
    });

    const resolvedConfig = this.resolveConfig(config);

    wrapperRef.instance.componentRef = contentRef;
    wrapperRef.instance.config = new ModalConfig(resolvedConfig);

    this.appRef.attachView(wrapperRef.hostView);
    this.document.body.appendChild(wrapperRef.location.nativeElement);

    const modal = new ModalRef<D, R, C>(contentRef, component, wrapperRef, this, new ModalConfig(resolvedConfig));

    if (this.isIModal<D, R>(contentRef.instance)) {
      contentRef.instance.modal = modal;
      contentRef.instance.onModalInit();
    }

    wrapperRef.onDestroy(() => {
      this.appRef.detachView(wrapperRef.hostView);
      wrapperRef.location.nativeElement.remove();
    });

    const modalElement = modal.componentRef.location.nativeElement;
    this.renderer.setStyle(modalElement, 'height', '97%');
    this.renderer.setStyle(modalElement, 'width', '100%');
    this.renderer.setStyle(modalElement, 'display', 'flex');
    this.renderer.setStyle(modalElement, 'flex-grow', '1');

    this.modals.add(modal);
    this.modalsSubject.next(this.modals);

    modal.open();

    return modal;
  }

  /**
   * Closes the specified modal.
   * @param modal The ModalRef instance representing the modal to be closed.
   */
  public close<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): void {
    modal.close();
  }

  /**
   * Unregisters the specified modal from the service.
   * @param modal The ModalRef instance representing the modal to be unregistered.
   */
  public unregister<D, R, C extends IModal<D, R> = IModal<D, R>>(modal: ModalRef<D, R, C>): void {
    this.modals.delete(modal);
    this.modalsSubject.next(this.modals);
  }

  /**
   * Closes all open modals.
   * @param onNavigate Indicates if the closeAll is triggered by navigation event.
   */
  public closeAll(onNavigate: boolean = false): void {
    this.modals.forEach((modal) => {
      if (modal.modalConfig?.disableCloseOnNavigation !== true || !onNavigate) {
        modal.close('cancel', undefined, true);
      }
    });
  }

  /**
   * Finds if a modal with the specified component type is currently open.
   * @param componentType The component type to search for.
   * @returns True if a modal with the specified component type is open, false otherwise.
   */
  public find<D, R>(componentType: Type<IModal<D, R>>): boolean {
    for (const modal of this.modals) {
      if (modal.componentRef.componentType === componentType) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the count of currently open modals.
   * @returns The number of open modals.
   */
  public modalsCount(): number {
    return this.modals.size;
  }

  //#endregion

  //#region Helper Methods

  private isIModal<D, R>(component: unknown): component is IModal<D, R> {
    return typeof component === 'object' && component !== null && 'onModalInit' in component && typeof (component as IModal<D, R>).onModalInit === 'function';
  }

  private resolveConfig<D, R>(config: IModalConfig<D, R> | undefined): IModalConfig<D, R> {
    const resolvedStyle = {
      layout: config?.style?.layout ?? this.globalSettings.layout(),
      animate: config?.style?.animate ?? this.globalSettings.animate(),
      hasBackdrop: config?.style?.hasBackdrop ?? this.globalSettings.hasBackdrop(),
      showCloseButton: config?.style?.showCloseButton ?? this.globalSettings.showCloseButton(),
      contentWrapper: config?.style?.contentWrapper ?? this.globalSettings.contentWrapper(),
      overrideFullHeight: config?.style?.overrideFullHeight ?? this.globalSettings.overrideFullHeight(),
      breakpoints: config?.style?.breakpoints,
      mobileConfig: config?.style?.mobileConfig,
      wrapperClasses: config?.style?.wrapperClasses,
      wrapperStyles: config?.style?.wrapperStyles,
      closeDelay: config?.style?.closeDelay,
    };

    return {
      ...config,
      disableClose: config?.disableClose ?? this.globalSettings.disableClose(),
      disableCloseOnBackdropClick: config?.disableCloseOnBackdropClick ?? this.globalSettings.disableCloseOnBackdropClick(),
      disableCloseOnNavigation: config?.disableCloseOnNavigation ?? this.globalSettings.disableCloseOnNavigation(),
      closeGuardOnlyOnCancel: config?.closeGuardOnlyOnCancel ?? this.globalSettings.closeGuardOnlyOnCancel(),
      disableConsoleWarnings: config?.disableConsoleWarnings ?? this.globalSettings.disableConsoleWarnings(),
      disableConsoleInfo: config?.disableConsoleInfo ?? this.globalSettings.disableConsoleInfo(),
      style: resolvedStyle,
    };
  }

  //#endregion
}
