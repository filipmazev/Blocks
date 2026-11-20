import type { InputSignal, InputSignalWithTransform, OutputEmitterRef, Signal, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';

import type { IconName } from '@filip.mazev/blocks/icons';

import { BX_I18N, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { Icon } from '@filip.mazev/blocks/icons';
import { IconContentDirective, ProgressBar, TooltipDirective, TruncateDirective, TruncatedTextPipe } from '@filip.mazev/blocks/primitives';

import { FileUploadSession } from '@forms/classes/file-upload-session';
import { Button } from '@forms/components/button/button';
import { FILE_UPLOAD_LABELS } from '@forms/constants/file-upload.constants';
import { SwipeActionsDirective } from '@forms/directives/swipe-actions/swipe-actions.directive';
import { resolveFileUploadCount, resolveFileUploadTypes } from '@forms/helpers/file-upload.helpers';
import { IFileUploadButton } from '@forms/interfaces/ifile-upload-button.interface';
import { IFileUploadItem } from '@forms/interfaces/ifile-upload-item.interface';
import { IFileUploadRejection } from '@forms/interfaces/ifile-upload-rejection.interface';
import { IFileUploadSelection } from '@forms/interfaces/ifile-upload-selection.interface';
import { ISwipeAction } from '@forms/interfaces/iswipe-action.interface';

@Component({
  selector: 'bx-file-upload',
  imports: [Button, Icon, IconContentDirective, NgTemplateOutlet, ProgressBar, SwipeActionsDirective, TooltipDirective, TruncateDirective, TruncatedTextPipe],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUpload {
  private readonly i18n = inject(BX_I18N, { optional: true });

  private readonly fileInput: Signal<ElementRef<HTMLInputElement>> = viewChild.required('fileInput');
  private readonly browseTarget: Signal<ElementRef<HTMLButtonElement>> = viewChild.required('browseTarget', { read: ElementRef<HTMLButtonElement> });

  private readonly retryTargets: Signal<readonly ElementRef<HTMLButtonElement>[]> = viewChildren('retryTarget', { read: ElementRef<HTMLButtonElement> });

  protected readonly tooltipDwell: number = 600;
  protected readonly validationId: string = 'bx-upload-validation-' + uuidv4();

  protected readonly dragging: WritableSignal<boolean> = signal(false);

  protected readonly rejections: WritableSignal<readonly IFileUploadRejection[]> = signal([]);

  protected readonly readOnlyState: Signal<boolean> = computed(() => this.readonly() || this.readOnly());
  protected readonly editable: Signal<boolean> = computed(() => !this.disabled() && !this.readOnlyState());
  protected readonly accept: Signal<string | null> = computed(() => resolveFileUploadTypes(this.selection()).join(',') || null);
  protected readonly manual: Signal<boolean> = computed(() => this.selection().startMode !== 'automatic');
  protected readonly browseButton: Signal<IFileUploadButton | undefined> = computed(() => {
    const config = this.button();

    return config && config.action !== 'upload' ? config : undefined;
  });
  protected readonly uploadButton: Signal<IFileUploadButton | undefined> = computed(() => {
    const config = this.button();

    return config && config.action === 'upload' && this.manual() ? config : undefined;
  });
  protected readonly text: Signal<Readonly<Record<keyof typeof FILE_UPLOAD_LABELS | 'hint', string>>> = computed(() => {
    const labels = this.session().labels;
    const selection = this.selection();
    const resolved = { ...FILE_UPLOAD_LABELS, hint: resolveText(labels.hint, this.i18n) };

    for (const key of Object.keys(FILE_UPLOAD_LABELS) as (keyof typeof FILE_UPLOAD_LABELS)[]) {
      resolved[key] = resolveText(labels[key] ?? FILE_UPLOAD_LABELS[key], this.i18n, {
        maxFileSize: selection.maxFileSize,
        maxFiles: resolveFileUploadCount(selection)
      });
    }

    return resolved;
  });
  protected readonly fileLabel: Signal<(action: string, fileName: string) => string> = computed(() => {
    const label = this.session().labels.fileLabel;

    this.i18n?.version?.();

    return (action, fileName) => resolveText(label ?? `${action} ${fileName}`, this.i18n, { action, fileName });
  });
  protected readonly browseDescription: Signal<string> = computed(() =>
    this.readOnlyState() ? [this.text().readOnly, this.text().hint].filter(Boolean).join('. ') : this.text().hint
  );
  protected readonly errors: Signal<ReadonlyMap<string, string>> = computed(() => {
    const entries = new Map<string, string>();

    for (const batch of this.session().batches()) {
      for (const file of batch.files) {
        if (file.status === 'failed') entries.set(file.id, resolveText(file.error, this.i18n) || this.text().failed);
      }
    }

    return entries;
  });
  protected readonly buttonLabel: Signal<string> = computed(() => resolveText(this.browseButton()?.label ?? this.uploadButton()?.label, this.i18n));
  protected readonly removeActions: Signal<readonly ISwipeAction[]> = computed(() => [
    { id: 'remove', label: this.text().remove, icon: 'trash-2', role: 'destructive', completion: 'dismiss' }
  ]);
  protected readonly canClear: Signal<boolean> = computed(() => {
    if (!this.editable()) return false;

    const session = this.session();

    return !!(this.rejections().length || session.staged().length || session.batches().some((batch) => batch.files.some((file) => session.canRemove(file))));
  });

  /** Application-owned queue, transport and notification state. Keep this instance across routes to retain files and retry state. */
  public readonly session: InputSignal<FileUploadSession> = input.required<FileUploadSession>();
  /** File types, size and count limits, and manual or automatic start. Defaults to one file and manual start. */
  public readonly selection: InputSignal<IFileUploadSelection> = input<IFileUploadSelection>({});
  /** Optional styled browse or upload action. The native picker remains reachable when this is omitted. */
  public readonly button: InputSignal<IFileUploadButton | undefined> = input<IFileUploadButton>();
  /** When set, focuses the first retry action for this batch once it renders. Bind the batch ID from the return route. */
  public readonly focusBatch: InputSignal<string | null | undefined> = input<string | null>();
  /** Prevents user actions while keeping transfer progress and results visible. Defaults to false. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(false, { transform: booleanAttribute });
  /** Readonly form-state input. Blocks edits while keeping the queue and transfer state inspectable. Defaults to false. */
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(false, { transform: booleanAttribute });
  /** Consumer-facing read-only input with the same behavior as readonly. Defaults to false. */
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input<boolean, unknown>(false, { transform: booleanAttribute });

  /** Emits rejected files in selection order. Valid files from the same pick/drop are still accepted. */
  public readonly filesRejected: OutputEmitterRef<readonly IFileUploadRejection[]> = output<readonly IFileUploadRejection[]>();

  private focusedBatch: string | null | undefined;

  constructor() {
    afterRenderEffect(() => {
      const id = this.focusBatch();

      if (this.focusedBatch === id) return;

      this.focusedBatch = undefined;

      if (!id || !this.editable()) return;

      const target = this.retryTargets().find(({ nativeElement }) => nativeElement.dataset['batch'] === id);

      if (!target) return;

      this.focusedBatch = id;
      target.nativeElement.focus();
    });
  }

  protected browse(): void {
    if (this.editable()) this.fileInput().nativeElement.click();
  }

  protected choose(inputElement: HTMLInputElement): void {
    const files = Array.from(inputElement.files ?? []);

    inputElement.value = '';
    this.select(files);
  }

  protected dragOver(event: DragEvent): void {
    const transfer = event.dataTransfer;

    if (!transfer?.types.includes('Files')) return;

    event.preventDefault();
    transfer.dropEffect = this.editable() ? 'copy' : 'none';
    this.dragging.set(this.editable());
  }

  protected dragLeave(event: DragEvent, zone: HTMLElement): void {
    if (!(event.relatedTarget instanceof Node) || !zone.contains(event.relatedTarget)) this.dragging.set(false);
  }

  protected drop(event: DragEvent): void {
    const transfer = event.dataTransfer;

    if (!transfer?.types.includes('Files')) return;

    event.preventDefault();
    this.dragging.set(false);
    this.select(Array.from(transfer.files));
  }

  protected start(): void {
    if (!this.editable() || !this.session().staged().length) return;

    this.browseTarget().nativeElement.focus();
    this.session().start();
  }

  protected canRemove(file: IFileUploadItem): boolean {
    return this.editable() && this.session().canRemove(file);
  }

  protected activateRowAction(file: IFileUploadItem, row: HTMLElement, batchId?: string): void {
    if (!this.canRemove(file)) return;

    if (file.status === 'uploading' && batchId !== undefined) {
      row.focus();
      this.session().cancel(batchId, file.id);

      return;
    }

    this.browseTarget().nativeElement.focus();
    this.session().remove(file.id, batchId);
  }

  protected fileIcon(file: IFileUploadItem): IconName {
    if (file.status === 'canceled') return 'file-x';

    if (file.status === 'failed') return 'file-warning';

    const type = file.file.type.toLowerCase();

    if (type.startsWith('image/')) return 'file-image';

    if (type.startsWith('audio/')) return 'file-audio';

    if (type.startsWith('video/')) return 'file-video';

    if (/zip|archive|compressed/.test(type)) return 'file-archive';

    if (type.startsWith('text/') || /pdf|document|sheet/.test(type)) return 'file-text';

    return 'file';
  }

  protected finishSwipe(fileId: string): void {
    this.session().remove(fileId);
  }

  protected togglePause(file: IFileUploadItem, batchId: string): void {
    if (this.editable()) this.session().setPaused(batchId, file.id, !file.paused);
  }

  protected clearAll(): void {
    if (!this.canClear()) return;

    this.browseTarget().nativeElement.focus();
    this.rejections.set([]);
    this.session().clearAll();
  }

  protected retry(batchId: string, fileId: string, row: HTMLElement): void {
    if (!this.editable()) return;

    row.focus();
    this.session().retry(batchId, fileId);
  }

  //#region Helpers

  private select(files: readonly File[]): void {
    if (!this.editable() || !files.length) return;

    const rejected = this.session().select(files, this.selection());

    this.rejections.set(rejected);

    if (rejected.length) this.filesRejected.emit(rejected);
  }

  //#endregion
}
