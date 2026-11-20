import type { IFileUploadLabels } from '@forms/interfaces/ifile-upload-labels.interface';
import type { IFileUploadNotifications } from '@forms/interfaces/ifile-upload-notifications.interface';
import type { FileUploadHandler } from '@forms/types/file-upload.types';

/** Transport and lifetime settings for a file upload session. */
export interface IFileUploadSessionOptions {
  /** Starts the application request for a batch or an individual retry. */
  readonly upload: FileUploadHandler;
  /** Expose cancellation for in-flight files. Defaults to false. The upload handler must honor each attempt's AbortSignal. */
  readonly cancelable?: boolean;
  /** Optional translated text shared by every view and toast for this session. */
  readonly labels?: IFileUploadLabels;
  /** Optional notification overrides. Set false to disable all notifications. */
  readonly notifications?: IFileUploadNotifications | false;
}
