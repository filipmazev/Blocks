import type { BreakpointKey } from '@filip.mazev/blocks/core';
import type { ModalLayout } from '@filip.mazev/blocks/modal';

export interface IModalStoryArgs {
  /** Initial modal layout. Layout changes apply to the next opening. */
  layout: ModalLayout;
  /** Accessible close action text. */
  closeLabel: string;
  /** Whether route navigation may close the dialog. */
  disableCloseOnNavigation: boolean;
  /** Whether confirmation guards apply only to cancel actions. */
  closeGuardOnlyOnCancel: boolean;
  /** Delay before removal in milliseconds. */
  closeDelay: number;
  /** Keep the standard content padding. */
  contentWrapper: boolean;
  /** Override the wrapper with application CSS declarations. */
  wrapperStyles: string;
  /** Application CSS class for the wrapper. */
  wrapperClasses: string;
  /** Application CSS declarations for modal content. */
  contentStyles: string;
  /** Use the available viewport height. */
  overrideFullHeight: boolean;
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
