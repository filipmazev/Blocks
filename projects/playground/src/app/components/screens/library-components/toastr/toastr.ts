import type { WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import type { Color } from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { ISimpleToastData, ToastRef } from '@filip.mazev/blocks/toastr';
import type { ToastLiveFormControls } from '@playground/types/overlay-patch-demo.types';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { PageContainer } from '@filip.mazev/blocks/primitives';
import { ToastrGlobalSettingsService, ToastrService } from '@filip.mazev/blocks/toastr';

import { Button } from '@forms/components/button/button';
import { Checkbox } from '@forms/components/checkbox/checkbox';
import { InputField } from '@forms/components/input-field/input-field';
import { Select } from '@forms/components/select/select';
import { IBxSelectOption } from '@forms/interfaces/ibx-select-option.interface';
import { DemoToast } from '@playground/components/screens/library-components/toastr/components/demo-toast/demo-toast';
import { ComponentInfo } from '@playground/components/shared/component-info/component-info';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { IDemoToastData } from '@playground/interfaces/toasts/data/idemo-toast-data.interface';
import { IDemoToastResult } from '@playground/interfaces/toasts/result/idemo-toast-result.interface';
import { ToastrConfigFormControls } from '@playground/types/form.types';
import { SimpleToastType, ToastPosition } from '@toastr/types/toastr.types';

@Component({
  selector: 'app-toastr-demo',
  imports: [PageContainer, BxSurfaceDirective, RouterLink, ReactiveFormsModule, ComponentInfo, Button, InputField, Checkbox, Select],
  templateUrl: './toastr.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './toastr.scss'
})
export class Toastr {
  private readonly destroyRef = inject(DestroyRef);
  private readonly toastrService = inject(ToastrService);
  private readonly toastrGlobalSettingsService = inject(ToastrGlobalSettingsService);

  private readonly demoToasts: Set<ToastRef<ISimpleToastData, undefined>> = new Set();
  private readonly transitionTimeouts: Map<ToastRef<ISimpleToastData, undefined>, ReturnType<typeof setTimeout>> = new Map();

  protected readonly positionOptions: ToastPosition[] = ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'];
  protected readonly form: FormGroup<ToastrConfigFormControls>;
  protected readonly positionSelectOptions: IBxSelectOption<string>[] = this.positionOptions.map((pos) => ({
    label: pos
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    value: pos
  }));
  protected readonly liveForm: FormGroup<ToastLiveFormControls> = new FormGroup({
    type: new FormControl<SimpleToastType>('info', { nonNullable: true }),
    icon: new FormControl<IconName | null>('info'),
    loading: new FormControl(false, { nonNullable: true }),
    durationInMs: new FormControl(4000, { nonNullable: true, validators: [Validators.min(0)] }),
    showCloseButton: new FormControl(true, { nonNullable: true }),
    showProgressBar: new FormControl(true, { nonNullable: true }),
    hasDefaultBackground: new FormControl(true, { nonNullable: true })
  });
  protected readonly liveTypeOptions: IBxSelectOption<SimpleToastType>[] = [
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warn' },
    { label: 'Error', value: 'danger' }
  ];
  protected readonly liveIconOptions: IBxSelectOption<IconName>[] = [
    { label: 'Info', value: 'info' },
    { label: 'Upload', value: 'upload' },
    { label: 'Done', value: 'check' }
  ];

  protected readonly liveToast: WritableSignal<ToastRef<ISimpleToastData, undefined> | null> = signal(null);
  protected readonly customToast: WritableSignal<ToastRef<IDemoToastData, IDemoToastResult> | null> = signal(null);

  protected readonly resultMessage: WritableSignal<string> = signal('Queue a notification to preview its appearance and lifetime.');
  protected readonly toastrReadmePath: WritableSignal<string> = signal<string>('projects/blocks/toastr/README.md');

  protected codeFiles: ICodeFile[] = [
    {
      title: 'toastr-usage.ts',
      path: 'assets/code-snippets/toastr/toastr-usage.ts.txt',
      language: 'typescript'
    },
    { title: 'idemo-toast-data.interface.ts', path: 'assets/code-snippets/toastr/idemo-toast-data.interface.ts.txt', language: 'typescript' },
    {
      title: 'demo-toast.ts',
      path: 'assets/code-snippets/toastr/demo-toast.ts.txt',
      language: 'typescript'
    },
    {
      title: 'demo-toast.html',
      path: 'assets/code-snippets/toastr/demo-toast.html.txt',
      language: 'html'
    },
    {
      title: 'demo-toast.scss',
      path: 'assets/code-snippets/toastr/demo-toast.scss.txt',
      language: 'scss'
    }
  ];

  private queueBlockers: ToastRef<ISimpleToastData, undefined>[] = [];
  private toastCount: number = 0;
  private openedCount: number = 0;

  constructor() {
    this.destroyRef.onDestroy(() => {
      for (const timeout of this.transitionTimeouts.values()) clearTimeout(timeout);

      this.transitionTimeouts.clear();

      for (const toast of this.demoToasts) toast.close();
    });

    this.form = new FormGroup<ToastrConfigFormControls>({
      position: new FormControl<ToastPosition>('top-right', [Validators.required]),
      title: new FormControl<string>('System Update'),
      message: new FormControl<string>('Your preferences have been saved successfully.'),
      durationInMs: new FormControl<number>(5000, [Validators.min(0)]),
      animate: new FormControl<boolean>(true),
      swipeToDismiss: new FormControl<boolean>(true),
      maxOpened: new FormControl<number>(4, [Validators.min(1), Validators.max(10)])
    });

    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe((changes) => {
      this.toastrGlobalSettingsService.maxOpened.set(changes.maxOpened ?? 4);
      this.toastrGlobalSettingsService.position.set(changes.position ?? 'top-right');
      this.toastrGlobalSettingsService.animate.set(changes.animate ?? true);
      this.toastrGlobalSettingsService.swipeToDismiss.set(changes.swipeToDismiss ?? true);
      this.toastrGlobalSettingsService.durationInMs.set(changes.durationInMs ?? 5000);
    });
  }

  protected queueToast(): void {
    if (this.form.invalid) return;

    this.toastCount++;

    const request = this.form.getRawValue();

    const toastRef = this.toastrService.queueToast<IDemoToastData, IDemoToastResult, DemoToast>(DemoToast, {
      position: request.position ?? undefined,
      durationInMs: request.durationInMs ?? undefined,
      animate: request.animate ?? undefined,
      swipeToDismiss: request.swipeToDismiss ?? undefined,
      hasDefaultBackground: true,
      data: {
        title: `${request.title} #${this.toastCount}`,
        message: request.message ?? '',
        openedCount: this.openedCount
      }
    });

    this.customToast.set(toastRef);

    toastRef.afterClosed$.subscribe((result: IDemoToastResult | undefined) => {
      this.openedCount = result?.openedCount ?? this.openedCount;
      this.resultMessage.set('Notification dismissed.');
    });
    this.resultMessage.set(`Notification ${this.toastCount} queued.`);
  }

  protected openLiveToast(): void {
    if (this.form.invalid) return;

    const request = this.form.getRawValue();
    const values = this.liveForm.getRawValue();
    const toast = this.toastrService.queueInfo({
      title: request.title ?? 'Live notification',
      message: request.message ?? 'Patch this message while it is open.',
      icon: values.icon ? { name: values.icon } : null,
      loading: values.loading,
      durationInMs: 0
    });

    this.trackToast(toast);
    this.liveToast.set(toast);
    this.resultMessage.set('Live notification queued with automatic dismissal off. Apply content or reset its lifetime below.');
  }

  protected patchLiveToast(resetLifetime: boolean = false): void {
    const request = this.form.getRawValue();
    const values = this.liveForm.getRawValue();
    const color: Color = `text-${values.type}`;

    this.liveToast()?.patch({
      data: {
        title: request.title ?? null,
        message: request.message ?? '',
        type: values.type,
        icon: values.icon ? { name: values.icon } : null,
        loading: values.loading
      },
      showCloseButton: values.showCloseButton,
      showProgressBar: values.showProgressBar,
      closeButtonColor: color,
      progressBarColor: color,
      hasDefaultBackground: values.hasDefaultBackground,
      durationInMs: resetLifetime ? values.durationInMs : undefined
    });
  }

  protected patchCustomToast(): void {
    this.customToast()?.patch({ data: { message: this.form.controls.message.value ?? '' } });
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

    const timeout = setTimeout(() => {
      this.transitionTimeouts.delete(toast);
      toast.patch({
        data: { message: 'Upload complete', type: 'success', icon: { name: 'check' }, loading: false },
        closeButtonColor: 'text-success',
        progressBarColor: 'text-success',
        durationInMs: 4000
      });
    }, 1800);

    this.transitionTimeouts.set(toast, timeout);
  }

  protected queuePatchDemo(): void {
    if (this.form.invalid) return;

    this.releaseQueueDemo();

    const capacity = this.toastrGlobalSettingsService.maxOpened();

    for (let index = 0; index < capacity; index++) {
      const blocker = this.toastrService.queueInfo({
        message: `Queue demo placeholder ${index + 1}. Release the placeholders to show the patched notification.`,
        durationInMs: 0
      });

      this.queueBlockers.push(blocker);
      this.trackToast(blocker);
    }

    const toast = this.toastrService.queueInfo({ message: 'Original queued content', durationInMs: 0 });

    this.trackToast(toast);
    this.liveToast.set(toast);
    toast.patch({
      data: { message: 'Patched while queued. My lifetime starts only when displayed.', type: 'success', icon: { name: 'check' } },
      durationInMs: 6000
    });
    this.resultMessage.set('Target patched while queued. Release queue placeholders to allow it to appear in order.');
  }

  protected releaseQueueDemo(): void {
    for (const toast of this.queueBlockers) toast.close();

    this.queueBlockers = [];
  }

  protected queueSimpleToast(type: SimpleToastType): void {
    if (type === 'info') {
      this.toastrService.queueInfo({
        title: 'Information',
        message: 'This is an informational toast message.'
      });
    } else if (type === 'success') {
      this.toastrService.queueSuccess({
        title: 'Success',
        message: 'Your operation was successful!'
      });
    } else if (type === 'warn') {
      this.toastrService.queueWarning({
        title: 'Warning',
        message: 'This is a warning toast message.'
      });
    } else if (type === 'danger') {
      this.toastrService.queueDanger({
        title: 'Error',
        message: 'An error occurred while processing your request.'
      });
    }
  }

  //#region Helpers

  private trackToast(toast: ToastRef<ISimpleToastData, undefined>): void {
    this.demoToasts.add(toast);
    toast.afterClosed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      const timeout = this.transitionTimeouts.get(toast);

      if (timeout !== undefined) clearTimeout(timeout);

      this.transitionTimeouts.delete(toast);
      this.demoToasts.delete(toast);
    });
  }

  //#endregion
}
