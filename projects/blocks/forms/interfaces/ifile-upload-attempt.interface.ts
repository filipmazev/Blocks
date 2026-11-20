import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { FileUploadPauseHandler } from '@forms/types/file-upload.types';

/** One upload attempt, with scoped reporting functions for HTTP events, polling or another source. */
export interface IFileUploadAttempt {
  /** Stable file ID, shared by all retries within its batch. */
  readonly id: string;
  /** Original browser file to send to the application's backend. */
  readonly file: File;
  /** Aborts when this attempt is canceled or its session is destroyed. Forward it to the transport or use it to stop polling. */
  readonly signal: AbortSignal;
  /** Reports percentage on a 0–100 scale, or undefined when the total is unknown. Updates are ignored after settlement, while paused, or when non-finite. */
  readonly reportProgress: (percent: number | undefined) => void;
  /** Enables pause and resume for this attempt. Call only when the transport can pause and resume the same transfer. */
  readonly setPauseHandler: (handler: FileUploadPauseHandler) => void;
  /** Marks this attempt successful. Calling it after cancellation or settlement has no effect. */
  readonly complete: () => void;
  /** Marks this attempt failed with optional translated detail. Calling it after cancellation or settlement has no effect. */
  readonly fail: (message?: ResolvableText) => void;
}
