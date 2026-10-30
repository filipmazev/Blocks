import { ResolvableText } from '@filip.mazev/blocks/core';
import { ButtonColor, ButtonVariant } from '../../../../types/form.types';
import { LoadMoreButtonMode } from '../types/load-more.types';

/** Appearance and behavior shared by paginated surfaces. All properties are optional. */
export interface ILoadMoreConfig {
  /** Auto shows the button when items cannot scroll; always keeps an explicit action. Defaults to auto. */
  buttonMode?: LoadMoreButtonMode;
  /** Normal action text, supporting translation keys. Defaults to Load more. */
  text?: ResolvableText;
  /** Text while the application is loading. Defaults to Loading. */
  loadingText?: ResolvableText;
  /** Optional retry text. Without a resolved label, reuse text with a retry icon. */
  retryText?: ResolvableText;
  /** Optional accessible action name; otherwise the visible text names the button. */
  ariaLabel?: ResolvableText;
  /** Button variant. Defaults to text. */
  variant?: ButtonVariant;
  /** Button intent color. Defaults to primary. */
  color?: ButtonColor;
  /** Whether to draw the button outline. Defaults to false. */
  outlined?: boolean;
  /** Consumer CSS classes for the button. Defaults to an empty string. */
  buttonClass?: string;
  /** Consumer CSS classes for the footer. Defaults to an empty string. */
  footerClass?: string;
  /** Distance in pixels from the scroll end at which to request a page. Defaults to 32. */
  threshold?: number;
}
