import type { ToastRef } from '@filip.mazev/blocks/toastr';
import type { IFileUploadRunFile } from '@forms/interfaces/ifile-upload-run-file.interface';
import type { IFileUploadToastData } from '@forms/interfaces/ifile-upload-toast-data.interface';
import type { FileUploadToastKind } from '@forms/types/file-upload.types';

/** Notification state for one transport call, including a retry of some or all failed files. */
export interface IFileUploadRun {
  /** Per-file outcomes in request order, keyed by stable file ID. */
  readonly files: Map<string, IFileUploadRunFile>;
  /** Retains one reference for each kind, including dismissals that must not be recreated. */
  readonly toasts: Map<FileUploadToastKind, ToastRef<IFileUploadToastData, undefined>>;
}
