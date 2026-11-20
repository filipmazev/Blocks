import type { DestroyRef } from '@angular/core';

import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrGlobalSettingsService, ToastrService } from '@filip.mazev/blocks/toastr';

import { FileUploadSession } from '@forms/classes/file-upload-session';
import { IFileUploadSessionOptions } from '@forms/interfaces/ifile-upload-session-options.interface';

/** Creates independent file upload sessions scoped to an application-chosen owner. */
@Injectable({ providedIn: 'root' })
export class FileUploadService {
  private readonly router = inject(Router, { optional: true });
  private readonly toastrGlobalSettingsService = inject(ToastrGlobalSettingsService);
  private readonly toastrService = inject(ToastrService);

  /**
   * Create a queue, upload adapter and notification state. Use a longer-lived owner to keep uploads available across navigation.
   * @param options - Application transport and optional session features.
   * @param owner - Optional lifetime to bind to the session. When absent, call destroy() when the session is no longer needed.
   * @returns An independent upload session ready to bind to one or more upload views.
   */
  public createSession(options: IFileUploadSessionOptions, owner?: DestroyRef): FileUploadSession {
    const session = new FileUploadSession(options, this.toastrService, this.toastrGlobalSettingsService, this.router);

    owner?.onDestroy(() => session.destroy());

    return session;
  }
}
