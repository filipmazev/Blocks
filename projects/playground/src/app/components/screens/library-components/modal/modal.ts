import type { InputSignal, OutputEmitterRef, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import type { ModalRef } from '@filip.mazev/blocks/modal';
import type { IDemoAction } from '@playground/interfaces/idemo-action.interface';
import type { IModalStoryArgs } from '@playground/interfaces/imodal-story-args.interface';
import type { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import type { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';

import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ModalConfirmCloseGuard, ModalService } from '@filip.mazev/blocks/modal';

import { ConfirmClose } from '@playground/components/screens/library-components/modal/components/confirm-close/confirm-close';
import { DemoModal } from '@playground/components/screens/library-components/modal/components/demo-modal/demo-modal';
import { MODAL_STORY_DEFAULTS } from '@playground/shared/constants/modal-story.constants';

@Component({
  selector: 'app-modal',
  imports: [Button, Icon],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Modal {
  private readonly destroyRef = inject(DestroyRef);
  private readonly modalService = inject(ModalService);

  private readonly modals: Set<ModalRef<IDemoModalData, IDemoModalResult>> = new Set();

  protected readonly activeModal: WritableSignal<ModalRef<IDemoModalData, IDemoModalResult> | null> = signal(null);

  public readonly args: InputSignal<IModalStoryArgs> = input<IModalStoryArgs>(MODAL_STORY_DEFAULTS);

  public readonly action: OutputEmitterRef<IDemoAction> = output<IDemoAction>();

  private openedCount: number = 0;

  constructor() {
    this.destroyRef.onDestroy(() => {
      for (const modal of this.modals) modal.close('cancel', undefined, true);
    });
  }

  protected openModal(): void {
    const values = this.args();
    const modal = this.modalService.open<IDemoModalData, IDemoModalResult>(DemoModal, {
      ariaLabel: values.headerText ? undefined : values.title,
      header: { text: values.headerText, icon: { name: 'info', color: 'text-info', bgColor: 'auto' } },
      closeLabel: values.closeLabel,
      disableCloseOnNavigation: values.disableCloseOnNavigation,
      closeGuardOnlyOnCancel: values.closeGuardOnlyOnCancel,
      contentStyles: values.contentStyles,
      data: {
        title: values.title,
        body: 'Confirm to apply the example, or cancel to return to the playground. The nested menus, live heading controls and wizard remain interactive.',
        openedCount: this.openedCount
      },
      style: {
        layout: values.layout,
        closeDelay: values.closeDelay,
        contentWrapper: values.contentWrapper,
        wrapperStyles: values.wrapperStyles,
        wrapperClasses: values.wrapperClasses,
        overrideFullHeight: values.overrideFullHeight,
        animate: values.animate,
        hasBackdrop: values.hasBackdrop,
        showCloseButton: values.showCloseButton,
        breakpoints: values.breakpoints
      },
      disableClose: values.disableClose,
      disableCloseOnBackdropClick: values.disableCloseOnBackdropClick,
      closeGuard: values.hasConfirmCloseGuard
        ? new ModalConfirmCloseGuard<string, undefined>(ConfirmClose, {
            data: 'Are you sure you want to close the modal?',
            header: { text: 'Unsaved changes' },
            style: { showCloseButton: false }
          })
        : undefined
    });

    this.modals.add(modal);
    this.activeModal.set(modal);
    this.action.emit({ name: 'open', payload: values });
    modal
      .modalState$()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => this.action.emit({ name: 'modalState', payload: state }));
    modal
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        this.modals.delete(modal);

        if (this.activeModal() === modal) this.activeModal.set(null);

        if (result.state === 'confirm' && result.data) this.openedCount = result.data.openedCount;

        this.action.emit({ name: 'afterClosed', payload: result });
      });
  }

  protected patchOpenModal(): void {
    const values = this.args();
    const patch = {
      header: { text: values.headerText, icon: { name: 'pencil' as const } },
      disableClose: values.disableClose,
      disableCloseOnBackdropClick: values.disableCloseOnBackdropClick,
      style: { showCloseButton: values.showCloseButton }
    };

    this.activeModal()?.patch(patch);
    this.action.emit({ name: 'patch', payload: patch });
  }

  protected closeModal(): void {
    this.activeModal()?.close();
    this.action.emit({ name: 'closeRequested', payload: undefined });
  }
}
