import { EMPTY_STRING } from "../constants/generic-modal-common.constants";
import { IGenericModalStyleConfig } from "../interfaces/igeneric-modal-style-config.interface";
import { IGenericSwipeableModalConfig } from "../interfaces/igeneric-swipeable-modal-config";
import { ModalPoistion } from "../types/modal.types";

export class GenericModalStyleConfig implements IGenericModalStyleConfig {
    position: ModalPoistion;
    handleMobile: boolean;

    animate: boolean;
    hasBackdrop: boolean;
    closeDelay?: number;
    showCloseButton?: boolean;

    mobileConfig: IGenericSwipeableModalConfig;

    contentWrapper: boolean;

    wrapperClasses: string;
    wrapperStyles: string;

    overrideFullHeight: boolean;

    constructor(config?: IGenericModalStyleConfig) {
        this.position = config?.position ?? "center";
        this.handleMobile = config?.handleMobile ?? true;

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
