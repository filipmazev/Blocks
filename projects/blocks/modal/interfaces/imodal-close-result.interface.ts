import { ModalCloseMode } from '@modal/types/modal.types';

/**
 * Interface for the Modal Close Result
 * @typeParam R Type of data returned when the modal closes.
 */
export interface IModalCloseResult<R> {
  /** Optional result data returned by the modal content. */
  data?: R;
  /** Close reason distinguishing confirmation from cancellation. */
  state: ModalCloseMode;
}
