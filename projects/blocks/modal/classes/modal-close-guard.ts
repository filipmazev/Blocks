import { Observable } from 'rxjs';
import { ModalService } from '../services/modal.service';

/**
 * Abstract class representing a modal close guard.
 */
export abstract class ModalCloseGuard {
  /**
   * Determines whether the modal can be closed.
   */
  public abstract canClose(modalService: ModalService): Observable<boolean> | Promise<boolean> | boolean;
}
