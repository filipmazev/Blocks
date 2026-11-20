import type { ResolvableText } from '@filip.mazev/blocks/core';

/** Optional translated text for the drop zone, validation, row state, and notifications. */
export interface IFileUploadLabels {
  /** Drop zone instruction. Defaults to 'Drag files here'. */
  readonly drop?: ResolvableText;
  /** File picker action. Defaults to 'Browse files'. */
  readonly browse?: ResolvableText;
  /** Manual start action. Defaults to 'Upload'. */
  readonly upload?: ResolvableText;
  /** Optional extra instructions associated with the picker. */
  readonly hint?: ResolvableText;
  /** Describes the focusable file picker while edits are blocked. Defaults to 'Read only'. */
  readonly readOnly?: ResolvableText;
  /** Queued file state. Defaults to 'Ready to upload'. */
  readonly queued?: ResolvableText;
  /** In-progress state and progress bar name. Defaults to 'Uploading'. */
  readonly uploading?: ResolvableText;
  /** Active transfer with confirmed pause. Defaults to 'Paused'. */
  readonly paused?: ResolvableText;
  /** Accessible pause action. Defaults to 'Pause'. */
  readonly pause?: ResolvableText;
  /** Accessible resume action. Defaults to 'Resume'. */
  readonly resume?: ResolvableText;
  /** Visible failure text when a pause or resume request fails. Defaults to 'Could not change upload state'. */
  readonly pauseFailed?: ResolvableText;
  /** Successful file state. Defaults to 'Uploaded'. */
  readonly uploaded?: ResolvableText;
  /** Fallback failed file state. Defaults to 'Upload failed'. */
  readonly failed?: ResolvableText;
  /** Canceled file state. Defaults to 'Canceled'. */
  readonly canceled?: ResolvableText;
  /** Retry action. Defaults to 'Retry'. */
  readonly retry?: ResolvableText;
  /** Accessible X button name during an active upload. Defaults to 'Cancel'. */
  readonly cancel?: ResolvableText;
  /** Accessible X button name and swipe command label. Defaults to 'Remove'. */
  readonly remove?: ResolvableText;
  /** Action that removes all removable files. Defaults to 'Clear all'. */
  readonly clearAll?: ResolvableText;
  /** Rejected type message. Defaults to 'Unsupported file type'. */
  readonly invalidType?: ResolvableText;
  /** Rejected size message. Defaults to 'File is too large'. Receives maxFileSize in bytes. */
  readonly invalidSize?: ResolvableText;
  /** Rejected count message. Defaults to 'File limit reached'. Receives maxFiles. */
  readonly invalidCount?: ResolvableText;
  /** Accessible label for a file action or progress bar. Receives action and fileName. Defaults to the action followed by the filename. */
  readonly fileLabel?: ResolvableText;
  /** Optional context shown below the status headline in upload notifications. Defaults to no context line. */
  readonly toastTitle?: ResolvableText;
  /** Uploaded count line. Receives count and total. Defaults to 'count / total uploaded'. */
  readonly uploadedCount?: ResolvableText;
  /** Failed count shown while uploading. Receives count and total. Defaults to 'count / total failed'. */
  readonly failedCount?: ResolvableText;
  /** Action linking to failed files on the upload page. Defaults to 'Review files'. */
  readonly reviewFiles?: ResolvableText;
  /** Separator between filenames in a toast. Defaults to a comma and a space. */
  readonly filenameSeparator?: ResolvableText;
  /** Success notification message. Receives count and total. Defaults to 'count files successfully uploaded' with singular support. */
  readonly successMessage?: ResolvableText;
  /** Failure notification message. Receives count and total. Defaults to 'count uploads failed' with singular support. */
  readonly failureMessage?: ResolvableText;
  /** Canceled count line. Receives count and total. Defaults to 'count / total canceled'. */
  readonly canceledCount?: ResolvableText;
}
