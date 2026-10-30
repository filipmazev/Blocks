import { ResolvableText } from '@filip.mazev/blocks/core';
import { ITagConfig } from '@filip.mazev/blocks/primitives';
import { IconName } from '@filip.mazev/blocks/icons';

/** An option whose value is independent from its translated presentation. */
export interface IBxSelectOption<T> {
  /** Visible text or a translation key. */
  label: ResolvableText;
  /** Value stored by the form; provide stable keys or compareWith for object values. */
  value: T;
  /** Prevents user selection. Defaults to false. */
  disabled?: boolean;
  /** Optional decorative option icon. */
  icon?: IconName;
  /** Per-option tag appearance when selectionDisplay is tags. */
  tagConfig?: ITagConfig;
  /** Optional group heading, supporting translations. */
  group?: ResolvableText;
  /** Disables options in the associated group. Defaults to false. */
  groupDisabled?: boolean;
}
