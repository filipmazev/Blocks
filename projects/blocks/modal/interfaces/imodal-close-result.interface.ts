import { ModalCloseMode } from '../types/modal.types';

/**
 * Interface for the Modal Close Result
 * @param R data (optional) The result data returned when the modal is closed
 * @param {ModalCloseMode} state (required) The state of the modal close (e.g., 'confirm', 'cancel')
 */
export interface IModalCloseResult<R> {
  data?: R;
  state: ModalCloseMode;
}
