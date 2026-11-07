import type { IIconData } from '@filip.mazev/blocks/icons';

import { ResolvableText } from '@filip.mazev/blocks/core';

import { SimpleToastType } from '@toastr/types/toastr.types';

/**
 * Describes the simple toast data contract.
 */
export interface ISimpleToastData {
  /** Optional title with translation support. Null clears it; omission displays only the message. */
  title?: ResolvableText | null;
  /** Message text shown in the notification; supports the shared translation contract. */
  message: ResolvableText;
  /** Semantic notification intent controlling its visual treatment. */
  type: SimpleToastType;
  /** Optional leading icon. Null clears it; omitted icons have no reserved area unless loading is explicitly configured. */
  icon?: IIconData | null;
  /** Replace only the icon area with the shared spinner. Defaults to false; the normal icon is retained. */
  loading?: boolean;
  /** Accessible icon-loading label with translation support. Defaults to Loading through the shared spinner. */
  loadingLabel?: ResolvableText;
}
