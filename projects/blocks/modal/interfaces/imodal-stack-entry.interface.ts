import type { ComponentType } from '@angular/cdk/portal';
import type { Signal } from '@angular/core';

import type { ModalCloseMode } from '@modal/types/modal.types';

import type { IModalConfig } from './imodal-config.interface';

/** Data-independent modal operations used by the service to manage a heterogeneous dialog stack. @internal */
export interface IModalStackEntry {
  /** Immutable application content type used by find(). */
  readonly componentType: ComponentType<unknown>;
  /** Current navigation dismissal policy without exposing application-specific data or results. */
  readonly config: Signal<Pick<IModalConfig<unknown, unknown>, 'disableCloseOnNavigation'>>;
  /**
   * Request closure without an application result.
   * @param state - Cancel or confirm mode.
   * @param result - No application result is supplied by the service.
   * @param forceClose - Whether guards should be bypassed.
   */
  close(state?: ModalCloseMode, result?: undefined, forceClose?: boolean): void;
  /**
   * Update the presentation depth after the stack changes.
   * @param depth - Zero-based depth, with zero representing the root dialog.
   */
  setNestingDepth(depth: number): void;
}
