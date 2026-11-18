import type { TemplateRef } from '@angular/core';

import { ResolvableText } from '@filip.mazev/blocks/core';
import { IconName } from '@filip.mazev/blocks/icons';
import { ITagConfig } from '@filip.mazev/blocks/primitives';

import type { ISelectOptionContext } from './iselect-option-context.interface';
import type { ISwipeAction } from './iswipe-action.interface';
import type { ISwipeFullActionConfig } from './iswipe-full-action-config.interface';

/** An option whose value is independent from its translated presentation.
 * @typeParam T - Form value represented by this option.
 */
export interface IBxSelectOption<T> {
  /** Visible text or a translation key. */
  label: ResolvableText;
  /** Value stored by the form; provide stable keys or compareWith for object values. */
  value: T;
  /** Prevents user selection. Defaults to false. */
  disabled?: boolean;
  /** Optional decorative option icon. */
  icon?: IconName;
  /** Optional trailing decorative icon. Custom end templates take precedence. */
  endIcon?: IconName;
  /** Optional custom leading visual, such as a logo or swatches; receives this option's context and overrides icon. Keep it noninteractive. */
  startTemplate?: TemplateRef<ISelectOptionContext<T>>;
  /** Optional custom trailing visual; receives this option's context and overrides endIcon. Keep it noninteractive. */
  endTemplate?: TemplateRef<ISelectOptionContext<T>>;
  /** Optional commands exposed by dragging this row left, with automatic keyboard/context-menu access. Defaults to none. */
  leftSwipeActions?: readonly ISwipeAction[];
  /** Optional commands exposed by dragging this row right, with automatic keyboard/context-menu access. Defaults to none. */
  rightSwipeActions?: readonly ISwipeAction[];
  /** Full-swipe activation policy for this row; defaults to true. Disabled/readonly controls block commands. */
  swipeFullAction?: boolean | ISwipeFullActionConfig;
  /** Per-option tag appearance when selectionDisplay is tags. */
  tagConfig?: ITagConfig;
  /** Optional group heading, supporting translations. */
  group?: ResolvableText;
  /** Disables options in the associated group. Defaults to false. */
  groupDisabled?: boolean;
}
