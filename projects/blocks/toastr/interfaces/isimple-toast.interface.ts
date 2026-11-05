import { ResolvableText } from '@filip.mazev/blocks/core';

import { SimpleToastType } from '@toastr/types/toastr.types';

/**
 * Describes the simple toast data contract.
 */
export interface ISimpleToastData {
  /** Title or heading displayed for this item. Optional. */
  title?: ResolvableText;
  /** Message text shown in the notification; supports the shared translation contract. */
  message: ResolvableText;
  /** Semantic notification intent controlling its visual treatment. */
  type: SimpleToastType;
}
