import { InputSignal, OutputEmitterRef, Signal, TemplateRef } from '@angular/core';

import { ModalConfig } from '@modal/classes/modal-config';
import { ModalBottomSheet } from '@modal/components/views/bottom-sheet/modal-bottom-sheet';
import { ModalCloseMode } from '@modal/types/modal.types';

/**
 * Interface for the Modal View
 * @typeParam D The type of data passed to the modal
 * @typeParam R Type represented by R.
 */
export interface IModalView<D, R> {
  /** The input signal for the header template of the modal */
  headerTemplate: InputSignal<TemplateRef<void> | null>;
  /** The input signal for the footer template of the modal */
  footerTemplate: InputSignal<TemplateRef<void> | null>;

  /** The input signal for the modal configuration */
  config: InputSignal<ModalConfig<D, R> | undefined>;
  /** Stable identifier used to distinguish this item from its peers. */
  id: InputSignal<string | null>;
  /** The input signal indicating whether the modal is open */
  isOpen: InputSignal<boolean>;
  /** The input signal indicating whether the modal has animations enabled */
  isAnimated: InputSignal<boolean>;
  /** The input signal indicating whether the bottom sheet modal is active */
  isBottomSheetModalActive: InputSignal<boolean>;
  /** The input signal for the animation duration of the modal */
  animationDuration: InputSignal<number>;
  /** The input signal indicating whether the modal has default content wrapper class */
  hasDefaultContentWrapperClass: InputSignal<boolean>;
  /** The input signal indicating whether the modal has a banner */
  hasBanner: InputSignal<boolean>;

  /** The output emitter reference for the close event of the modal */
  close: OutputEmitterRef<ModalCloseMode | undefined>;

  /** The signal containing the bottom sheet modal components */
  bottomSheet: Signal<readonly ModalBottomSheet[]>;

  /** The signal for the modal CSS classes */
  modalClasses: Signal<{ [key: string]: boolean }>;
}
