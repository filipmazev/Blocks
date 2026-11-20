import type { IFileUploadItem } from '@forms/interfaces/ifile-upload-item.interface';

/** The notification snapshot for a file in one transport call. */
export interface IFileUploadRunFile extends Pick<IFileUploadItem, 'status' | 'progress' | 'paused'> {
  /** Browser filename without the underlying File, which can be released when its row is removed. */
  readonly name: string;
  /** Why the file no longer belongs to the current row for this run, if applicable. */
  readonly availability?: 'removed' | 'retried';
}
