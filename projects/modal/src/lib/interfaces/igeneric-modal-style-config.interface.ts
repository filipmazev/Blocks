import { ModalPoistion } from "../types/modal.types";
import { IGenericSwipeableModalConfig } from "./igeneric-swipeable-modal-config";

/**
 * IGenericModalStyleConfig
 * @param {center' | 'left' | 'right'} position (optional) The position of the modal (can be center, left, or right), will default to center
 * @param {boolean} handleMobile (optional) Whether the modal should open in a mobile configuration when going to a certain screen size
 * @param {boolean} animate (optional) Whether the modal should have animations or not, will default to true
 * @param {boolean} hasBackdrop (optional) Whether the modal should have a backdrop or not, will default to true
 * @param {number} closeDelay (optional) The delay in milliseconds before the modal closes, will default to GENERIC_MODAL_DEFAULT_ANIM_DURATION (175)
 * @param {IGenericSwipeableModalConfig} mobileConfig (optional) The configuration for the swipeable modal, will default to an empty object
 * @param {boolean} contentWrapper (optional) Whether the content should be wrapped in a default-styled div or not, will default to true
 * @param {string} wrapperClasses (optional) The classes to apply to the wrapper of the modal
 * @param {string} wrapperStyles (optional) The styles to apply to the wrapper of the modal
 * @param {boolean} overrideFullHeight (optional) Whether the modal should override the full height of the modal or not, will default to false
 */
export interface IGenericModalStyleConfig {
    position?: ModalPoistion;
    handleMobile?: boolean;

    animate?: boolean;
    hasBackdrop?: boolean;
    closeDelay?: number;
    showCloseButton?: boolean;

    mobileConfig?: IGenericSwipeableModalConfig;

    contentWrapper?: boolean;

    wrapperClasses?: string;
    wrapperStyles?: string;

    overrideFullHeight?: boolean;
}
