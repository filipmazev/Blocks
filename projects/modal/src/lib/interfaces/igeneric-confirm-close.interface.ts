import { ComponentType } from "@angular/cdk/portal";
import { IGenericModalStyleConfig } from "./igeneric-modal-style-config.interface";
import { GenericModal } from "../classes/generic-modal";

/**
 * Interface for the Generic Confirm Close Modal
 * @param {ComponentType<any>} confirmModalComponent The component to use for the confirm modal
 * @param {boolean} confirmClose (required) Whether the modal should confirm close or not
 * @param {boolean} confirmOnSubmit (optional) Whether the modal should confirm on submit or not, will default to false (if false, will only need to confirm when close state is 'cancel')
 * @param {IGenericModalStyleConfig} style (optional) The style configuration for the modal
 * @param {D | null} data (optional) The data to pass to the component of the modal, the component needs to have the @Inject(GENERIC_MODAL_DATA) data: any; decorator to receive this data
 * @param {string} bannerText (optional) The text to display in the banner of the modal
 * @param {string[]} bannerIcons (optional) The icons to display in the banner of the modal
 * @param {boolean} bypassSelfCheck (optional) Whether the modal should bypass the self check or not, will default to false (if true, will not check if the modal is the same as the one that opened it)
 */
export interface IGenericConfirmCloseConfig<
    ConfirmComponentData = any,
    ConfirmComponent extends GenericModal<ConfirmComponentData, undefined> = GenericModal<ConfirmComponentData, undefined>> {
    confirmModalComponent: ComponentType<ConfirmComponent>;

    confirmClose: boolean;
    confirmOnSubmit?: boolean;

    style?: IGenericModalStyleConfig;
    data?: ConfirmComponentData | null;

    bannerText?: string;
    bannerIcons?: string[];

    bypassSelfCheck?: boolean;
}
