import { ModalCloseMode } from "../types/modal.types";

export interface IGenericCloseResult<R = any> {
    data?: R;
    state: ModalCloseMode;
}