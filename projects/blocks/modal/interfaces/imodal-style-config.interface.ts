import { BreakpointKey, ModalLayout } from '@modal/types/modal.types';

import { IBottomSheetModalConfig } from './ibottom-sheet-modal-config.interface';

/**
 * IModalStyleConfig
 */
export interface IModalStyleConfig {
  /** Modal presentation layout. Optional; omission uses the shared modal layout setting. */
  layout?: ModalLayout;
  /** (optional) (optional) A map of responsive overrides. It defines specific layouts for screen widths less than or equal to specific breakpoints. Defaults to undefined. */
  breakpoints?: Partial<Record<BreakpointKey, ModalLayout>>;

  /** (optional) Whether the modal should have animations or not, will default to true */
  animate?: boolean;
  /** (optional) Whether the modal should have a backdrop or not, will default to true */
  hasBackdrop?: boolean;
  /** (optional) The delay in milliseconds before the modal closes, will default to MODAL_DEFAULT_ANIM_DURATION (175) */
  closeDelay?: number;
  /** (optional) Whether to show the close button on the modal or not, will default to true */
  showCloseButton?: boolean;

  /** (optional) The configuration for the bottom-sheet modal, will default to an empty object */
  mobileConfig?: IBottomSheetModalConfig;

  /** (optional) Whether the content should be wrapped in a default-styled div or not, will default to true */
  contentWrapper?: boolean;

  /** (optional) The classes to apply to the wrapper of the modal */
  wrapperClasses?: string;
  /** (optional) The styles to apply to the wrapper of the modal */
  wrapperStyles?: string;

  /** (optional) Whether the modal should override the full height of the modal or not, will default to false */
  overrideFullHeight?: boolean;
}
