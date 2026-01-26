import { EMPTY_STRING } from "../constants/generic-modal-common.constants";
import { IGenericConfirmCloseConfig } from "../interfaces/igeneric-confirm-close.interface";
import { IGenericModalConfig } from "../interfaces/igeneric-modal-config.interface";
import { IGenericModalStyleConfig } from "../interfaces/igeneric-modal-style-config.interface";
import { GenericModal } from "./generic-modal";
import { GenericModalStyleConfig } from "./generic-modal-style.config";
import { uuidv4 } from "@filip.mazev/common-parts";

export class GenericModalConfig<
    D = unknown,
    ConfirmComponentData = any,
    ConfirmComponent extends GenericModal<ConfirmComponentData, undefined> = GenericModal<ConfirmComponentData, undefined>> {
    public open: boolean;

    public afterClose?: Function;
    public confirmCloseConfig?: IGenericConfirmCloseConfig<ConfirmComponentData, ConfirmComponent>;

    public disableClose: boolean;
    public disableCloseOnBackdropClick: boolean;
    public disableCloseOnNavigation: boolean;

    public enableExtremeOverflowHandling?: boolean;
    public webkitOnlyOverflowMobileHandling?: boolean;

    public closeOnSwipeBack: boolean;

    public data: D | null;

    public style: IGenericModalStyleConfig;

    public bannerText: string;
    public bannerTextAnnotatedString: string;
    public bannerIcons: string[];

    public contentClasses: string;
    public contentStyles: string;

    public disableConsoleWarnings: boolean;
    public disableConsoleInfo: boolean;

    public id: string;

    constructor(config?: IGenericModalConfig<D, ConfirmComponentData, ConfirmComponent>) {
        this.open = config?.open ?? true;

        this.afterClose = config?.afterClose;

        this.confirmCloseConfig = config?.confirmCloseConfig;

        this.disableClose = config?.disableClose ?? false;
        this.disableCloseOnBackdropClick = config?.disableCloseOnBackdropClick ?? false;
        this.disableCloseOnNavigation = config?.disableCloseOnNavigation ?? false;

        this.enableExtremeOverflowHandling = config?.enableExtremeOverflowHandling ?? false;
        this.webkitOnlyOverflowMobileHandling = config?.webkitOnlyOverflowMobileHandling ?? true;

        this.closeOnSwipeBack = config?.closeOnSwipeBack ?? false;

        this.data = config?.data ?? null;
        this.style = new GenericModalStyleConfig(config?.style);

        this.bannerText = config?.bannerText ?? EMPTY_STRING;
        this.bannerTextAnnotatedString = config?.bannerTextAnnotatedString ?? EMPTY_STRING;
        this.bannerIcons = config?.bannerIcons ?? [];

        this.contentClasses = config?.contentClasses ?? EMPTY_STRING;
        this.contentStyles = config?.contentStyles ?? EMPTY_STRING;

        this.disableConsoleWarnings = config?.disableConsoleWarnings ?? false;
        this.disableConsoleInfo = config?.disableConsoleInfo ?? false;

        this.id = config?.id ?? uuidv4();
    }
}
