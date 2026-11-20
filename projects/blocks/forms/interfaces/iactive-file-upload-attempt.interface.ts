import type { FileUploadPauseHandler } from '@forms/types/file-upload.types';

/** Internal cancellation and optional pause integration for the current attempt. */
export interface IActiveFileUploadAttempt {
  /** Invalidates transfer and control requests when the attempt ends through cancellation. */
  readonly abortController: AbortController;
  /** Transport callback for pause and resume, when registered. */
  pauseHandler?: FileUploadPauseHandler;
}
