import type { IFileUploadAttempt } from '@forms/interfaces/ifile-upload-attempt.interface';

/** Files to transfer together or independently in one application handler call. */
export interface IFileUploadRequest {
  /** Original batch ID, preserved on retry. */
  readonly batchId: string;
  /** Whether the user explicitly retried a failed file. */
  readonly retry: boolean;
  /** Files included in this call, each with independent cancellation and progress reporting. */
  readonly files: readonly IFileUploadAttempt[];
}
