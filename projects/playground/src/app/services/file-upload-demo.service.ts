import { DestroyRef, inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import type { FileUploadSession, IFileUploadAttempt, IFileUploadNotifications, IFileUploadRequest } from '@filip.mazev/blocks/forms';

import { FileUploadService } from '@filip.mazev/blocks/forms';

import { FILE_UPLOAD_REVIEW_SAMPLE_NAME } from '@playground/shared/constants/file-upload-story.constants';

@Injectable({ providedIn: 'root' })
export class FileUploadDemoService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly fileUploadService = inject(FileUploadService);
  private readonly router = inject(Router);

  public readonly session: FileUploadSession = this.createSession(this.destroyRef, {
    returnTo: (batchId) => this.router.createUrlTree(['/components/file-upload'], { queryParams: { uploadBatch: batchId } })
  });

  public unknownProgress: boolean = true;

  public createSession(owner: DestroyRef, notifications: IFileUploadNotifications): FileUploadSession {
    return this.fileUploadService.createSession(
      {
        upload: (request) => this.upload(request),
        cancelable: true,
        labels: { hint: 'PDF, JPEG, PNG, WebP, or text files' },
        notifications
      },
      owner
    );
  }

  //#region Helpers

  private upload(request: IFileUploadRequest): void {
    for (const attempt of request.files) this.simulate(attempt, request.retry);
  }

  private simulate(attempt: IFileUploadAttempt, retry: boolean): void {
    const fail = !retry && attempt.file.name === FILE_UPLOAD_REVIEW_SAMPLE_NAME;
    const finishAt = fail ? 70 : 100;

    let progress = this.unknownProgress ? -10 : 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const abort = (): void => {
      clearInterval(timer);
      timer = undefined;
    };

    const tick = (): void => {
      progress += 10;

      if (progress >= finishAt) {
        abort();
        attempt.signal.removeEventListener('abort', abort);

        if (fail) attempt.fail('The mock server rejected this attempt. Try again.');
        else attempt.complete();

        return;
      }

      attempt.reportProgress(progress);
    };

    if (!this.unknownProgress) attempt.reportProgress(progress);

    timer = setInterval(tick, 450);
    attempt.setPauseHandler((paused) => {
      abort();

      if (!paused) timer = setInterval(tick, 450);
    });
    attempt.signal.addEventListener('abort', abort, { once: true });
  }

  //#endregion
}
