import type { Signal, WritableSignal } from '@angular/core';
import type { Router, UrlTree } from '@angular/router';

import { computed, signal } from '@angular/core';
import { isActive, NavigationEnd } from '@angular/router';

import type { Subscription } from 'rxjs';

import { filter } from 'rxjs';

import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { ToastRef, ToastrGlobalSettingsService, ToastrService } from '@filip.mazev/blocks/toastr';

import { uuidv4 } from '@filip.mazev/blocks/core';

import { FileUploadToast } from '@forms/components/file-upload-toast/file-upload-toast';
import { acceptsUploadType, resolveFileUploadCount, resolveFileUploadTypes } from '@forms/helpers/file-upload.helpers';
import { IActiveFileUploadAttempt } from '@forms/interfaces/iactive-file-upload-attempt.interface';
import { IFileUploadAttempt } from '@forms/interfaces/ifile-upload-attempt.interface';
import { IFileUploadBatch } from '@forms/interfaces/ifile-upload-batch.interface';
import { IFileUploadFileControl } from '@forms/interfaces/ifile-upload-file-control.interface';
import { IFileUploadItem } from '@forms/interfaces/ifile-upload-item.interface';
import { IFileUploadLabels } from '@forms/interfaces/ifile-upload-labels.interface';
import { IFileUploadRejection } from '@forms/interfaces/ifile-upload-rejection.interface';
import { IFileUploadRun } from '@forms/interfaces/ifile-upload-run.interface';
import { IFileUploadSelection } from '@forms/interfaces/ifile-upload-selection.interface';
import { IFileUploadSessionOptions } from '@forms/interfaces/ifile-upload-session-options.interface';
import { IFileUploadToastData } from '@forms/interfaces/ifile-upload-toast-data.interface';
import { FileUploadPauseHandler, FileUploadToastKind } from '@forms/types/file-upload.types';

/** Application-owned queue and upload state. Create through FileUploadService and share it across routes to keep uploads and retries available. */
export class FileUploadSession {
  private readonly staging: WritableSignal<readonly IFileUploadItem[]> = signal([]);
  private readonly transfers: WritableSignal<readonly IFileUploadBatch[]> = signal([]);

  private readonly attempts: Map<string, IActiveFileUploadAttempt> = new Map();
  private readonly batchRuns: Map<string, IFileUploadRun[]> = new Map();
  private readonly fileRuns: Map<string, IFileUploadRun> = new Map();
  private readonly destinations: Map<string, readonly [UrlTree, Signal<boolean>]> = new Map();
  private readonly navigation: Subscription | undefined;

  /** Files selected but awaiting manual start. */
  public readonly staged: Signal<readonly IFileUploadItem[]> = this.staging.asReadonly();
  /** Submitted batches, newest first, with the latest progress and outcomes. */
  public readonly batches: Signal<readonly IFileUploadBatch[]> = this.transfers.asReadonly();

  /** Reactive files for custom upload UIs, with staged files first, followed by submitted batches in newest-first order. Track each file by id. */
  public readonly files: Signal<readonly IFileUploadFileControl[]> = computed(() => [
    ...this.staged().map((file) => this.createFileControl(file)),
    ...this.batches().flatMap((batch) => batch.files.map((file) => this.createFileControl(file, batch.id)))
  ]);

  /** Translation overrides shared by upload views and their notifications. */
  public readonly labels: IFileUploadLabels;
  /** Whether the session exposes per-file cancellation to users. */
  public readonly cancelable: boolean;

  private nextId: number = 0;
  private disposed: boolean = false;

  /**
   * Connect a session to the application transport and existing toast infrastructure. Prefer FileUploadService.createSession().
   * @param options - Application handler, labels, and optional navigation notification settings.
   * @param toastrService - Notification host.
   * @param toastrGlobalSettingsService - Application notification defaults.
   * @param router - Application router, or null when routing is unavailable.
   */
  constructor(
    private readonly options: IFileUploadSessionOptions,
    private readonly toastrService: ToastrService,
    private readonly toastrGlobalSettingsService: ToastrGlobalSettingsService,
    private readonly router: Router | null
  ) {
    this.labels = { ...options.labels };
    this.cancelable = options.cancelable ?? false;

    if (options.notifications && options.notifications.returnTo && router) {
      this.navigation = router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        for (const [batchId, runs] of this.batchRuns) {
          for (const run of runs) this.syncToast(batchId, run);
        }
      });
    }
  }

  /**
   * Validate a native selection or drop. Stages valid files, or starts them immediately in automatic mode.
   * @param files - Candidate browser files in user selection order.
   * @param selection - Optional picker and validation settings. Defaults to one file and manual start.
   * @returns Rejected files with individual reasons. Valid files from a mixed selection are still accepted.
   */
  public select(files: readonly File[], selection: IFileUploadSelection = {}): readonly IFileUploadRejection[] {
    if (this.disposed) return [];

    const automatic = selection.startMode === 'automatic';
    const staging = selection.multiple && !automatic ? this.staging() : [];
    const types = resolveFileUploadTypes(selection);
    const count = resolveFileUploadCount(selection);
    const maxSize = selection.maxFileSize ?? Infinity;
    const accepted: IFileUploadItem[] = [];
    const rejected: IFileUploadRejection[] = [];

    for (const file of files) {
      if (!acceptsUploadType(file, types)) rejected.push({ file, reason: 'type' });
      else if (file.size > Math.max(0, maxSize)) rejected.push({ file, reason: 'size' });
      else if (staging.length + accepted.length >= count) rejected.push({ file, reason: 'count' });
      else accepted.push({ id: `file-${++this.nextId}`, file, status: 'queued' });
    }

    if (accepted.length) {
      if (automatic) this.startBatch(accepted);
      else this.staging.set([...staging, ...accepted]);
    }

    return rejected;
  }

  /**
   * Whether this file can be removed from the list. Active transfers require session cancellation support.
   * @param file - Current file snapshot.
   */
  public canRemove(file: IFileUploadItem): boolean {
    return !this.disposed && (file.status !== 'uploading' || this.cancelable);
  }

  /**
   * Remove a staged or submitted file. Removing an active file aborts it when cancellation is enabled.
   * @param fileId - Stable ID of the file to remove.
   * @param batchId - ID of the submitted batch. Omit for a staged file.
   */
  public remove(fileId: string, batchId?: string): void {
    if (this.disposed) return;

    if (batchId === undefined) {
      this.staging.update((files) => files.filter((file) => file.id !== fileId));

      return;
    }

    const batch = this.transfers().find((item) => item.id === batchId);

    if (batch)
      this.removeBatchFiles(
        batch,
        batch.files.filter((file) => file.id === fileId && this.canRemove(file))
      );
  }

  /** Clear staged and submitted files. Aborts removable active files and keeps active files when cancellation is disabled. */
  public clearAll(): void {
    if (this.disposed) return;

    const batchIds = this.transfers().map((batch) => batch.id);

    this.staging.set([]);

    for (const id of batchIds) {
      const batch = this.transfers().find((item) => item.id === id);

      if (batch)
        this.removeBatchFiles(
          batch,
          batch.files.filter((file) => this.canRemove(file))
        );
    }
  }

  /** Start all staged files together. Repeated calls with an empty queue have no effect. */
  public start(): void {
    const files = this.staging();

    if (this.disposed || !files.length) return;

    this.staging.set([]);
    this.startBatch(files);
  }

  /**
   * Run a new attempt for one failed file, preserving its original batch and successful siblings.
   * @param batchId - Original batch ID.
   * @param fileId - ID of the failed file.
   */
  public retry(batchId: string, fileId: string): void {
    const batch = this.transfers().find((item) => item.id === batchId);
    const file = batch?.files.find((item) => item.id === fileId);

    if (!this.disposed && batch && file?.status === 'failed') this.request(batch, [file], true);
  }

  /**
   * Request a transport-confirmed pause or resume. A failed request leaves the last confirmed state in place.
   * @param batchId - Batch containing the active file.
   * @param fileId - ID of the file whose attempt supports pause and resume.
   * @param paused - True to pause, false to resume.
   */
  public setPaused(batchId: string, fileId: string, paused: boolean): void {
    const file = this.transfers()
      .find((item) => item.id === batchId)
      ?.files.find((item) => item.id === fileId);
    const attempt = this.attempts.get(fileId);
    const handler = attempt?.pauseHandler;

    if (!file || !handler || !attempt || !this.isCurrent(fileId, attempt) || file.pausePending || paused === (file.paused ?? false)) return;

    const fail = (): void => {
      if (this.isCurrent(fileId, attempt)) this.updateFile(batchId, fileId, { pausePending: false, pauseFailed: true });
    };

    const commit = (): void => {
      if (this.isCurrent(fileId, attempt)) this.updateFile(batchId, fileId, { paused, pausePending: false });
    };

    this.updateFile(batchId, fileId, { pausePending: true, pauseFailed: false });

    try {
      const request = handler(paused, attempt.abortController.signal);

      if (request) void request.then(commit, fail);
      else commit();
    } catch {
      fail();
    }
  }

  /**
   * Cancel an active file when enabled. The attempt's AbortSignal is triggered and later reports are ignored.
   * @param batchId - Batch containing the file.
   * @param fileId - ID of the active file.
   */
  public cancel(batchId: string, fileId: string): void {
    const batch = this.transfers().find((item) => item.id === batchId);
    const attempt = this.attempts.get(fileId);

    if (!this.cancelable || !attempt || !batch?.files.some((item) => item.id === fileId)) return;

    this.attempts.delete(fileId);
    attempt.abortController.abort();
    this.updateFile(batchId, fileId, { status: 'canceled', progress: undefined, pausable: false, paused: false, pausePending: false, pauseFailed: false });
  }

  /**
   * Remove a settled batch and its notification. Active batches are retained.
   * @param batchId - ID of the batch to forget.
   */
  public clearBatch(batchId: string): void {
    const batch = this.transfers().find((item) => item.id === batchId);

    if (!batch || batch.files.some((file) => file.status === 'uploading' || file.status === 'queued')) return;

    this.forgetBatch(batchId);
  }

  /** End this session, abort pending work, dismiss its notifications, and release selected files. Idempotent. */
  public destroy(): void {
    if (this.disposed) return;

    this.disposed = true;
    this.navigation?.unsubscribe();

    for (const attempt of this.attempts.values()) attempt.abortController.abort();

    for (const runs of this.batchRuns.values()) {
      for (const run of runs) {
        for (const toast of run.toasts.values()) toast.close();
      }
    }

    this.attempts.clear();
    this.batchRuns.clear();
    this.fileRuns.clear();
    this.destinations.clear();
    this.staging.set([]);
    this.transfers.set([]);
  }

  //#region Helpers

  private createFileControl(file: IFileUploadItem, batchId?: string): IFileUploadFileControl {
    const uploading = file.status === 'uploading';
    const canSetPaused = uploading && !!file.pausable && !file.pausePending;
    const setPaused = (paused: boolean): void => {
      if (batchId !== undefined) this.setPaused(batchId, file.id, paused);
    };

    return {
      ...file,
      batchId,
      canPause: canSetPaused && !file.paused,
      canResume: canSetPaused && !!file.paused,
      canRetry: file.status === 'failed',
      canCancel: uploading && this.cancelable,
      canRemove: this.canRemove(file),
      pause: () => setPaused(true),
      resume: () => setPaused(false),
      retry: () => {
        if (batchId !== undefined) this.retry(batchId, file.id);
      },
      cancel: () => {
        if (batchId !== undefined) this.cancel(batchId, file.id);
      },
      remove: () => this.remove(file.id, batchId)
    };
  }

  private startBatch(files: readonly IFileUploadItem[]): void {
    const batch: IFileUploadBatch = { id: uuidv4(), total: files.length, files };

    if (this.options.notifications && this.options.notifications.returnTo && this.router) {
      const url = this.options.notifications.returnTo(batch.id);

      this.destinations.set(batch.id, [url, isActive(url, this.router, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored' })]);
    }

    this.transfers.update((batches) => [batch, ...batches]);
    this.request(batch, files, false);
  }

  private request(batch: IFileUploadBatch, files: readonly IFileUploadItem[], retry: boolean): void {
    const ids = new Set(files.map((file) => file.id));
    const next: IFileUploadBatch = {
      ...batch,
      files: batch.files.map((file) => (ids.has(file.id) ? { ...file, status: 'uploading', progress: undefined, error: undefined } : file))
    };
    const attempts = files.map((file) => this.createAttempt(batch.id, file));

    this.replaceBatch(next);
    this.startRun(batch.id, files);

    const fail = (): void => attempts.forEach((attempt) => attempt.fail());

    try {
      const request = this.options.upload({ batchId: batch.id, retry, files: attempts });

      if (request) void request.then(() => attempts.forEach((attempt) => attempt.complete()), fail);
    } catch {
      fail();
    }
  }

  private startRun(batchId: string, files: readonly IFileUploadItem[]): void {
    if (this.options.notifications === false) return;

    const run: IFileUploadRun = { files: new Map(), toasts: new Map() };
    const previousRuns = new Set<IFileUploadRun>();
    const runs = this.batchRuns.get(batchId) ?? [];

    for (const file of files) {
      const previous = this.fileRuns.get(file.id);
      const snapshot = previous?.files.get(file.id);

      if (previous && snapshot) {
        previous.files.set(file.id, { ...snapshot, availability: 'retried' });
        previousRuns.add(previous);
      }

      run.files.set(file.id, { name: file.file.name, status: 'uploading' });
      this.fileRuns.set(file.id, run);
    }

    runs.push(run);
    this.batchRuns.set(batchId, runs);

    for (const previous of previousRuns) {
      this.syncToast(batchId, previous);

      if (!previous.toasts.size && [...previous.files.values()].every((file) => file.availability === 'retried')) {
        runs.splice(runs.indexOf(previous), 1);
      }
    }

    this.syncToast(batchId, run);
  }

  private createAttempt(batchId: string, file: IFileUploadItem): IFileUploadAttempt {
    const attempt: IActiveFileUploadAttempt = { abortController: new AbortController() };

    this.attempts.set(file.id, attempt);

    return {
      id: file.id,
      file: file.file,
      signal: attempt.abortController.signal,
      reportProgress: (percent: number | undefined): void => {
        if (!this.isCurrent(file.id, attempt) || (percent !== undefined && !Number.isFinite(percent))) return;

        const current = this.transfers()
          .find((batch) => batch.id === batchId)
          ?.files.find((item) => item.id === file.id);

        if (!current?.paused) {
          this.updateFile(batchId, file.id, { progress: percent === undefined ? undefined : Math.max(0, Math.min(100, percent)) });
        }
      },
      setPauseHandler: (handler: FileUploadPauseHandler): void => {
        if (!this.isCurrent(file.id, attempt)) return;

        attempt.pauseHandler = handler;
        this.updateFile(batchId, file.id, { pausable: true });
      },
      complete: (): void => this.finish(batchId, file.id, attempt, 'uploaded'),
      fail: (message?: ResolvableText): void => this.finish(batchId, file.id, attempt, 'failed', message)
    };
  }

  private isCurrent(fileId: string, attempt: IActiveFileUploadAttempt): boolean {
    return !this.disposed && this.attempts.get(fileId) === attempt;
  }

  private finish(batchId: string, fileId: string, attempt: IActiveFileUploadAttempt, status: 'uploaded' | 'failed', error?: ResolvableText): void {
    if (!this.isCurrent(fileId, attempt)) return;

    this.attempts.delete(fileId);
    this.updateFile(batchId, fileId, {
      status,
      error,
      progress: status === 'uploaded' ? 100 : undefined,
      pausable: false,
      paused: false,
      pausePending: false,
      pauseFailed: false
    });
  }

  private updateFile(batchId: string, fileId: string, patch: Partial<Omit<IFileUploadItem, 'id' | 'file'>>): void {
    const batch = this.transfers().find((item) => item.id === batchId);
    const file = batch?.files.find((item) => item.id === fileId);

    if (!batch || !file) return;

    const next = { ...file, ...patch };
    const run = this.fileRuns.get(fileId);
    const snapshot = run?.files.get(fileId);

    this.replaceBatch({ ...batch, files: batch.files.map((item) => (item.id === fileId ? next : item)) });

    if (run && snapshot) {
      run.files.set(fileId, { ...snapshot, status: next.status, progress: next.progress, paused: next.paused });
      this.syncToast(batchId, run);
    }
  }

  private replaceBatch(batch: IFileUploadBatch): void {
    this.transfers.update((batches) => batches.map((item) => (item.id === batch.id ? batch : item)));
  }

  private removeBatchFiles(batch: IFileUploadBatch, files: readonly IFileUploadItem[]): void {
    if (!files.length) return;

    const ids = new Set(files.map((file) => file.id));
    const remaining = batch.files.filter((file) => !ids.has(file.id));
    const affectedRuns = new Set<IFileUploadRun>();
    const controllers: AbortController[] = [];

    for (const file of files) {
      const attempt = this.attempts.get(file.id);
      const run = this.fileRuns.get(file.id);
      const snapshot = run?.files.get(file.id);

      if (attempt) {
        this.attempts.delete(file.id);
        controllers.push(attempt.abortController);
      }

      if (run && snapshot) {
        run.files.set(file.id, { ...snapshot, availability: 'removed', status: file.status === 'uploading' ? 'canceled' : file.status });
        this.fileRuns.delete(file.id);
        affectedRuns.add(run);
      }
    }

    if (remaining.length) {
      this.replaceBatch({ ...batch, files: remaining });

      for (const run of affectedRuns) this.syncToast(batch.id, run);
    } else {
      this.forgetBatch(batch.id);
    }

    for (const controller of controllers) controller.abort();
  }

  private forgetBatch(batchId: string): void {
    this.transfers.update((batches) => batches.filter((item) => item.id !== batchId));

    for (const run of this.batchRuns.get(batchId) ?? []) {
      for (const toast of run.toasts.values()) toast.close();

      for (const fileId of run.files.keys()) this.fileRuns.delete(fileId);
    }

    this.batchRuns.delete(batchId);
    this.destinations.delete(batchId);
  }

  private syncToast(batchId: string, run: IFileUploadRun): void {
    const settings = this.options.notifications;

    if (settings === false || this.disposed) return;

    const [returnUrl, isOnUploadPage] = this.destinations.get(batchId) ?? [];
    const files = [...run.files.values()];
    const total = files.length;
    const activeFiles = files.filter((file) => file.status === 'uploading');
    const active = activeFiles.length > 0;
    const paused = active && activeFiles.every((file) => file.paused);
    const uploadedFiles = files.filter((file) => file.status === 'uploaded');
    const failedFiles = files.filter((file) => file.status === 'failed' && file.availability !== 'retried');
    const retryable = failedFiles.some((file) => file.availability === undefined);
    const canceled = files.filter((file) => file.status === 'canceled').length;
    const progress = activeFiles.some((file) => file.progress === undefined)
      ? null
      : ((total - activeFiles.length + activeFiles.reduce((sum, file) => sum + (file.progress ?? 0) / 100, 0)) / total) * 100;
    const retryUrl = retryable ? (returnUrl ?? null) : null;
    const retry = retryable && !retryUrl ? (): void => this.retryFailed(batchId, run) : null;
    const data = {
      total,
      uploaded: uploadedFiles.length,
      failed: failedFiles.length,
      canceled,
      paused,
      progress,
      returnUrl: retryUrl,
      retry,
      labels: this.labels
    };
    const { toasts } = run;
    const duration = settings?.durationInMs ?? this.toastrGlobalSettingsService.durationInMs();

    if (active) {
      if (toasts.has('progress') || (isOnUploadPage && !isOnUploadPage())) {
        this.showToast(toasts, { ...data, kind: 'progress', filenames: files.map((file) => file.name) }, 0);
      }

      return;
    }

    const progressToast = toasts.get('progress');
    const showSuccess = data.uploaded > 0 && settings?.success !== false && toasts.get('success')?.data()?.uploaded !== data.uploaded;

    toasts.delete('progress');

    if (showSuccess && progressToast && (progressToast.state() === 'queued' || progressToast.state() === 'open')) {
      toasts.set('success', progressToast);
    } else {
      progressToast?.close();
    }

    if (showSuccess) {
      this.showToast(toasts, { ...data, kind: 'success', filenames: uploadedFiles.map((file) => file.name) }, duration, true);
    }

    if (data.failed > 0) {
      this.showToast(toasts, { ...data, kind: 'failure', filenames: failedFiles.map((file) => file.name) }, retryable ? 0 : duration);
    } else {
      toasts.get('failure')?.close();
      toasts.delete('failure');
    }
  }

  private showToast(
    toasts: Map<FileUploadToastKind, ToastRef<IFileUploadToastData, undefined>>,
    data: IFileUploadToastData,
    duration: number,
    reopen = false
  ): void {
    const previous = toasts.get(data.kind);
    const color = data.kind === 'failure' ? 'text-danger' : data.kind === 'success' ? 'text-success' : 'text-info';
    const showProgressBar = data.kind === 'success' && this.toastrGlobalSettingsService.showProgressBar();

    if (previous && (!reopen || (previous.state() !== 'closed' && previous.state() !== 'closing'))) {
      const resetLifetime = previous.config().durationInMs !== duration || reopen;

      previous.patch({
        data,
        durationInMs: resetLifetime ? duration : undefined,
        closeButtonColor: color,
        progressBarColor: color,
        showProgressBar
      });

      return;
    }

    const settings = this.options.notifications;
    const toast = this.toastrService.queueToast<IFileUploadToastData, undefined, FileUploadToast>(FileUploadToast, {
      data,
      position: settings ? settings.position : undefined,
      durationInMs: duration,
      closeButtonColor: color,
      progressBarColor: color,
      showProgressBar
    });

    toasts.set(data.kind, toast);
  }

  private retryFailed(batchId: string, run: IFileUploadRun): void {
    const batch = this.transfers().find((item) => item.id === batchId);
    const failed = batch?.files.filter((file) => file.status === 'failed' && this.fileRuns.get(file.id) === run) ?? [];

    if (!this.disposed && batch && failed.length) this.request(batch, failed, true);
  }

  //#endregion
}
