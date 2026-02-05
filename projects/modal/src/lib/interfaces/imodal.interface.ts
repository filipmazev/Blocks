import { ModalRef } from "../classes/modal-ref";

/**
 * Interface for Modal
 * @param D The type of data passed to the modal
 * @param R The type of result returned from the modal
 */
export interface IModal<D, R> {
    data: D;
    
    modal: ModalRef<D, R>;

    onModalInit(): void;
    close(result?: R): void;
}