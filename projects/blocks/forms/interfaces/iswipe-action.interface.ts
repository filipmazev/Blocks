import type { TemplateRef } from '@angular/core';

import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { ButtonColor } from '@forms/types/form.types';
import type { SwipeActionCompletion } from '@forms/types/swipe-actions.types';

import type { ISwipeActionEvent } from './iswipe-action-event.interface';
import type { ISwipeFullActionConfig } from './iswipe-full-action-config.interface';

/** One command shared by swipe capsules and the automatic context menu. */
export interface ISwipeAction {
  /** Stable unique identifier across both sides of this item. */
  readonly id: string;
  /** Visible text under the capsule and beside the context icon; supports BX_I18N. */
  readonly label: ResolvableText;
  /** Optional Lucide icon centered inside the capsule and leading the context row; omit when iconTemplate supplies the visual. */
  readonly icon?: IconName;
  /** Custom noninteractive action visual; overrides icon in ordinary states. Pending, retry and completion feedback retain their established meaning. */
  readonly iconTemplate?: TemplateRef<unknown>;
  /** Semantic button intent. Defaults to primary, or danger for a destructive action. */
  readonly color?: ButtonColor;
  /** Blocks activation in both presentations. Defaults to false. */
  readonly disabled?: boolean;
  /** Displays busy feedback and blocks activation in both presentations. Defaults to false. */
  readonly loading?: boolean;
  /** Destructive commands also receive the existing danger context-row treatment. Defaults to normal. */
  readonly role?: 'normal' | 'destructive';
  /** Allow this command to stretch and activate on a full swipe when it is the physical outermost visible action. Defaults to true. Disabled/loading actions cannot activate. */
  readonly fullSwipe?: boolean;
  /** Optional per-command full-swipe overrides. Takes precedence over row configuration; destructive defaults require more travel. fullSwipe:false always disables activation. */
  readonly fullSwipeConfig?: ISwipeFullActionConfig;
  /** Successful completion behavior. Overrides swipeCompletion; defaults to collapsing actions. Dismiss animates and hides the row, then emits swipeDismissed for application-owned data removal. */
  readonly completion?: SwipeActionCompletion;
  /** Optional translated full retry label after handler rejection. Defaults to the row's retry prefix plus this action's label. Include the visible identifying action label. */
  readonly retryLabel?: ResolvableText;
  /** Optional retry icon after handler rejection. Defaults to rotate-cw. */
  readonly retryIcon?: IconName;
  /** Optional translated accessible name; include the exact visible label. Defaults to label. */
  readonly ariaLabel?: ResolvableText;
  /** Optional command handler. Returned promises keep the presentation busy until success applies completion behavior; a full swipe stays expanded while pending or failed. Rejection emits swipeActionError and exposes an explicit retry. */
  readonly handler?: (event: ISwipeActionEvent) => void | Promise<void>;
}
