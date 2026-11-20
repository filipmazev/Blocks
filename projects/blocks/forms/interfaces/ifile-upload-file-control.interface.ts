import type { IFileUploadItem } from '@forms/interfaces/ifile-upload-item.interface';

/** A reactive session snapshot with ready-to-bind controls for one file in a custom upload UI. */
export interface IFileUploadFileControl extends IFileUploadItem {
  /** Stable ID of the submitted batch. Undefined while the file is staged. */
  readonly batchId: string | undefined;
  /** Whether its active attempt can accept a pause request. False while paused or awaiting confirmation. */
  readonly canPause: boolean;
  /** Whether its active attempt can accept a resume request. False while awaiting confirmation. */
  readonly canResume: boolean;
  /** Whether this file has a failed attempt that can be retried. */
  readonly canRetry: boolean;
  /** Whether the active attempt can be canceled through the session. */
  readonly canCancel: boolean;
  /** Whether this file can be removed. Removing an active file requires cancellation support and aborts its transfer. */
  readonly canRemove: boolean;
  /** Requests pause for the current attempt. The next snapshot reflects pending and confirmed state. */
  readonly pause: () => void;
  /** Requests resume for the current attempt. The next snapshot reflects pending and confirmed state. */
  readonly resume: () => void;
  /** Retries this file if it is still failed, preserving its file and batch IDs. */
  readonly retry: () => void;
  /** Cancels the current attempt if enabled and leaves the canceled file in the session. */
  readonly cancel: () => void;
  /** Removes the file from the staged list or submitted batch. */
  readonly remove: () => void;
}
