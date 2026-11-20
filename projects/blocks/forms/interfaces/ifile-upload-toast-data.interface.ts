import type { UrlTree } from '@angular/router';

import type { IFileUploadLabels } from '@forms/interfaces/ifile-upload-labels.interface';
import type { FileUploadToastKind } from '@forms/types/file-upload.types';

/** Live upload status delivered to the existing toast presentation host. */
export interface IFileUploadToastData {
  /** Whether the notification shows live progress, successful uploads, or failures. */
  readonly kind: FileUploadToastKind;
  /** Total files submitted by this upload or retry request. */
  readonly total: number;
  /** Successful file transfers. */
  readonly uploaded: number;
  /** Failed files from this request. */
  readonly failed: number;
  /** Canceled transfers. */
  readonly canceled: number;
  /** Whether every active transfer in this batch is paused. */
  readonly paused: boolean;
  /** Request percentage, or null when at least one active transfer has unknown progress. */
  readonly progress: number | null;
  /** Names relevant to the current progress or outcome, in request order. */
  readonly filenames: readonly string[];
  /** Link to retryable files in this batch, or null when no failed row remains available. */
  readonly returnUrl: UrlTree | null;
  /** Retry the remaining failed files when the application has no return route. */
  readonly retry: (() => void) | null;
  /** Translated labels shared with the upload surface. */
  readonly labels?: IFileUploadLabels;
}
