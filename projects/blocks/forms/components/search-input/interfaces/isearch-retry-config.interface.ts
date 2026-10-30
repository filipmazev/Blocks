import { ResolvableText } from '@filip.mazev/blocks/core';
import { ButtonColor, ButtonVariant } from '../../../types/form.types';

/** Optional presentation for the search request's retry action. */
export interface ISearchRetryConfig {
  /** Accessible action name. Defaults to the resolved retryLabel and stays stable while loading. */
  ariaLabel?: ResolvableText;
  /** Blocks button variant. Defaults to text. */
  variant?: ButtonVariant;
  /** Semantic button color. Defaults to primary. */
  color?: ButtonColor;
  /** Whether to draw a button outline. Defaults to false. */
  outlined?: boolean;
  /** Additional button classes. Defaults to an empty string. */
  buttonClass?: string;
}
