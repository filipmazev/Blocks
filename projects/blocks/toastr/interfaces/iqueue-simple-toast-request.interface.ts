import { ResolvableText } from '@filip.mazev/blocks/core';

import { ToastPosition } from '@toastr/types/toastr.types';

/**
 * Describes the queue simple toast request contract.
 */
export interface IQueueSimpleToastRequest {
  /** Title or heading displayed for this item. Optional. */
  title?: ResolvableText;
  /** Message text shown in the notification; supports the shared translation contract. */
  message: ResolvableText;
  /** Whether the toast animates. Optional; omission uses the shared toast setting and accessibility policy. */
  animate?: boolean;
  /** Toast placement in the viewport. Optional; omission uses the shared toast position. */
  position?: ToastPosition;
  /** Automatic dismissal delay in milliseconds; zero keeps the toast open. Optional; omission uses the shared duration. */
  durationInMs?: number;
  /** Whether to render a dismissal button. Optional; omission uses the shared toast setting. */
  showCloseButton?: boolean;
  /** Whether to show progress toward automatic dismissal. Optional; retains the historical property spelling. */
  showProgessBar?: boolean;
}
