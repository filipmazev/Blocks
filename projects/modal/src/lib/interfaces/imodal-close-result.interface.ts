import { ModalCloseMode } from "../types/modal.types";

export interface IModalCloseResult<R = any> {
    data?: R;
    state: ModalCloseMode;
}