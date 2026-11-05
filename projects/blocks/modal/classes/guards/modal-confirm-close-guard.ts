import { ComponentType } from '@angular/cdk/portal';

import { map, Observable } from 'rxjs';

import { ModalCloseGuard } from '@modal/classes/modal-close-guard';
import { IModal } from '@modal/interfaces/imodal.interface';
import { IModalCloseResult } from '@modal/interfaces/imodal-close-result.interface';
import { IModalConfig } from '@modal/interfaces/imodal-config.interface';
import { ModalService } from '@modal/services/modal.service';

/**
 * Modal Close Guard that opens a confirmation modal before allowing the original modal to close.
 * @param component The component to use for the confirmation modal.
 * @param config The configuration for the confirmation modal.
 */
export class ModalConfirmCloseGuard<D, R, C extends IModal<D, R> = IModal<D, R>> extends ModalCloseGuard {
  constructor(
    public component: ComponentType<C>,
    public config: IModalConfig<D, R>
  ) {
    super();
  }

  public override canClose(modalService: ModalService): Observable<boolean> {
    const ref = modalService.open<D, R, C>(this.component, this.config);

    return ref.afterClosed().pipe(map((result: IModalCloseResult<R | undefined>) => result.state === 'confirm'));
  }
}
