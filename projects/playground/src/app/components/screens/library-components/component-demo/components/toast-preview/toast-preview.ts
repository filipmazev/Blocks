import type { InputSignal, Signal } from '@angular/core';

import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  createComponent,
  EnvironmentInjector,
  inject,
  Injector,
  input,
  viewChild,
  ViewContainerRef
} from '@angular/core';

import type { ThemedColor } from '@filip.mazev/blocks/core';
import type { ISimpleToastData } from '@filip.mazev/blocks/toastr';

import { SimpleToast, ToastCore, ToastRef } from '@filip.mazev/blocks/toastr';

import { createPreviewToastRef } from '@playground/components/screens/library-components/component-demo/helpers/preview-toast.helpers';

/** Renders the actual notification view locally, without adding it to the application's toast queue. */
@Component({
  selector: 'app-toast-preview',
  template: '<ng-container #content />',
  styleUrl: './toast-preview.scss',
  providers: [{ provide: ToastRef, useFactory: createPreviewToastRef }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastPreview {
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly injector = inject(Injector);
  private readonly toastRef = inject<ToastRef<ISimpleToastData, undefined>>(ToastRef);

  private readonly content: Signal<ViewContainerRef> = viewChild.required('content', { read: ViewContainerRef });

  /** Whether to include the actual close action and toast material wrapper; defaults to false for a content-only SimpleToast preview. */
  public readonly core: InputSignal<boolean> = input(false);
  /** Content shown by the real SimpleToast view; defaults to the local saved-state sample. */
  public readonly data: InputSignal<ISimpleToastData | undefined> = input<ISimpleToastData | undefined>();
  /** Lifetime used to render the actual progress track; defaults to zero. The preview pauses its lifetime before mounting. */
  public readonly duration: InputSignal<number> = input(0);
  /** Display the actual progress track; defaults to false. */
  public readonly progress: InputSignal<boolean> = input(false);
  /** Semantic progress color; defaults to text-info for the upload example. */
  public readonly progressColor: InputSignal<ThemedColor> = input<ThemedColor>('text-info');

  constructor() {
    afterNextRender(() => {
      this.toastRef.patch({ data: this.data(), durationInMs: this.duration(), showProgressBar: this.progress(), progressBarColor: this.progressColor() });
      this.toastRef.pause();

      const container = this.content();

      if (!this.core()) {
        container.createComponent(SimpleToast);

        return;
      }

      const content = createComponent(SimpleToast, { environmentInjector: this.environmentInjector, elementInjector: this.injector });
      const toastCore = container.createComponent(ToastCore<ISimpleToastData, undefined, SimpleToast>);

      toastCore.instance.componentRef = content;
      toastCore.instance.isVisible.set(true);
    });
  }
}
