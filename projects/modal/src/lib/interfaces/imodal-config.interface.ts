import { ModalCloseGuard } from "../classes/modal-close-guard";
import { IModalStyleConfig } from "./imodal-style-config.interface";

/**
 * IModalConfig<D>, the configuration for the modal
 * @param D The type of data passed to the modal
 * @param {boolean} open (optional) Whether the modal should be open or not, will default to true
 * @param {Function} afterClose (optional) The function to run after the modal closes
 * @param {ModalCloseGuard} closeGuard (optional) The guard that will determine whether the modal can be closed or not
 * @param {boolean} closeGuardOnlyOnCancel (optional) Whether the close guard should only be checked on cancel actions, will default to true
 * @param {boolean} disableClose (optional) Whether the modal should be closable or not, will default to false (this applies to the close button and backdrop)
 * @param {boolean} disableCloseOnBackdropClick (optional) Whether the modal shouldn't be closable when the user clicks on the backdrop, will default to false
 * @param {boolean} disableCloseOnNavigation (optional) Whether the modal should be closable or not when the user navigates away from the page, will default to false
 * @param {D | null} data (optional) The data to pass to the component of the modal. The component needs to use the @Inject(MODAL_DATA) or `data = inject<string>(MODAL_DATA);` (modern syntax) decorator to receive this.
 * @param {IModalStyleConfig} style (optional) The style configuration for the modal, will default to an empty object
 * @param {boolean} showCloseButton (optional) Whether the modal should show a close button or not, will default to true
 * @param {string} bannerText (optional) The text to display in the banner of the modal
 * @param {string} contentClasses (optional) The classes to apply to the content of the modal
 * @param {string} contentStyles (optional) The styles to apply to the content of the modal
 * @param {string} id (optional) The id of the modal (set at the top level of the modal), will default to a random string
 */
export interface IModalConfig<D> {
    open?: boolean;

    afterClose?: Function;

    closeGuard?: ModalCloseGuard;
    closeGuardOnlyOnCancel?: boolean;

    disableClose?: boolean;
    disableCloseOnBackdropClick?: boolean;
    disableCloseOnNavigation?: boolean;

    data?: D | null;

    style?: IModalStyleConfig;

    bannerText?: string;

    contentClasses?: string;
    contentStyles?: string;

    disableConsoleWarnings?: boolean;
    disableConsoleInfo?: boolean;

    id?: string;
}