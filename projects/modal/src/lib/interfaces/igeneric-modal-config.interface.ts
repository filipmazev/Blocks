import { GenericModal } from "../classes/generic-modal";
import { IGenericConfirmCloseConfig } from "./igeneric-confirm-close.interface";
import { IGenericModalStyleConfig } from "./igeneric-modal-style-config.interface";

/**
 * IGenericModalConfig<D>, the configuration for the generic modal
 * @param {boolean} open (optional) Whether the modal should be open or not, will default to true
 * @param {Function} afterClose (optional) The function to run after the modal closes
 * @param {IGenericConfirmCloseConfig<ConfirmComponent, ConfirmComponentData>} confirmCloseConfig (optional) The configuration for the confirm close modal, will default to { confirmClose: false }
 * @param {boolean} disableClose (optional) Whether the modal should be closable or not, will default to false (this applies to the close button and backdrop)
 * @param {boolean} disableCloseOnBackdropClick (optional) Whether the modal shouldn't be closable when the user clicks on the backdrop, will default to false
 * @param {boolean} disableCloseOnNavigation (optional) Whether the modal should be closable or not when the user navigates away from the page, will default to false
 * @param {boolean} enableExtremeOverflowHandling (optional) Whether the modal should enable the extreme overflow handling (may cause issues with keypress registration) or not, will default to false
 * @param {boolean} webkitOnlyOverflowMobileHandling (optional) Whether the modal should only handle overflow for webkit browsers on mobile or should it handle it for all browsers, will default to true
 * @param {D | null} data (optional) The data to pass to the component of the modal. The component needs to use the @Inject(GENERIC_MODAL_DATA) or `data = inject<string>(GENERIC_MODAL_DATA);` (modern syntax) decorator to receive this.
 * @param {IGenericModalStyleConfig} style (optional) The style configuration for the modal, will default to an empty object
 * @param {boolean} showCloseButton (optional) Whether the modal should show a close button or not, will default to true
 * @param {string} bannerText (optional) The text to display in the banner of the modal
 * @param {string} bannerTextAnnotatedString (optional) The annotated string (in bold style, in addition to some text) to display in the banner of the modal, will default to an empty string
 * @param {string} contentClasses (optional) The classes to apply to the content of the modal
 * @param {string} contentStyles (optional) The styles to apply to the content of the modal
 * @param {string} id (optional) The id of the modal (set at the top level of the modal), will default to a random string
 */
export interface IGenericModalConfig<
    D = undefined,
    ConfirmComponentData = any,
    ConfirmComponent extends GenericModal<ConfirmComponentData, undefined> = GenericModal<ConfirmComponentData, undefined>> {
    open?: boolean;

    afterClose?: Function;
    confirmCloseConfig?: IGenericConfirmCloseConfig<ConfirmComponentData, ConfirmComponent>;

    disableClose?: boolean;
    disableCloseOnBackdropClick?: boolean;
    disableCloseOnNavigation?: boolean;

    enableExtremeOverflowHandling?: boolean;
    webkitOnlyOverflowMobileHandling?: boolean;

    data?: D | null;

    style?: IGenericModalStyleConfig;

    bannerText?: string;
    bannerTextAnnotatedString?: string;

    contentClasses?: string;
    contentStyles?: string;

    disableConsoleWarnings?: boolean;
    disableConsoleInfo?: boolean;

    id?: string;
}
