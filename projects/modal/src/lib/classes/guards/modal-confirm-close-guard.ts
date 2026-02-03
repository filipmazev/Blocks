import { ComponentType } from "@angular/cdk/portal";
import { IModal } from "../../interfaces/imodal";
import { ModalCloseGuard } from "../modal-close-guard";
import { IModalConfig } from "../../interfaces/imodal-config.interface";
import { ModalService } from "../../services/modal.service";
import { map, Observable } from "rxjs";

/**
 * Modal Close Guard that opens a confirmation modal before allowing the original modal to close.
 * @param component The component to use for the confirmation modal.
 * @param config The configuration for the confirmation modal.
 */
export class ModalConfirmCloseGuard<D, R, C extends IModal<D, R> = IModal<D, R>> extends ModalCloseGuard {
    constructor(
        public component: ComponentType<C>,
        public config: IModalConfig<D> 
    ) {
        super();
    }

    public override canClose(modalService: ModalService): Observable<boolean> {
        const ref = modalService.open<D, R, C>(this.component, this.config);
        
        return ref.afterClosed().pipe(
            map(result => result.state === 'confirm')
        );
    }
}