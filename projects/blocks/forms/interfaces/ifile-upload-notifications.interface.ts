import type { UrlTree } from '@angular/router';

import type { ToastPosition } from '@filip.mazev/blocks/toastr';

/** Notification behavior for one application-owned upload session. */
export interface IFileUploadNotifications {
  /** Show a completed upload toast. Defaults to true. Set to false to suppress success notifications. Failures still offer retry. */
  readonly success?: boolean;
  /** Optional route builder that enables background progress. Include the batch ID so the destination can focus its first failed file. */
  readonly returnTo?: (batchId: string) => UrlTree;
  /** Position for this session’s progress, success, and failure toasts. When undefined, each new toast uses the current global Toastr position. */
  readonly position?: ToastPosition;
  /** Lifetime of a completed toast in milliseconds. Defaults to the application's Toastr duration when omitted. */
  readonly durationInMs?: number;
}
