import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { ModalLayout } from '@modal/types/modal.types';

/** Shared modal defaults accepted by ModalGlobalSettingsService.update(). All update properties are optional through Partial. */
export interface IModalGlobalSettings {
  /** Accessible close-action text; defaults to 'Close dialog'. Accepts plain strings and translation keys. */
  closeLabel: ResolvableText;
  /** Default presentation; initially center. */
  layout: ModalLayout;
  /** Decorative entrance/exit motion; initially true, subject to reduced-motion preferences. */
  animate: boolean;
  /** Include the dismissal backdrop; initially true. */
  hasBackdrop: boolean;
  /** Include the built-in close action; initially true. */
  showCloseButton: boolean;
  /** Use standard content padding and styling; initially true. */
  contentWrapper: boolean;
  /** Allow the content to override the normal height constraint; initially false. */
  overrideFullHeight: boolean;
  /** Prevent backdrop dismissal; initially false. */
  disableCloseOnBackdropClick: boolean;
  /** Keep tasks open during navigation; initially false. */
  disableCloseOnNavigation: boolean;
  /** Check guards only on cancellation; initially true. */
  closeGuardOnlyOnCancel: boolean;
}
