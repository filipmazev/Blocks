import { ResolvableText } from '@filip.mazev/blocks/core';
import { IIconData } from '@filip.mazev/blocks/icons';

/**
 * IModalHeaderConfig, the configuration for the modal header
 */
export interface IModalHeaderConfig {
  /** The text to be shown in the header as ResolvableText, this can be a string or an object with a translation key */
  text: ResolvableText;
  /** (optional) An icon to display to the left of the text, will default to undefined */
  icon?: IIconData;
  /** Replace only the icon area with the shared loading spinner while true. Defaults to false; preserves the configured icon. */
  loading?: boolean;
  /** Accessible icon-loading label with translation support. Defaults to Loading through the shared spinner. */
  loadingLabel?: ResolvableText;
}
