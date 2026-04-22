import { Injectable, inject, Injector, ApplicationRef, EnvironmentInjector, createComponent, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ComponentType } from '@angular/cdk/portal';
import { take } from 'rxjs';
import { IToastConfig } from '../interfaces/itoast-config.interface';
import { ToastRef } from '../classes/toast-ref';
import { TOAST_DATA } from '../tokens/toast-data.token';
import { IToast } from '../interfaces/itoast.interface';
import { ToastrGlobalSettingsService } from './toastr-global-settings.service';
import { ToastPosition } from '../types/toastr.types';
import { ToastCore } from '../components/toast-core';
import { SimpleToast } from '../components/views/simple-toast/simple-toast';
import { ISimpleToastData } from '../interfaces/isimple-toast.interface';
import { IQueueSimpleToastRequest } from '../interfaces/iqueue-simple-toast-request.interface';
import { BxA11yService } from '@filip.mazev/blocks/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private readonly injector = inject(Injector);
  private readonly appRef = inject(ApplicationRef);
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly document = inject(DOCUMENT);
  private readonly globalSettings = inject(ToastrGlobalSettingsService);
  private readonly a11y = inject(BxA11yService);

  private readonly toastQueue: Array<() => void> = [];
  private readonly activeToasts: Array<ComponentRef<ToastCore<unknown, unknown, IToast<unknown, unknown>>>> = [];
  private readonly containers = new Map<ToastPosition, HTMLElement>();

  private activePauses = 0;

  /**
   * Displays a toast notification with the specified component and configuration.
   * @param componentType
   * @param config
   * @returns
   */
  public queueToast<D, R, C extends IToast<D, R>>(componentType: ComponentType<C>, config?: IToastConfig<D>): ToastRef<D, R> {
    const resolvedConfig = this.resolveConfig(config);
    const toastRef = new ToastRef<D, R>();

    this.toastQueue.push(() => this.buildAndAttachToast(componentType, resolvedConfig, toastRef));

    this.processQueue();

    return toastRef;
  }

  /**
   * Queues a simple success toast notification with the specified message and optional title, position, and duration.
   * @param request An object containing the message, optional title, optional position, and duration for the toast notification.
   * @returns A ToastRef instance representing the queued toast.
   */
  public queueSuccess(request: IQueueSimpleToastRequest): ToastRef<ISimpleToastData, undefined> {
    return this.queueToast<ISimpleToastData, undefined, SimpleToast>(SimpleToast, {
      position: request.position ?? this.globalSettings.position(),
      data: {
        title: request.title,
        message: request.message,
        type: 'success'
      },
      closeButtonColor: 'text-success',
      progressBarColor: 'text-success',
      hasDefaultBackground: false,
      durationInMs: request.durationInMs ?? this.globalSettings.durationInMs(),
      animate: request.animate ?? this.globalSettings.animate(),
      showProgressBar: request.showProgessBar ?? this.globalSettings.showProgressBar(),
      showCloseButton: request.showCloseButton ?? this.globalSettings.showCloseButton()
    });
  }

  /**
   * Queues a simple info toast notification with the specified message and optional title, position, and duration.
   * @param request An object containing the message, optional title, optional position, and duration for the toast notification.
   * @returns A ToastRef instance representing the queued toast.
   */
  public queueInfo(request: IQueueSimpleToastRequest): ToastRef<ISimpleToastData, undefined> {
    return this.queueToast<ISimpleToastData, undefined, SimpleToast>(SimpleToast, {
      position: request.position ?? this.globalSettings.position(),
      data: {
        title: request.title,
        message: request.message,
        type: 'info'
      },
      closeButtonColor: 'text-info',
      progressBarColor: 'text-info',
      hasDefaultBackground: false,
      durationInMs: request.durationInMs ?? this.globalSettings.durationInMs(),
      animate: request.animate ?? this.globalSettings.animate(),
      showProgressBar: request.showProgessBar ?? this.globalSettings.showProgressBar(),
      showCloseButton: request.showCloseButton ?? this.globalSettings.showCloseButton()
    });
  }

  /**
   * Queues a simple warning toast notification with the specified message and optional title, position, and duration.
   * @param request An object containing the message, optional title, optional position, and duration for the toast notification.
   * @returns A ToastRef instance representing the queued toast.
   */
  public queueWarning(request: IQueueSimpleToastRequest): ToastRef<ISimpleToastData, undefined> {
    return this.queueToast<ISimpleToastData, undefined, SimpleToast>(SimpleToast, {
      position: request.position ?? this.globalSettings.position(),
      data: {
        title: request.title,
        message: request.message,
        type: 'warn'
      },
      closeButtonColor: 'text-warn',
      progressBarColor: 'text-warn',
      hasDefaultBackground: false,
      durationInMs: request.durationInMs ?? this.globalSettings.durationInMs(),
      animate: request.animate ?? this.globalSettings.animate(),
      showProgressBar: request.showProgessBar ?? this.globalSettings.showProgressBar(),
      showCloseButton: request.showCloseButton ?? this.globalSettings.showCloseButton()
    });
  }

  /**
   * Queues a simple error toast notification with the specified message and optional title, position, and duration.
   * @param request An object containing the message, optional title, optional position, and duration for the toast notification.
   * @returns A ToastRef instance representing the queued toast.
   */
  public queueDanger(request: IQueueSimpleToastRequest): ToastRef<ISimpleToastData, undefined> {
    return this.queueToast<ISimpleToastData, undefined, SimpleToast>(SimpleToast, {
      position: request.position ?? this.globalSettings.position(),
      data: {
        title: request.title,
        message: request.message,
        type: 'danger'
      },
      closeButtonColor: 'text-danger',
      progressBarColor: 'text-danger',
      hasDefaultBackground: false,
      durationInMs: request.durationInMs ?? this.globalSettings.durationInMs(),
      animate: request.animate ?? this.globalSettings.animate(),
      showProgressBar: request.showProgessBar ?? this.globalSettings.showProgressBar(),
      showCloseButton: request.showCloseButton ?? this.globalSettings.showCloseButton()
    });
  }

  //#region Helper Methods

  private processQueue(): void {
    if (this.activePauses > 0) {
      return;
    }

    const max = this.globalSettings.maxOpened();

    while (this.activeToasts.length < max && this.toastQueue.length > 0) {
      const buildNext = this.toastQueue.shift();
      if (buildNext) {
        buildNext();
      }
    }
  }

  private buildAndAttachToast<D, R, C extends IToast<D, R>>(componentType: ComponentType<C>, config: IToastConfig<D>, toastRef: ToastRef<D, R>): void {
    const dataInjector = Injector.create({
      providers: [{ provide: TOAST_DATA, useValue: config.data }],
      parent: this.injector
    });

    const contentRef = createComponent(componentType, {
      environmentInjector: this.environmentInjector,
      elementInjector: dataInjector
    });

    if (this.isIToast<D, R, C>(contentRef.instance)) {
      contentRef.instance.toast = toastRef;
      contentRef.instance.onToastInit?.();
    }

    const wrapperInjector = Injector.create({
      providers: [{ provide: ToastRef, useValue: toastRef }],
      parent: this.injector
    });

    const wrapperRef = createComponent<ToastCore<D, R, C>>(ToastCore, {
      environmentInjector: this.environmentInjector,
      elementInjector: wrapperInjector
    });

    wrapperRef.instance.componentRef = contentRef;
    wrapperRef.instance.config = config;
    wrapperRef.instance.toastRef = toastRef;

    this.appRef.attachView(wrapperRef.hostView);

    const container = this.getContainer(config.position || 'top-right');
    container.appendChild(wrapperRef.location.nativeElement);

    this.activeToasts.push(wrapperRef as ComponentRef<ToastCore<unknown, unknown, IToast<unknown, unknown>>>);

    let isThisToastPausing = false;

    toastRef.config = config;

    toastRef.onPause$.subscribe(() => {
      if (!isThisToastPausing) {
        isThisToastPausing = true;
        this.activePauses++;
      }
    });

    toastRef.onResume$.subscribe(() => {
      if (isThisToastPausing) {
        isThisToastPausing = false;
        this.activePauses = Math.max(0, this.activePauses - 1);

        if (this.activePauses === 0) {
          this.processQueue();
        }
      }
    });

    toastRef.afterClosed$.pipe(take(1)).subscribe(() => {
      if (isThisToastPausing) {
        isThisToastPausing = false;
        this.activePauses = Math.max(0, this.activePauses - 1);
      }

      this.finalizeToast(wrapperRef);
    });
  }

  private finalizeToast<D, R, C extends IToast<D, R>>(wrapperRef: ComponentRef<ToastCore<D, R, C>>): void {
    const index = this.activeToasts.indexOf(wrapperRef as ComponentRef<ToastCore<unknown, unknown, IToast<unknown, unknown>>>);

    if (index > -1) {
      this.activeToasts.splice(index, 1);
    }

    this.appRef.detachView(wrapperRef.hostView);
    wrapperRef.location.nativeElement.remove();
    wrapperRef.destroy();

    this.processQueue();
  }

  private getContainer(position: ToastPosition): HTMLElement {
    if (this.containers.has(position)) {
      return this.containers.get(position) as HTMLElement;
    }

    const container = this.document.createElement('div');
    container.classList.add('toast-container', `toast-container-${position}`);
    this.document.body.appendChild(container);

    this.containers.set(position, container);

    return container;
  }

  private resolveConfig<D>(config?: IToastConfig<D>): IToastConfig<D> {
    const requestedAnimation = config?.animate ?? this.globalSettings.animate();
    const finalAnimateState = this.a11y.isReducedMotion() ? false : requestedAnimation;

    return {
      ...config,
      position: config?.position ?? this.globalSettings.position(),
      animate: finalAnimateState,
      wrapperClass: config?.wrapperClass ?? this.globalSettings.wrapperClass(),
      durationInMs: config?.durationInMs ?? this.globalSettings.durationInMs(),
      swipeToDismiss: config?.swipeToDismiss ?? this.globalSettings.swipeToDismiss(),
      showCloseButton: config?.showCloseButton ?? this.globalSettings.showCloseButton(),
      closeButtonColor: config?.closeButtonColor ?? this.globalSettings.closeButtonColor(),
      showProgressBar: config?.showProgressBar ?? this.globalSettings.showProgressBar(),
      progressBarColor: config?.progressBarColor ?? this.globalSettings?.progressBarColor()
    };
  }

  private isIToast<D, R, C extends IToast<D, R>>(component: unknown): component is C {
    return typeof component === 'object' && component !== null && 'toast' in component;
  }

  //#endregion
}