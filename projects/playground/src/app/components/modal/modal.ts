import { Component, inject } from '@angular/core';
import { CenteredModal } from './components/centered-modal/centered-modal';
import { GenericModalService } from '../../../../../modal/src/lib/services/generic-modal.service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  private modals = inject(GenericModalService);

  constructor() {
    this.startupModals();
  }

  private startupModals(): void {
    this.openCenteredModal();
  }

  private openCenteredModal(): void {
    this.modals.open<string, undefined>(CenteredModal, {
      data: "Hello from Modal!",
      bannerText: 'Centered Modal',
      style: {
        position: 'center',
      },
    });
  }
}