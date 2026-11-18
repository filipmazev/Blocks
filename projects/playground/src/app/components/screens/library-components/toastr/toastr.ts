import type { InputSignal, OutputEmitterRef, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, DestroyRef, effect, inject, input, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import type { ISimpleToastData, SimpleToastType, ToastRef } from '@filip.mazev/blocks/toastr';
import type { IDemoAction } from '@playground/interfaces/idemo-action.interface';
import type { IToastStoryArgs } from '@playground/interfaces/itoast-story-args.interface';
import type { IDemoToastData } from '@playground/interfaces/toasts/data/idemo-toast-data.interface';
import type { IDemoToastResult } from '@playground/interfaces/toasts/result/idemo-toast-result.interface';

import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Collapsible } from '@filip.mazev/blocks/primitives';
import { SimpleToast, ToastrGlobalSettingsService, ToastrService } from '@filip.mazev/blocks/toastr';

import { DemoToast } from '@playground/components/screens/library-components/toastr/components/demo-toast/demo-toast';
import { OverlayDemoI18nService } from '@playground/services/overlay-demo-i18n.service';
import { TOAST_STORY_DEFAULTS } from '@playground/shared/constants/toast-story.constants';

@Component({
  selector: 'app-toastr-demo',
  imports: [Button, Icon, Collapsible],
  templateUrl: './toastr.html',
  styleUrl: './toastr.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Toastr {
  private readonly destroyRef = inject(DestroyRef);
  private readonly toastrService = inject(ToastrService);
  private readonly toastrGlobalSettingsService = inject(ToastrGlobalSettingsService);
  private readonly overlayDemoI18nService = inject(OverlayDemoI18nService);

  private readonly demoToasts: Set<ToastRef<ISimpleToastData, undefined>> = new Set();
  private readonly customToasts: Set<ToastRef<IDemoToastData, IDemoToastResult>> = new Set();
  private readonly transitionTimeouts: Map<ToastRef<ISimpleToastData, undefined>, ReturnType<typeof setTimeout>> = new Map();
  private readonly previousMaxOpened: number = this.toastrGlobalSettingsService.maxOpened();
  private readonly previousLanguage: IToastStoryArgs['language'] = this.overlayDemoI18nService.language();

  protected readonly liveToast: WritableSignal<ToastRef<ISimpleToastData, undefined> | null> = signal(null);
  protected readonly customToast: WritableSignal<ToastRef<IDemoToastData, IDemoToastResult> | null> = signal(null);

  public readonly args: InputSignal<IToastStoryArgs> = input<IToastStoryArgs>(TOAST_STORY_DEFAULTS);

  public readonly action: OutputEmitterRef<IDemoAction> = output<IDemoAction>();

  private openedCount: number = 0;

  constructor() {
    effect(() => {
      const args = this.args();

      this.toastrGlobalSettingsService.maxOpened.set(args.maxOpened);
      this.overlayDemoI18nService.setLanguage(args.language);
    });
    this.destroyRef.onDestroy(() => {
      for (const timeout of this.transitionTimeouts.values()) clearTimeout(timeout);

      for (const toast of this.demoToasts) toast.close();

      for (const toast of this.customToasts) toast.close();

      this.toastrGlobalSettingsService.maxOpened.set(this.previousMaxOpened);
      this.overlayDemoI18nService.setLanguage(this.previousLanguage);
    });
  }

  protected queueToast(): void {
    const args = this.args();
    const toast = this.toastrService.queueToast<IDemoToastData, IDemoToastResult, DemoToast>(DemoToast, {
      position: args.position,
      glassiness: args.glassiness,
      glassQuality: args.glassQuality,
      wrapperClass: args.wrapperClass,
      durationInMs: args.durationInMs,
      animate: args.animate,
      swipeToDismiss: args.swipeToDismiss,
      hasDefaultBackground: args.hasDefaultBackground,
      showCloseButton: args.showCloseButton,
      showProgressBar: args.showProgressBar,
      closeLabel: args.closeLabel || { key: 'overlay.closeToast' },
      data: { title: args.title, message: args.message, openedCount: this.openedCount }
    });

    this.customToast.set(toast);
    this.customToasts.add(toast);
    this.action.emit({ name: 'queueCustomToast', payload: args });
    toast.afterClosed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      this.openedCount = result?.openedCount ?? this.openedCount;
      this.customToasts.delete(toast);

      if (this.customToast() === toast) this.customToast.set(null);

      this.action.emit({ name: 'customToastClosed', payload: result });
    });
  }

  protected openLiveToast(type: SimpleToastType = this.args().type, persistent: boolean = false): void {
    const args = this.args();
    const toast = this.toastrService.queueToast<ISimpleToastData, undefined, SimpleToast>(SimpleToast, {
      position: args.position,
      glassiness: args.glassiness,
      glassQuality: args.glassQuality,
      wrapperClass: args.wrapperClass,
      durationInMs: persistent ? 0 : args.durationInMs,
      animate: args.animate,
      swipeToDismiss: args.swipeToDismiss,
      showCloseButton: args.showCloseButton,
      showProgressBar: args.showProgressBar,
      hasDefaultBackground: args.hasDefaultBackground,
      closeButtonColor: `text-${type}`,
      progressBarColor: `text-${type}`,
      closeLabel: args.closeLabel || { key: 'overlay.closeToast' },
      data: { title: args.title, message: args.message, type, icon: args.icon ? { name: args.icon } : null, loading: args.loading }
    });

    this.trackToast(toast);
    this.liveToast.set(toast);
    this.action.emit({ name: 'queueSimpleToast', payload: { ...args, type, durationInMs: persistent ? 0 : args.durationInMs } });
  }

  protected patchLiveToast(resetLifetime: boolean = false): void {
    const args = this.args();

    this.liveToast()?.patch({
      data: { title: args.title, message: args.message, type: args.type, icon: args.icon ? { name: args.icon } : null, loading: args.loading },
      showCloseButton: args.showCloseButton,
      showProgressBar: args.showProgressBar,
      closeButtonColor: `text-${args.type}`,
      progressBarColor: `text-${args.type}`,
      hasDefaultBackground: args.hasDefaultBackground,
      durationInMs: resetLifetime ? args.durationInMs : undefined
    });
    this.action.emit({ name: 'patch', payload: { ...args, resetLifetime } });
  }

  protected patchCustomToast(): void {
    const message = this.args().message;

    this.customToast()?.patch({ data: { message } });
    this.action.emit({ name: 'patchCustomToast', payload: { message } });
  }

  protected pauseToast(): void {
    this.liveToast()?.pause();
    this.action.emit({ name: 'pause', payload: undefined });
  }

  protected resumeToast(): void {
    this.liveToast()?.resume();
    this.action.emit({ name: 'resume', payload: undefined });
  }

  protected dismissToast(): void {
    this.liveToast()?.close();
    this.action.emit({ name: 'dismiss', payload: undefined });
  }

  protected loadingToSuccess(): void {
    const toast = this.toastrService.queueInfo({
      title: 'File upload',
      message: 'Uploading your file…',
      icon: { name: 'upload' },
      loading: true,
      durationInMs: 0
    });

    this.trackToast(toast);
    this.liveToast.set(toast);
    this.action.emit({ name: 'uploadStarted', payload: undefined });

    const timeout = setTimeout(() => {
      this.transitionTimeouts.delete(toast);
      toast.patch({
        data: { message: 'Upload complete', type: 'success', icon: { name: 'check' }, loading: false },
        closeButtonColor: 'text-success',
        progressBarColor: 'text-success',
        durationInMs: 4000
      });
      this.action.emit({ name: 'uploadCompleted', payload: { durationInMs: 4000 } });
    }, 1800);

    this.transitionTimeouts.set(toast, timeout);
  }

  protected releaseQueueDemo(): void {
    for (const toast of this.demoToasts) toast.close();

    for (const toast of this.customToasts) toast.close();

    this.action.emit({ name: 'dismissAllExampleToasts', payload: undefined });
  }

  //#region Helpers

  private trackToast(toast: ToastRef<ISimpleToastData, undefined>): void {
    this.demoToasts.add(toast);
    toast.afterClosed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      const timeout = this.transitionTimeouts.get(toast);

      if (timeout !== undefined) clearTimeout(timeout);

      this.transitionTimeouts.delete(toast);
      this.demoToasts.delete(toast);

      if (this.liveToast() === toast) this.liveToast.set(null);

      this.action.emit({ name: 'afterClosed', payload: undefined });
    });
  }

  //#endregion
}
