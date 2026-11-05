import { ModalRef } from '@modal/classes/modal-ref';

/**
 * Interface for Modal
 * @typeParam D The type of data passed to the modal
 * @typeParam R The type of result returned from the modal
 */
export interface IModal<D, R> {
  /** Data supplied to, or returned from, the owning component. */
  data: D;

  /** Reference controlling the lifetime of this modal content. */
  modal: ModalRef<D, R>;

  /** Initialization callback invoked after the modal reference has been assigned. */
  onModalInit(): void;
  /** Closes this modal content with an optional result. */
  close(result?: R): void;
}
