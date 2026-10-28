import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';
import { NgClass } from '@angular/common';
import { ModalHeaderDirective } from '@modal/directives/modal-header.directive';
import { ModalFooterDirective } from '@modal/directives/modal-footer.directive';
import { Modal } from '@modal/classes/modal';
import { Button } from '@forms/components/button/button';
import { ContextMenuDirective, DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';
import { Icon } from '@filip.mazev/blocks/icons';

@Component({
  selector: 'app-demo-modal',
  imports: [ModalHeaderDirective, ModalFooterDirective, NgClass, Button, ContextMenuDirective, DropdownDirective, Menu, MenuItem, Icon],
  templateUrl: './demo-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './demo-modal.scss'
})
export class DemoModal extends Modal<IDemoModalData, IDemoModalResult> {
  protected readonly menuStatus = signal('Try either menu. Actions keep this modal open.');

  protected isSideModal = signal(false);
  protected isCenteredModal = signal(false);

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
}
