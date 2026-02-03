import { ComponentType } from "@angular/cdk/portal";
import { IModalConfig } from "./imodal-config.interface";
import { IModal } from "./imodal";

/**
 * Interface for the Confirm Close Modal
 * @param {ConfirmModalData} The type of data passed to the confirm modal
 * @param {ConfirmModal} The type of the confirm modal component, will default to IModal<ConfirmModalData, undefined>
 * @param {ComponentType<ConfirmModal>} component The component to use for the confirm modal
 * @param {IModalConfig<ConfirmModalData>} config (optional) The configuration for the confirm modal
 * @param {boolean} confirmOnSubmit (optional) Whether the modal should confirm on submit or not, will default to false (if false, will only need to confirm when close state is 'cancel')
 * @param {boolean} bypassSelfCheck (optional) Whether the modal should bypass the self check or not, will default to false (if true, will not check if the modal is the same as the one that opened it)
 */
export interface IModalConfirmCloseConfig<
    ConfirmModalData,
    ConfirmModal extends IModal<ConfirmModalData, undefined> = IModal<ConfirmModalData, undefined>> {
        
    component: ComponentType<ConfirmModal>;
    config?: IModalConfig<ConfirmModalData, any>;

    confirmOnSubmit?: boolean;
    bypassSelfCheck?: boolean;
}