# File upload

A centered drop zone and keyboard-accessible file picker for application-owned uploads. Use it inline or place it in an existing Blocks SidePanel.

## Import

```ts
import { FileUpload, FileUploadService } from '@filip.mazev/blocks/forms';
```

Add `FileUpload` to your standalone component's imports. Import `IconContentDirective` from `@filip.mazev/blocks/primitives` when projecting icons.

## Usage

Create a session in the component or service that owns the upload request. This example posts each selected file and reports its outcome independently.

```ts
import { DestroyRef, inject } from '@angular/core';
import { FileUploadService, type FileUploadSession } from '@filip.mazev/blocks/forms';

private readonly destroyRef = inject(DestroyRef);
private readonly fileUploadService = inject(FileUploadService);

public readonly uploads: FileUploadSession = this.fileUploadService.createSession(
  {
    cancelable: true,
    upload: async ({ files }) => {
      await Promise.all(
        files.map(async (attempt) => {
          const body = new FormData();

          body.append('file', attempt.file);

          try {
            const response = await fetch('/api/attachments', { method: 'POST', body, signal: attempt.signal });

            if (response.ok) attempt.complete();
            else attempt.fail({ key: 'attachments.uploadFailed' });
          } catch {
            attempt.fail();
          }
        })
      );
    }
  },
  this.destroyRef
);
```

```html
<bx-file-upload
    [session]="uploads"
    [selection]="{ multiple: true, maxFiles: 5, maxFileSize: 10485760, additionalTypes: ['.docx'] }"
    [button]="{ label: { key: 'attachments.browse' }, iconStart: 'folder-open', iconEnd: 'plus' }" />
```

### Progress and long polling

The handler receives a batch ID and one or more file attempts. Each attempt includes a stable file ID, the browser `File`, an `AbortSignal`, and scoped
`reportProgress(percent)`, `complete()`, and `fail(message?)` callbacks. Send one request for the batch or one per file. Call `reportProgress` with a percentage
from HTTP upload events or backend polling. Pass `undefined` while the total is unknown. Reporting 100% leaves the file in the uploading state until the backend
confirms success.

- Returning a promise completes outstanding attempts when it resolves and fails them when it rejects. Call `complete()` or `fail()` on each attempt to report
  mixed results.
- Returning `void` keeps the attempts active until your application calls `complete()` or `fail()`. Use this when a job subscription or poller delivers updates
  separately.
- Retry starts a new attempt for the same file with the same batch and file IDs. It passes `retry: true`. If enabled, Cancel aborts that file's signal. Forward
  the signal to requests and use it to stop polling. Reports from an ended attempt are ignored.

Call `attempt.setPauseHandler((paused, signal) => ...)` when the transport can pause and resume the same transfer. The handler can apply the change
synchronously or return a promise for backend confirmation. While it is pending, the toggle is busy. A rejection keeps the last confirmed state and shows an
error. A paused file keeps its last reported progress until resumed.

### Notifications across navigation

Create the session in a service or other owner that outlives the upload page. Bind the same session on return. Configure `notifications.returnTo` with an
Angular `UrlTree` for the page that renders the upload view, including the batch ID:

```ts
const notifications: IFileUploadNotifications = {
    returnTo: (batchId) => this.router.createUrlTree(['/attachments'], { queryParams: { uploadBatch: batchId } })
};
```

On that page, pass the query parameter to `[focusBatch]`. The upload view focuses the batch's first Retry action once it renders. While away, one live toast
shows progress and counts. Once the batch settles, that same toast updates to show successes, for example **2 files successfully uploaded**. Failures appear in
a separate notification, for example **1 upload failed**. **Review files** opens the upload page when a return route is configured. Otherwise the notification
offers a labeled **Retry** icon button that retries the remaining failed files in the same batch. It stays open while it offers a retry. A retry reports only
the files included in that request. Progress notifications name the files in the request, and result notifications name the files for their respective outcome.

### Notification position

Set `notifications.position` on the session to place upload notifications. It accepts the same `ToastPosition` values as individual Toastr notifications.

```ts
const notifications: IFileUploadNotifications = { position: 'bottom-left' };
```

An explicit position overrides the application’s global Toastr position. When omitted or `undefined`, each new toast uses the current global position. The
progress toast stays in its original position when it updates to success. Use `durationInMs` for the session’s toast lifetime. Set `notifications.success` to
`false` to suppress success notifications, or set `notifications` to `false` to disable all notifications. Completion notifications also work without a
`returnTo` route.

### Build a custom upload UI

Create a session with `FileUploadService` as in the usage example. Send picked or dropped files to `uploads.select(files, selection)`. Use `uploads.start()` for
manual start. Your Angular template can render `uploads.files()` without mounting a `bx-file-upload` component. The exported `IFileUploadFileControl` snapshots
contain status, progress, errors, capability flags, and file-bound actions. Track rows by the stable file ID and read the latest snapshot as it updates.

```html
@for (file of uploads.files(); track file.id) {
<p><bdi>{{ file.file.name }}</bdi> · {{ file.status }}</p>
@if (file.status === 'uploading' && (!file.paused || file.progress !== undefined)) {
<bx-progress-bar
    [mode]="file.progress === undefined ? 'indeterminate' : 'determinate'"
    [value]="file.progress ?? 0"
    [label]="(file.paused ? 'Paused: ' : 'Uploading: ') + file.file.name" />
} @if (file.pausable) {
<button
    type="button"
    bx-button
    [disabled]="!file.canPause && !file.canResume"
    [loading]="file.pausePending ?? false"
    (click)="file.paused ? file.resume() : file.pause()">
    {{ file.paused ? 'Resume' : 'Pause' }}
</button>
} @if (file.canRetry) {
<button type="button" bx-button (click)="file.retry()">Retry</button>
} @if (file.canCancel) {
<button type="button" bx-button (click)="file.cancel()">Cancel</button>
} }
```

Import `Button` from Forms and `ProgressBar` from Primitives to run the template. Use `canRemove` and `file.remove()` to remove rows. A pause or resume remains
pending until the transport confirms it. If it fails, `pauseFailed` is set and the last confirmed pause state stays in effect. A retry preserves the file and
batch IDs while starting a new attempt. Custom UIs own their labels and accessibility text and can resolve the file’s `error` through `BX_I18N`.

## API

| Input or output         | Behavior                                                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `session`               | Required `FileUploadSession` created by `FileUploadService`.                                                                                                                                                       |
| `selection`             | Defaults to single-file manual start. `multiple`, `startMode`, `maxFiles`, `maxFileSize`, `acceptedTypes` and `additionalTypes` configure future selections. Size is in bytes. Count and size limits are optional. |
| `button`                | Optional styled action. Set `action` to `browse` or `upload`, with a label and leading or trailing icons. Manual mode supplies an Upload action when files are staged.                                             |
| `focusBatch`            | Optional batch ID for focusing a retry action after returning from a notification.                                                                                                                                 |
| `disabled`              | Disables UI actions and retains the selected files and current progress.                                                                                                                                           |
| `readonly` / `readOnly` | Both prevent edits while retaining a focusable picker action and inspectable state.                                                                                                                                |
| `filesRejected`         | Emits rejected files with `type`, `size`, or `count` reasons. Other valid files from that selection are accepted.                                                                                                  |

Default types are PDF, JPEG, PNG, and WebP. Set `acceptedTypes` to replace the list or `additionalTypes` to extend it. The picker and drop zone accept MIME
types, MIME wildcards, and dot-prefixed extensions. An empty `acceptedTypes` allows all types. Application endpoints should validate received files.

Single-file mode replaces a previously staged file when a new valid file is picked. With multiple files, manual mode accumulates one staged batch until Upload
is pressed. Automatic mode submits each accepted selection immediately. The count limit applies per batch.

`FileUploadSession` exposes read-only `staged()`, `batches()`, and `files()` signals. External controls can call `select()`, `start()`, `retry()`, `setPaused()`
and `cancel()`. Use `remove(fileId, batchId?)` for one file or `clearAll()` for all removable files. Call `clearBatch()` to release a settled batch and its
toast. Pass the owner's `DestroyRef` to `createSession()` for automatic cleanup, or call `destroy()` to abort active attempts and release resources.

## Appearance and customization

Optional projected `bxIconStart` and `bxIconEnd` content takes precedence over the corresponding button icons. Set `labels` on the session for live
`ResolvableText` overrides, including error, status, retry, and notification text. Count translations receive `count` and `total`. The hint and validation
messages follow the active `BX_I18N` adapter. Use `reviewFiles` for the failure navigation action, `filenameSeparator` for the filename list, and `fileLabel` to
localize per-file accessible names using the `action` and `fileName` parameters.

The surface uses semantic Blocks tokens. Override `--bx-file-upload-padding`, `--bx-file-upload-radius`, `--bx-file-upload-border-width`,
`--bx-file-upload-border`, `--bx-file-upload-background`, or `--bx-file-upload-row-background` on the component. The progress indicator supports the
[Progress Bar tokens](../../../primitives/components/progress-bar/README.md).

## Behavior and accessibility

Browse opens the native picker and remains available when the optional styled button is omitted. Drag feedback and failures use text and visual indicators.
Progress bars have per-file names and use the Blocks reduced-motion preference. Buttons have translated tooltips with a dwell delay. Clipped filenames in upload
rows and toasts stay on one line and show their full text on hover, keyboard focus, or tap. A row displays a Lucide file icon for its type or current outcome.
Readonly and disabled inputs block user actions while keeping the transfers visible.

Swipe a queued row right to left or select its X to remove it. Once submitted, a file is controlled through its row buttons. The X cancels an active upload when
cancellation is enabled, then disappears and leaves the **Canceled** row visible. The Pause button becomes Resume when pause is confirmed. For failures, the
same position displays a red Retry icon. **Clear all** removes every removable row and clears selection errors. Notifications retain their request totals after
individual removals. The retry link remains while a failed row is present. Removing the final row dismisses the toast.

## Playground

Open `/components/file-upload`. In **Examples**, select **Simulate upload** to start a two-file batch. Use the icon buttons to pause, resume or cancel. The file
with the long name fails on its first attempt. Hover over its clipped name in either tab to read the full filename. Select **Review files** in the failure toast
to return to the Retry action. In **Custom upload controls**, select **Upload sample file** to try the per-file API and the bottom-left notification override.
