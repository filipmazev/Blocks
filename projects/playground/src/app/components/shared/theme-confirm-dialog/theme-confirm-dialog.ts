import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { IThemeConfirmDialogData } from '@playground/interfaces/itheme-confirm-dialog-data.interface';

import { Button } from '@filip.mazev/blocks/forms';
import { Modal, ModalFooterDirective } from '@filip.mazev/blocks/modal';

/** Reusable confirmation dialog that returns true on explicit confirmation. */
@Component({
  selector: 'app-theme-confirm-dialog',
  imports: [Button, ModalFooterDirective],
  templateUrl: './theme-confirm-dialog.html',
  styleUrl: './theme-confirm-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeConfirmDialog extends Modal<IThemeConfirmDialogData, boolean> {
  protected confirm(): void {
    this.modal.close('confirm', true);
  }
}
