import type { ModalService } from '@filip.mazev/blocks/modal';
import type { IThemeConfirmDialogData } from '@playground/interfaces/itheme-confirm-dialog-data.interface';
import type { IThemeNameDialogData } from '@playground/interfaces/itheme-name-dialog-data.interface';

import { ThemeConfirmDialog } from '@playground/components/shared/theme-confirm-dialog/theme-confirm-dialog';
import { ThemeNameDialog } from '@playground/components/shared/theme-name-dialog/theme-name-dialog';

/** Open the shared naming dialog and resolve the validated name, or null on dismissal.
 * @param modalService - Owning modal service.
 * @param data - Dialog initialization data.
 */
export function openThemeNameDialog(modalService: ModalService, data: IThemeNameDialogData): Promise<string | null> {
  return new Promise((resolve) => {
    const ref = modalService.open<IThemeNameDialogData, string>(ThemeNameDialog, {
      header: { text: data.title },
      data,
      style: { layout: 'center', showCloseButton: false }
    });

    ref.afterClosed().subscribe((result) => resolve(result.state === 'confirm' ? (result.data ?? null) : null));
  });
}

/** Open the shared confirmation dialog and resolve true on explicit confirmation.
 * @param modalService - Owning modal service.
 * @param data - Dialog initialization data.
 */
export function openThemeConfirmDialog(modalService: ModalService, data: IThemeConfirmDialogData): Promise<boolean> {
  return new Promise((resolve) => {
    const ref = modalService.open<IThemeConfirmDialogData, boolean>(ThemeConfirmDialog, {
      header: { text: data.confirmLabel },
      data,
      style: { layout: 'center', showCloseButton: false }
    });

    ref.afterClosed().subscribe((result) => resolve(result.state === 'confirm'));
  });
}
