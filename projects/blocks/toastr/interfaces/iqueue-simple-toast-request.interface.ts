import type { IIconData } from '@filip.mazev/blocks/icons';

import { ResolvableText } from '@filip.mazev/blocks/core';

import { ToastPosition } from '@toastr/types/toastr.types';

/**
 * Describes the queue simple toast request contract.
 */
export interface IQueueSimpleToastRequest {
  /** Optional translatable title. Null or omission displays only the message. */
  title?: ResolvableText | null;
  /** Message text shown in the notification; supports the shared translation contract. */
  message: ResolvableText;
  /** Optional leading icon; null omits it. Icon settings are retained during icon loading. */
  icon?: IIconData | null;
  /** Show the shared spinner in the icon area; defaults to false. Does not pause or extend the toast lifetime. */
  loading?: boolean;
  /** Accessible icon-loading label with translation support. Defaults to Loading through the shared spinner. */
  loadingLabel?: ResolvableText;
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
