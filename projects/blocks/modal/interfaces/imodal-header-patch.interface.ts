import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { IIconData } from '@filip.mazev/blocks/icons';

/** Partial updates to a modal heading, preserving any properties that are not supplied. */
export interface IModalHeaderPatch {
  /** New heading text, with shared translation support; null clears the text while retaining the icon. */
  text?: ResolvableText | null;
  /** Merge icon settings; null removes the icon. A new icon without a name defaults to info. */
  icon?: Partial<IIconData> | null;
  /** Replace only the icon with the shared spinner while true; the configured icon is retained. Defaults to false. */
  loading?: boolean;
  /** Accessible icon-loading label with translation support. Defaults to Loading through the shared spinner. */
  loadingLabel?: ResolvableText;
}
