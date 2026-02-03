import { InputSignal, OutputEmitterRef, QueryList, Signal, TemplateRef } from "@angular/core";
import { ModalConfig } from "../classes/modal-config";
import { ModalBottomSheet } from "../components/views/bottom-sheet/modal-bottom-sheet";
import { ModalCloseMode } from "../types/modal.types";

export interface IModalView<D = unknown> {
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