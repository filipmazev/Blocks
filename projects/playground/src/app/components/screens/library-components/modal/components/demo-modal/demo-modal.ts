import type { WritableSignal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { Icon } from '@filip.mazev/blocks/icons';
import { ModalService } from '@filip.mazev/blocks/modal';
import { ContextMenuDirective, DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';

import { Button } from '@forms/components/button/button';
import { Modal } from '@modal/classes/modal';
import { ModalFooterDirective } from '@modal/directives/footer/modal-footer.directive';
import { ModalHeaderDirective } from '@modal/directives/header/modal-header.directive';
import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';

@Component({
  selector: 'app-demo-modal',
  imports: [ModalHeaderDirective, ModalFooterDirective, NgClass, Button, ContextMenuDirective, DropdownDirective, Menu, MenuItem, Icon],
  templateUrl: './demo-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './demo-modal.scss'
})
export class DemoModal extends Modal<IDemoModalData, IDemoModalResult> {
  private readonly modalService = inject(ModalService);

  protected readonly menuStatus: WritableSignal<string> = signal('Try either menu. Actions keep this modal open.');

  protected readonly isSideModal: WritableSignal<boolean> = signal(false);
  protected readonly isCenteredModal: WritableSignal<boolean> = signal(false);

  public override onModalInit(): void {
    const layout = this.modal?.modalConfig?.style.layout;

    this.isSideModal.set(layout === 'right' || layout === 'left');
    this.isCenteredModal.set(layout === 'center');
  }

  protected confirm(): void {
    this.modal?.close('confirm', {
      openedCount: this.data.openedCount + 1
    });
  }

  protected selectAction(action: string): void {
    this.menuStatus.set(`${action} selected. The modal is still open.`);
  }

  protected openNested(): void {
    this.modalService.open<IDemoModalData, IDemoModalResult>(DemoModal, {
      data: {
        ...this.data,
        title: 'Nested dialog',
        body: 'The first nested dialog uses at least 90% material opacity. Open another to see a fully opaque surface. Closing returns to the unchanged parent.'
      },
      header: { text: 'Nested dialog', icon: { name: 'layers', color: 'accent', bgColor: 'auto' } },
      style: { layout: 'center', hasBackdrop: true, animate: this.modal.modalConfig?.style.animate ?? true }
    });
  }
}
