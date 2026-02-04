import { BreakpointKey, ModalLayout } from "../types/modal.types";
import { IBottomSheetModalConfig } from "./ibottom-sheet-modal-config";

/**
 * IModalStyleConfig
 * @param {center' | 'left' | 'right'} layout (optional) The layout of the modal (can be center, left, or right), will default to center
 * @param {Partial<Record<BreakpointKey, ModalLayout>>} breakpoints (optional) (optional) A map of responsive overrides. It defines specific layouts for screen widths less than or equal to specific breakpoints. Defaults to undefined.
 * @param {boolean} animate (optional) Whether the modal should have animations or not, will default to true
 * @param {boolean} hasBackdrop (optional) Whether the modal should have a backdrop or not, will default to true
 * @param {number} closeDelay (optional) The delay in milliseconds before the modal closes, will default to MODAL_DEFAULT_ANIM_DURATION (175)
 * @param {boolean} showCloseButton (optional) Whether to show the close button on the modal or not, will default to true
 * @param {IBottomSheetModalConfig} mobileConfig (optional) The configuration for the bottom-sheet modal, will default to an empty object
 * @param {boolean} contentWrapper (optional) Whether the content should be wrapped in a default-styled div or not, will default to true
 * @param {string} wrapperClasses (optional) The classes to apply to the wrapper of the modal
 * @param {string} wrapperStyles (optional) The styles to apply to the wrapper of the modal
 * @param {boolean} overrideFullHeight (optional) Whether the modal should override the full height of the modal or not, will default to false
 */
export interface IModalStyleConfig {
    layout?: ModalLayout;
    breakpoints?: Partial<Record<BreakpointKey, ModalLayout>>;

    animate?: boolean;
    hasBackdrop?: boolean;
    closeDelay?: number;
    showCloseButton?: boolean;

    mobileConfig?: IBottomSheetModalConfig;

    contentWrapper?: boolean;

    wrapperClasses?: string;
    wrapperStyles?: string;

    overrideFullHeight?: boolean;
}
