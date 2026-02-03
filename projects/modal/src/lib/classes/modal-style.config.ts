import { EMPTY_STRING } from "../constants/modal-common.constants";
import { IModalStyleConfig } from "../interfaces/imodal-style-config.interface";
import { IBottomSheetModalConfig } from "../interfaces/ibottom-sheet-modal-config";
import { BreakpointKey, ModalLayout } from "../types/modal.types";

export class ModalStyleConfig implements IModalStyleConfig {
    layout: ModalLayout;
    breakpoints?: Partial<Record<BreakpointKey, ModalLayout>>;

    animate: boolean;
    hasBackdrop: boolean;
    closeDelay?: number;
    showCloseButton?: boolean;

    mobileConfig: IBottomSheetModalConfig;

    contentWrapper: boolean;

    wrapperClasses: string;
    wrapperStyles: string;

    overrideFullHeight: boolean;

    constructor(config?: IModalStyleConfig) {
        this.layout = config?.layout ?? "center";
        this.breakpoints = config?.breakpoints;

        this.animate = config?.animate ?? true;
        this.hasBackdrop = config?.hasBackdrop ?? true;
        this.closeDelay = config?.closeDelay;
        this.showCloseButton = config?.showCloseButton ?? true;

        this.mobileConfig = config?.mobileConfig ?? {};

        this.contentWrapper = config?.contentWrapper ?? true;

        this.wrapperClasses = config?.wrapperClasses ?? EMPTY_STRING;
        this.wrapperStyles = config?.wrapperStyles ?? EMPTY_STRING;

        this.overrideFullHeight = config?.overrideFullHeight ?? false;
    }
}
