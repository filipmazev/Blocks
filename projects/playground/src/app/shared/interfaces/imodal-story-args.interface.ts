import type { BreakpointKey } from '@filip.mazev/blocks/core';
import type { ModalLayout } from '@filip.mazev/blocks/modal';

export interface IModalStoryArgs {
  /** Initial modal layout. Layout changes apply to the next opening. */
  layout: ModalLayout;
  /** Animate entry and exit, subject to the shared reduced-motion preference. */
  animate: boolean;
  /** Show the modal backdrop. */
  hasBackdrop: boolean;
  /** Show the built-in close action. This can also be patched while open. */
  showCloseButton: boolean;
  /** Heading inside the example content. */
  title: string;
  /** Configured modal header. An empty string demonstrates headerless naming. */
  headerText: string;
  /** Prevent user dismissal; the example's programmatic actions remain available. */
  disableClose: boolean;
  /** Prevent dismissal when clicking the backdrop. */
  disableCloseOnBackdropClick: boolean;
  /** Ask for confirmation before cancellation, including swipes and Escape. */
  hasConfirmCloseGuard: boolean;
  /** Responsive layout overrides using Blocks breakpoint names. */
  breakpoints: Partial<Record<BreakpointKey, ModalLayout>>;
}
