import { Injectable, inject, Injector, ApplicationRef, EnvironmentInjector, createComponent, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IToastConfig } from '../interfaces/itoast-config.interface';
import { ToastRef } from '../classes/toast-ref';
import { TOAST_DATA } from '../tokens/toast-data.token';
import { IToast } from '../interfaces/itoast.interface';
import { ToastrGlobalSettingsService } from './toastr-global-settings.service';
import { ToastPosition } from '../types/toastr.types';
import { ComponentType } from '@angular/cdk/portal';
import { ToastCore } from '../components/toast-core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private readonly injector = inject(Injector);
  private readonly appRef = inject(ApplicationRef);
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly document = inject(DOCUMENT);
  private readonly globalSettings = inject(ToastrGlobalSettingsService);

  private readonly toastQueue: Array<() => void> = [];
  private readonly activeToasts: Array<ComponentRef<ToastCore<unknown, unknown, IToast<unknown, unknown>>>> = [];
  private readonly containers = new Map<ToastPosition, HTMLElement>();

  /**
   * Displays a toast notification with the specified component and configuration.
   * @param componentType
   * @param config
   * @returns
   */
  public queueToast<D, R, C extends IToast<D, R>>(componentType: ComponentType<C>, config?: IToastConfig<D>): ToastRef<R> {
    const resolvedConfig = this.resolveConfig(config);
    const toastRef = new ToastRef<R>();

    this.toastQueue.push(() => this.buildAndAttachToast(componentType, resolvedConfig, toastRef));

    this.processQueue();

    return toastRef;
  }

  private processQueue(): void {
    const max = this.globalSettings.maxOpened();

    while (this.activeToasts.length < max && this.toastQueue.length > 0) {
      const buildNext = this.toastQueue.shift();
      if (buildNext) {
        buildNext();
      }
    }
  }

  private buildAndAttachToast<D, R, C extends IToast<D, R>>(componentType: ComponentType<C>, config: IToastConfig<D>, toastRef: ToastRef<R>): void {
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

    toastRef.afterClosed$.pipe(take(1)).subscribe(() => this.finalizeToast(wrapperRef));
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
    return {
      ...config,
      position: config?.position ?? this.globalSettings.position(),
      animate: config?.animate ?? this.globalSettings.animate(),
      wrapperClass: config?.wrapperClass ?? this.globalSettings.wrapperClass(),
      durationInMs: config?.durationInMs ?? this.globalSettings.durationInMs(),
      swipeToDismiss: config?.swipeToDismiss ?? this.globalSettings.swipeToDismiss()
    };
  }

  private isIToast<D, R, C extends IToast<D, R>>(component: unknown): component is C {
    return typeof component === 'object' && component !== null && 'toast' in component;
  }
}
