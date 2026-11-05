/** Structural overlay boundaries are independent of numeric z-index values in nested contexts. */
export const lightBoundarySelector =
  '[data-bx-light-scope], dialog, [role="dialog"], [role="alertdialog"], [popover], .cdk-overlay-pane, .toast-container, bx-modal';

export const lightingOrigins = new WeakMap<HTMLElement, HTMLElement>();
