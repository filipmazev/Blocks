import { InputSignal, OutputEmitterRef, QueryList, Signal, TemplateRef } from "@angular/core";
import { ModalConfig } from "../classes/modal-config";
import { ModalBottomSheet } from "../components/views/bottom-sheet/modal-bottom-sheet";
import { ModalCloseMode } from "../types/modal.types";

/**
 * Interface for the Modal View
 * @param D The type of data passed to the modal
 * @param {InputSignal<TemplateRef<any> | null>} headerTemplate The input signal for the header template of the modal
 * @param {InputSignal<TemplateRef<any> | null>} footerTemplate The input signal for the footer template of the modal
 * @param {InputSignal<ModalConfig<D> | undefined>} config The input signal for the modal configuration
 * @param {InputSignal<boolean>} isOpen The input signal indicating whether the modal is open
 * @param {InputSignal<boolean>} isAnimated The input signal indicating whether the modal has animations enabled
 * @param {InputSignal<boolean>} isBottomSheetModalActive The input signal indicating whether the bottom sheet modal is active
 * @param {InputSignal<number>} animationDuration The input signal for the animation duration of the modal
 * @param {InputSignal<boolean>} hasDefaultContentWrapperClass The input signal indicating whether the modal has default content wrapper class
 * @param {InputSignal<boolean>} hasBanner The input signal indicating whether the modal has a banner
 * @param {OutputEmitterRef<ModalCloseMode | undefined>} close The output emitter reference for the close event of the modal
 * @param {QueryList<ModalBottomSheet>} bottomSheet The query list of bottom sheet modals
 * @param {Signal<{ [key: string]: boolean }>} modalClasses The signal for the modal CSS classes
 */
export interface IModalView<D> {
    headerTemplate: InputSignal<TemplateRef<any> | null>;
    footerTemplate: InputSignal<TemplateRef<any> | null>;
    
    config: InputSignal<ModalConfig<D> | undefined>;
    isOpen: InputSignal<boolean>;
    isAnimated: InputSignal<boolean>;
    isBottomSheetModalActive: InputSignal<boolean>;
    animationDuration: InputSignal<number>;
    hasDefaultContentWrapperClass: InputSignal<boolean>;
    hasBanner: InputSignal<boolean>;

    close: OutputEmitterRef<ModalCloseMode | undefined>;

    bottomSheet: QueryList<ModalBottomSheet>;

    modalClasses: Signal<{ [key: string]: boolean }>;
}