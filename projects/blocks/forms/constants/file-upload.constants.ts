import type { IFileUploadLabels } from '@forms/interfaces/ifile-upload-labels.interface';

/** Default accepted PDF and image formats for file picker and drop validation. */
export const FILE_UPLOAD_ACCEPTED_TYPES: readonly string[] = Object.freeze([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
  '.pdf',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp'
]);

export const FILE_UPLOAD_LABELS = {
  drop: 'Drag files here',
  browse: 'Browse files',
  upload: 'Upload',
  readOnly: 'Read only',
  queued: 'Ready to upload',
  uploading: 'Uploading',
  paused: 'Paused',
  pause: 'Pause',
  resume: 'Resume',
  pauseFailed: 'Could not change upload state',
  uploaded: 'Uploaded',
  failed: 'Upload failed',
  canceled: 'Canceled',
  retry: 'Retry',
  cancel: 'Cancel',
  remove: 'Remove',
  clearAll: 'Clear all',
  invalidType: 'Unsupported file type',
  invalidSize: 'File is too large',
  invalidCount: 'File limit reached',
  reviewFiles: 'Review files',
  filenameSeparator: ', '
} satisfies Readonly<
  Record<
    Exclude<
      keyof IFileUploadLabels,
      'hint' | 'fileLabel' | 'toastTitle' | 'uploadedCount' | 'failedCount' | 'canceledCount' | 'successMessage' | 'failureMessage'
    >,
    string
  >
>;
