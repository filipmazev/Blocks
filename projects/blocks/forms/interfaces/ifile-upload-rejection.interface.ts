import type { FileUploadRejectionReason } from '@forms/types/file-upload.types';

/** A file rejected by selection validation, before an upload attempt exists. */
export interface IFileUploadRejection {
  /** The rejected browser file. */
  readonly file: File;
  /** Rule responsible for rejection. */
  readonly reason: FileUploadRejectionReason;
}
