import { InputSignal, OutputEmitterRef, QueryList } from "@angular/core";
import { GenericModalConfig } from "../classes/generic-modal-config";
import { ModalSwipeable } from "../components/views/swipeable/modal-swipeable";
import { ModalCloseMode } from "../types/modal.types";

export interface IGenericModalView<D = unknown> {
    config: InputSignal<GenericModalConfig<D> | undefined>;
    isOpen: InputSignal<boolean>;
    isAnimated: InputSignal<boolean>;
    isSwipeableModalActive: InputSignal<boolean>;
    animationDuration: InputSignal<number>;
    hasDefaultContentWrapperClass: InputSignal<boolean>;
    hasBanner: InputSignal<boolean>;

    close: OutputEmitterRef<ModalCloseMode | undefined>;

    swipeableComponents: QueryList<ModalSwipeable>;

    get modalClasses(): { [key: string]: boolean };
}