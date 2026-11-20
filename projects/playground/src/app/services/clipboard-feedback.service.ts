import { Clipboard } from '@angular/cdk/clipboard';
import { inject, Injectable } from '@angular/core';

import type { ToastRef } from '@filip.mazev/blocks/toastr';

import { ModalRef } from '@filip.mazev/blocks/modal';
import { ToastrService } from '@filip.mazev/blocks/toastr';

import { CopyFeedback } from '@playground/components/shared/copy-feedback/copy-feedback';

@Injectable({ providedIn: 'root' })
export class ClipboardFeedbackService {
  private readonly clipboard = inject(Clipboard);
  private readonly modalRef = inject(ModalRef, { optional: true });
  private readonly toastrService = inject(ToastrService);

  private toast: ToastRef<undefined, undefined> | undefined;

  public copy(text: string): boolean {
    if (!this.clipboard.copy(text)) return false;

    if (this.toast?.state() === 'open' || this.toast?.state() === 'queued') {
      this.toast.patch({ durationInMs: 2400 });
    } else {
      this.toast = this.toastrService.queueToast<undefined, undefined, CopyFeedback>(CopyFeedback, {
        position: 'bottom-right',
        modal: this.modalRef ?? undefined,
        durationInMs: 2400,
        showCloseButton: false,
        showProgressBar: false,
        hasDefaultBackground: true
      });
    }

    return true;
  }
}
