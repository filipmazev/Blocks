import type { IFileUploadItem } from '@forms/interfaces/ifile-upload-item.interface';

/** Files submitted together and retained for progress, outcome and retry. */
export interface IFileUploadBatch {
  /** Stable ID that an application can put in its return URL. */
  readonly id: string;
  /** Number of accepted files when this batch started. This total stays fixed after removals and retries. */
  readonly total: number;
  /** Files still in the list, in selection order. */
  readonly files: readonly IFileUploadItem[];
}
