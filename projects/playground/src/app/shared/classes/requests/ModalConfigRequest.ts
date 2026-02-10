import { ModalLayout } from '../../../../../../modal/src/lib/types/modal.types';

export class ModalConfigRequest {
    layout: ModalLayout = 'right';
    animate: boolean = true;
    hasBackdrop: boolean = true;
    showCloseButton: boolean = true;
    title: string = '';
    bannerText: string | null = '';
    disableClose: boolean = false;
    disableCloseOnBackdropClick: boolean = false;
    hasConfirmCloseGuard: boolean = true;

    [key: string]: any;

    constructor(init?: Partial<ModalConfigRequest>) {
        Object.assign(this, init);
    }
}