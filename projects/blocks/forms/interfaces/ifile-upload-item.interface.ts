import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { FileUploadStatus } from '@forms/types/file-upload.types';

/** Read-only snapshot of a selected file, retained across retries. */
export interface IFileUploadItem {
  /** Stable ID within the session. */
  readonly id: string;
  /** The selected file and its browser metadata. */
  readonly file: File;
  /** Current queue or transfer state. */
  readonly status: FileUploadStatus;
  /** Percentage on a 0–100 scale when available. */
  readonly progress?: number;
  /** Whether the active attempt registered support for pause and resume. */
  readonly pausable?: boolean;
  /** Last confirmed pause state, when an active attempt is paused. */
  readonly paused?: boolean;
  /** Whether a pause or resume request is awaiting transport confirmation. */
  readonly pausePending?: boolean;
  /** Whether the last pause or resume request failed and can be retried. */
  readonly pauseFailed?: boolean;
  /** Optional backend-provided failure details. */
  readonly error?: ResolvableText;
}
