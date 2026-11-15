import { Observable } from 'rxjs';

import type { ResolvableText } from '@filip.mazev/blocks/core';

import { IModalCloseResult } from '@modal/interfaces/imodal-close-result.interface';
import { IModalConfig } from '@modal/interfaces/imodal-config.interface';
import { IModalHeaderConfig } from '@modal/interfaces/imodal-header-config.interface';

import { ModalCloseGuard } from './modal-close-guard';
import { ModalStyleConfig } from './modal-style.config';

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
  /** Optional translatable close-action name; defaults to shared settings, then 'Close dialog'. */
  public closeLabel?: ResolvableText;
  /** Optional translated task name for headerless content; defaults to the configured header, then 'Dialog'. */
  public ariaLabel?: ResolvableText;
  /** Optional space-separated IDs of visible task headings; takes precedence over ariaLabel and the configured header. */
  public ariaLabelledBy?: string;
  /** Optional space-separated IDs of task descriptions. No description is added by default. */
  public ariaDescribedBy?: string;

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
    this.closeLabel = config?.closeLabel ?? 'Close dialog';
    this.ariaLabel = config?.ariaLabel;
    this.ariaLabelledBy = config?.ariaLabelledBy;
    this.ariaDescribedBy = config?.ariaDescribedBy;
  }
}
