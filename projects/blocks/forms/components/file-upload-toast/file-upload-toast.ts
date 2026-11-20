import type { Signal } from '@angular/core';

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { ResolvableText } from '@filip.mazev/blocks/core';

import { BX_I18N, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { VisualTransition } from '@filip.mazev/blocks/effects';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner, ProgressBar, TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';
import { Toast } from '@filip.mazev/blocks/toastr';

import { Button } from '@forms/components/button/button';
import { FILE_UPLOAD_LABELS } from '@forms/constants/file-upload.constants';
import { IFileUploadToastData } from '@forms/interfaces/ifile-upload-toast-data.interface';

@Component({
  selector: 'bx-file-upload-toast',
  imports: [Button, Icon, LoadingSpinner, ProgressBar, RouterLink, TooltipDirective, TruncateDirective, TruncatedTextPipe, VisualTransition],
  templateUrl: './file-upload-toast.html',
  styleUrl: './file-upload-toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadToast extends Toast<IFileUploadToastData, undefined> {
  private readonly i18n = inject(BX_I18N, { optional: true });

  protected readonly summaryId: string = 'bx-upload-toast-' + uuidv4();

  protected readonly contextTitle: Signal<string> = computed(() => resolveText(this.data()?.labels?.toastTitle, this.i18n));
  protected readonly uploading: Signal<string> = computed(() => resolveText(this.data()?.labels?.uploading ?? FILE_UPLOAD_LABELS.uploading, this.i18n));
  protected readonly paused: Signal<string> = computed(() => resolveText(this.data()?.labels?.paused ?? FILE_UPLOAD_LABELS.paused, this.i18n));
  protected readonly retry: Signal<string> = computed(() => resolveText(this.data()?.labels?.retry ?? FILE_UPLOAD_LABELS.retry, this.i18n));
  protected readonly uploadedCount: Signal<string> = computed(() => this.count('uploaded', this.data()?.labels?.uploadedCount));
  protected readonly failedCount: Signal<string> = computed(() => this.count('failed', this.data()?.labels?.failedCount));
  protected readonly canceledCount: Signal<string> = computed(() => this.count('canceled', this.data()?.labels?.canceledCount));
  protected readonly reviewFiles: Signal<string> = computed(() => resolveText(this.data()?.labels?.reviewFiles ?? FILE_UPLOAD_LABELS.reviewFiles, this.i18n));
  protected readonly filenameSeparator: Signal<string> = computed(() =>
    resolveText(this.data()?.labels?.filenameSeparator ?? FILE_UPLOAD_LABELS.filenameSeparator, this.i18n)
  );
  protected readonly filenames: Signal<string> = computed(() => this.data()?.filenames.join(this.filenameSeparator()) ?? '');
  protected readonly outcomeMessage: Signal<string> = computed(() => {
    const batch = this.data();

    if (!batch || batch.kind === 'progress') return '';

    const success = batch.kind === 'success';
    const count = success ? batch.uploaded : batch.failed;
    const label = success ? batch.labels?.successMessage : batch.labels?.failureMessage;
    const fallback = success ? `${count} ${count === 1 ? 'file' : 'files'} successfully uploaded` : `${count} ${count === 1 ? 'upload' : 'uploads'} failed`;

    return resolveText(label ?? fallback, this.i18n, { count, total: batch.total });
  });

  //#region Helpers

  private count(status: 'uploaded' | 'failed' | 'canceled', label: ResolvableText | undefined): string {
    const data = this.data();
    const count = data?.[status] ?? 0;
    const total = data?.total ?? 0;

    return resolveText(label ?? `${count} / ${total} ${status}`, this.i18n, { count, total });
  }

  //#endregion
}
