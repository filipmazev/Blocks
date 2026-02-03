import { IModalConfig } from "../interfaces/imodal-config.interface";
import { ModalStyleConfig } from "./modal-style.config";
import { ModalCloseGuard } from "./modal-close-guard";

export class ModalConfig<D = unknown> {
    public open: boolean;

    public afterClose?: Function;

    public closeGuard?: ModalCloseGuard;
    public closeGuardOnlyOnCancel?: boolean;

    public disableClose: boolean;
    public disableCloseOnBackdropClick: boolean;
    public disableCloseOnNavigation: boolean;

    public data: D | null;

    public style: ModalStyleConfig;

    public bannerText: string;

    public contentClasses: string;
    public contentStyles: string;

    public disableConsoleWarnings: boolean;
    public disableConsoleInfo: boolean;

    public id?: string;

    constructor(config?: IModalConfig<D>) {
        this.open = config?.open ?? true;

        this.afterClose = config?.afterClose;

        this.closeGuard = config?.closeGuard;
        this.closeGuardOnlyOnCancel = config?.closeGuardOnlyOnCancel ?? true;

        this.disableClose = config?.disableClose ?? false;
        this.disableCloseOnBackdropClick = config?.disableCloseOnBackdropClick ?? false;
        this.disableCloseOnNavigation = config?.disableCloseOnNavigation ?? false;

        this.data = config?.data ?? null;
        this.style = new ModalStyleConfig(config?.style);

        this.bannerText = config?.bannerText ?? "";

        this.contentClasses = config?.contentClasses ?? "";
        this.contentStyles = config?.contentStyles ?? "";

        this.disableConsoleWarnings = config?.disableConsoleWarnings ?? false;
        this.disableConsoleInfo = config?.disableConsoleInfo ?? false;

        this.id = config?.id;
    }
}
