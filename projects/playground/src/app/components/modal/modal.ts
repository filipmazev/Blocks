import { Component, inject } from '@angular/core';
import { DemoModal } from './components/demo-modal/demo-modal';
import { ModalService } from '../../../../../modal/src/lib/services/modal.service';
import { IModalCloseResult } from '../../../../../modal/src/lib/interfaces/imodal-close-result.interface';
import { ConfirmClose } from './components/confirm-close/confirm-close';
import { ModalConfirmCloseGuard } from '../../../../../modal/src/lib/classes/guards/modal-confirm-close-guard';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  private modals = inject(ModalService);

  constructor() {
  }

  protected openModal(): void {
    const modal = this.modals.open<string, undefined>(DemoModal, {
      data: "Hello from Modal!",
      style: {
        layout: 'right',
        breakpoints: {
          'sm': 'bottom-sheet',
          'xl': 'center'
        }
      },
      closeGuard: new ModalConfirmCloseGuard<string, undefined>(ConfirmClose, {
        data: 'Are you sure you want to close the modal?',
        bannerText: 'Unsaved Changes',
        style: {
          showCloseButton: false
        }
      })
    });

    modal.afterClosed().subscribe((result: IModalCloseResult<string | undefined>) => {
      console.log('Centered Modal closed', result.state);
    });
  }
}