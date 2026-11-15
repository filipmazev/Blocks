import type { ISimpleToastData } from '@filip.mazev/blocks/toastr';

import { ToastRef } from '@filip.mazev/blocks/toastr';

/** Create a local notification reference with deterministic content and no automatic dismissal or animation. */
export function createPreviewToastRef(): ToastRef<ISimpleToastData, undefined> {
  return new ToastRef<ISimpleToastData, undefined>({
    data: { title: 'Saved', message: 'Your changes are ready.', type: 'success', icon: { name: 'circle-check' } },
    animate: false,
    durationInMs: 0,
    swipeToDismiss: false,
    showProgressBar: false,
    showCloseButton: true
  });
}
