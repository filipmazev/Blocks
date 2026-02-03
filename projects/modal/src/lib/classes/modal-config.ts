import { EMPTY_STRING } from "../constants/modal-common.constants";
import { IModalConfirmCloseConfig } from "../interfaces/imodal-confirm-close.interface";
import { IModalConfig } from "../interfaces/imodal-config.interface";
import { IModalStyleConfig } from "../interfaces/imodal-style-config.interface";
import { Modal } from "./modal";
import { ModalStyleConfig } from "./modal-style.config";
import { uuidv4 } from "@filip.mazev/blocks-core";

export class ModalConfig<
    D = unknown,
    ConfirmModalData = any,
    ConfirmModal extends Modal<ConfirmModalData, undefined> = Modal<ConfirmModalData, undefined>> {
    public open: boolean;

    public afterClose?: Function;
    public confirmCloseConfig?: IModalConfirmCloseConfig<ConfirmModalData, ConfirmModal>;

    public disableClose: boolean;
    public disableCloseOnBackdropClick: boolean;
    public disableCloseOnNavigation: boolean;

    public enableExtremeOverflowHandling?: boolean;
    public webkitOnlyOverflowMobileHandling?: boolean;

    public data: D | null;

    public style: ModalStyleConfig;

    public bannerText: string;

    public contentClasses: string;
    public contentStyles: string;

    public disableConsoleWarnings: boolean;
    public disableConsoleInfo: boolean;

    public id: string;

    constructor(config?: IModalConfig<D, ConfirmModalData, ConfirmModal>) {
        this.open = config?.open ?? true;

        this.afterClose = config?.afterClose;

        this.confirmCloseConfig = config?.confirmCloseConfig;

        this.disableClose = config?.disableClose ?? false;
        this.disableCloseOnBackdropClick = config?.disableCloseOnBackdropClick ?? false;
        this.disableCloseOnNavigation = config?.disableCloseOnNavigation ?? false;

        this.enableExtremeOverflowHandling = config?.enableExtremeOverflowHandling ?? false;
        this.webkitOnlyOverflowMobileHandling = config?.webkitOnlyOverflowMobileHandling ?? true;

        this.data = config?.data ?? null;
        this.style = new ModalStyleConfig(config?.style);

        this.bannerText = config?.bannerText ?? EMPTY_STRING;

        this.contentClasses = config?.contentClasses ?? EMPTY_STRING;
        this.contentStyles = config?.contentStyles ?? EMPTY_STRING;

        this.disableConsoleWarnings = config?.disableConsoleWarnings ?? false;
        this.disableConsoleInfo = config?.disableConsoleInfo ?? false;

        this.id = config?.id ?? uuidv4();
    }
}
