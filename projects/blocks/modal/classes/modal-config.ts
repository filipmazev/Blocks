import { IModalConfig } from '../interfaces/imodal-config.interface';
import { ModalStyleConfig } from './modal-style.config';
import { ModalCloseGuard } from './modal-close-guard';
import { IModalCloseResult } from '../public-api';
import { Observable } from 'rxjs';
import { IModalHeaderConfig } from '@modal/interfaces/imodal-header-config.interface';

export class ModalConfig<D, R> {
  public open: boolean;

  public afterClose?: () => Observable<IModalCloseResult<R | undefined>>;

  public closeGuard?: ModalCloseGuard;
  public closeGuardOnlyOnCancel?: boolean;

  public disableClose: boolean;
  public disableCloseOnBackdropClick: boolean;
  public disableCloseOnNavigation: boolean;

  public data: D | null;

  public style: ModalStyleConfig;

  public header?: IModalHeaderConfig;

  public contentClasses: string;
  public contentStyles: string;

  public id?: string;

  constructor(config?: IModalConfig<D, R>) {
    this.open = config?.open ?? true;

    this.afterClose = config?.afterClose;

    this.closeGuard = config?.closeGuard;
    this.closeGuardOnlyOnCancel = config?.closeGuardOnlyOnCancel ?? true;

    this.disableClose = config?.disableClose ?? false;
    this.disableCloseOnBackdropClick = config?.disableCloseOnBackdropClick ?? false;
    this.disableCloseOnNavigation = config?.disableCloseOnNavigation ?? false;

    this.data = config?.data ?? null;

    this.style = new ModalStyleConfig(config?.style);
    this.header = config?.header;

    this.contentClasses = config?.contentClasses ?? '';
    this.contentStyles = config?.contentStyles ?? '';

    this.id = config?.id;
  }
}
