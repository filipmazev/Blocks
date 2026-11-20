import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';

/** Optional upload surface action, with icon slots taking precedence over configured icons. */
export interface IFileUploadButton {
  /** Open the picker or submit staged files. Defaults to browse. Manual mode always provides a submit action. */
  readonly action?: 'browse' | 'upload';
  /** Optional translated label. Defaults to the configured Browse files or Upload label for the selected action. */
  readonly label?: ResolvableText;
  /** Optional leading icon. Overridden by projected bxIconStart content. */
  readonly iconStart?: IconName;
  /** Optional trailing icon. Overridden by projected bxIconEnd content. */
  readonly iconEnd?: IconName;
}
