import { inject, Injectable } from "@angular/core";
import { ModalRef } from "./modal-ref";
import { MODAL_DATA } from "../tokens/modal-data.token";
import { IModal } from "../interfaces/imodal.interface";

@Injectable()
export class Modal<D, R> implements IModal<D, R> {
    /**
     * Data injected into the modal component.
     */
    public data = inject<D>(MODAL_DATA);

    /**
     * Reference to the ModalRef instance associated with this modal.
     */
    public modal!: ModalRef<D, R>;

    /** 
     * Called when the modal is initialized.
    */
    public onModalInit(): void { }

    /** 
     * Closes the modal (with "cancel" reason) with an optional result.
     * @param result The result to be passed when closing the modal.
    */
    public close(result?: R) {
        this.modal?.close('cancel', result);
    }
}