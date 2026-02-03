import { Component, inject } from '@angular/core';
import { CenteredModal } from './components/centered-modal/centered-modal';
import { ModalService } from '../../../../../modal/src/lib/services/modal.service';
import { IModalCloseResult } from '../../../../../modal/src/lib/interfaces/imodal-close-result.interface';
import { ConfirmClose } from './components/confirm-close/confirm-close';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  private modals = inject(ModalService);

  constructor() {
    this.startupModals();
  }

  private startupModals(): void {
    this.openCenteredModal();
  }

  private openCenteredModal(): void {
    const modal = this.modals.open<string, undefined>(CenteredModal, {
      data: "Hello from Modal!",
      style: {
        layout: 'center',
        breakpoints: {
          'sm': 'bottom-sheet'
        }
      },
      confirmCloseConfig: {
        confirmModalComponent: ConfirmClose,
        data: "Are you sure you want to close the modal?",
        confirmClose: true,
      }
    });

    modal.afterClosed().subscribe((result: IModalCloseResult<string | undefined>) => {
      console.log('Centered Modal closed', result.state);
    }); 
  }
}