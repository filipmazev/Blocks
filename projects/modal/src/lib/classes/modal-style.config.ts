import { IModalStyleConfig } from "../interfaces/imodal-style-config.interface";
import { IBottomSheetModalConfig } from "../interfaces/ibottom-sheet-modal-config.interface";
import { BreakpointKey, ModalLayout } from "../types/modal.types";

export class ModalStyleConfig implements IModalStyleConfig {
    public layout: ModalLayout;
    public breakpoints?: Partial<Record<BreakpointKey, ModalLayout>>;

    public animate: boolean;
    public hasBackdrop: boolean;
    public closeDelay?: number;
    public showCloseButton?: boolean;

    public mobileConfig: IBottomSheetModalConfig;

    public contentWrapper: boolean;

    public wrapperClasses: string;
    public wrapperStyles: string;

    public overrideFullHeight: boolean;

    constructor(config?: IModalStyleConfig) {
        this.layout = config?.layout ?? "center";
        this.breakpoints = config?.breakpoints;

        this.animate = config?.animate ?? true;
        this.hasBackdrop = config?.hasBackdrop ?? true;
        this.closeDelay = config?.closeDelay;
        this.showCloseButton = config?.showCloseButton ?? true;

        this.mobileConfig = config?.mobileConfig ?? {};

        this.contentWrapper = config?.contentWrapper ?? true;

        this.wrapperClasses = config?.wrapperClasses ?? "";
        this.wrapperStyles = config?.wrapperStyles ?? "";

        this.overrideFullHeight = config?.overrideFullHeight ?? false;
    }
}
