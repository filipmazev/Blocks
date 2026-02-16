import { ModalLayout } from '../../../../../../modal/src/lib/types/modal.types';

export class ModalConfigRequest {
  public layout: ModalLayout = 'right';
  public animate: boolean = true;
  public hasBackdrop: boolean = true;
  public showCloseButton: boolean = true;
  public title: string = '';
  public bannerText: string | null = '';
  public disableClose: boolean = false;
  public disableCloseOnBackdropClick: boolean = false;
  public hasConfirmCloseGuard: boolean = true;

  [key: string]: unknown;

  constructor(init?: Partial<ModalConfigRequest>) {
    Object.assign(this, init);
  }
}
