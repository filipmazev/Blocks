import type { WritableSignal } from '@angular/core';

import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { ModalLiveFormControls } from '@playground/types/overlay-patch-demo.types';

import { Button, Checkbox, InputField, Select } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { Modal, ModalFooterDirective, ModalHeaderDirective, ModalService } from '@filip.mazev/blocks/modal';
import { ContextMenuDirective, DropdownDirective, Menu, MenuItem } from '@filip.mazev/blocks/primitives';

import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';

@Component({
  selector: 'app-demo-modal',
  imports: [
    ReactiveFormsModule,
    Checkbox,
    InputField,
    Select,
    ModalHeaderDirective,
    ModalFooterDirective,
    NgClass,
    Button,
    ContextMenuDirective,
    DropdownDirective,
    Menu,
    MenuItem,
    Icon
  ],
  templateUrl: './demo-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './demo-modal.scss'
})
export class DemoModal extends Modal<IDemoModalData, IDemoModalResult> {
  private readonly modalService = inject(ModalService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly liveForm: FormGroup<ModalLiveFormControls> = new FormGroup({
    text: new FormControl('Workspace settings', { nonNullable: true }),
    icon: new FormControl<IconName | null>('info'),
    loading: new FormControl(false, { nonNullable: true }),
    disableClose: new FormControl(false, { nonNullable: true }),
    showCloseButton: new FormControl(true, { nonNullable: true }),
    emphasize: new FormControl(false, { nonNullable: true })
  });
  protected readonly iconOptions: IBxSelectOption<IconName>[] = [
    { label: 'Info', value: 'info' },
    { label: 'Edit', value: 'pencil' },
    { label: 'Done', value: 'check' }
  ];
  protected readonly draftNote: FormControl<string> = new FormControl('', { nonNullable: true });

  protected readonly wizardStep: WritableSignal<number> = signal(1);

  protected readonly saving: WritableSignal<boolean> = signal(false);

  protected readonly menuStatus: WritableSignal<string> = signal('Try either menu. Actions keep this modal open.');

  protected readonly isSideModal: WritableSignal<boolean> = signal(false);
  protected readonly isCenteredModal: WritableSignal<boolean> = signal(false);

  private saveTimeout?: ReturnType<typeof setTimeout>;

  constructor() {
    super();
    this.destroyRef.onDestroy(() => clearTimeout(this.saveTimeout));
  }

  /** Populate initial live controls from the shared configuration without changing the mounted content. */
  public override onModalInit(): void {
    const layout = this.modal.config().style.layout;

    const config = this.modal.config();

    this.liveForm.patchValue({
      text: typeof config.header?.text === 'string' ? config.header.text : '',
      icon: config.header?.icon?.name ?? null,
      loading: config.header?.loading ?? false,
      disableClose: config.disableClose,
      showCloseButton: config.style.showCloseButton ?? true
    });
    this.isSideModal.set(layout === 'right' || layout === 'left');
    this.isCenteredModal.set(layout === 'center');
  }

  protected applyLivePatch(): void {
    const values = this.liveForm.getRawValue();

    this.modal.patch({
      header: { text: values.text, icon: values.icon ? { name: values.icon } : null, loading: values.loading },
      disableClose: values.disableClose,
      style: {
        showCloseButton: values.showCloseButton,
        wrapperStyles: values.emphasize ? '--bx-modal-text: var(--bx-text-accent)' : null
      }
    });
  }

  protected advanceWizard(): void {
    if (this.saving()) return;

    if (this.wizardStep() === 1) {
      this.wizardStep.set(2);
      this.modal.patch({ header: { text: 'Step 2: Review your changes', icon: { name: 'pencil' }, loading: false } });

      return;
    }

    this.saving.set(true);
    this.modal.patch({ header: { text: 'Saving your changes…', loading: true }, disableClose: true });
    this.saveTimeout = setTimeout(() => {
      this.saving.set(false);
      this.wizardStep.set(3);
      this.modal.patch({
        header: { text: 'Changes saved', icon: { name: 'check', color: 'text-success' }, loading: false },
        disableClose: false
      });
    }, 1800);
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
      style: { layout: 'center', hasBackdrop: true, animate: this.modal.config().style.animate ?? true }
    });
  }
}
