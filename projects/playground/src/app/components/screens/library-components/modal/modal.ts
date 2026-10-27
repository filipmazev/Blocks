import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { RouterLink } from '@angular/router';
import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { DemoModal } from '@playground/components/screens/library-components/modal/components/demo-modal/demo-modal';
import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';
import { ModalConfigRequest } from '@playground/classes/requests/ModalConfigRequest';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalConfigFormControls } from '@playground/types/form.types';
import { CommonModule } from '@angular/common';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { ComponentInfo } from '@playground/components/shared/component-info/component-info';
import { ConfirmClose } from './components/confirm-close/confirm-close';
import { ModalService } from '@modal/services/modal.service';
import { ModalLayout } from '@modal/types/modal.types';
import { BREAKPOINTS } from '@core/constants/window-dimension.constants';
import { ModalConfirmCloseGuard } from '@modal/classes/guards/modal-confirm-close-guard';
import { IModalCloseResult } from '@modal/interfaces/imodal-close-result.interface';
import { IModalHeaderConfig } from '@modal/interfaces/imodal-header-config.interface';
import { Button } from '@forms/components/button/button';
import { Checkbox } from '@forms/components/checkbox/checkbox';
import { Select } from '@forms/components/select/select';
import { BxSelectOption } from '@forms/interfaces/ibx-select-option.interface';
import { InputField } from '@forms/components/input-field/input-field';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [BxSurfaceDirective, RouterLink, CommonModule, ReactiveFormsModule, ComponentInfo, Button, InputField, Checkbox, Select],
  templateUrl: './modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './modal.scss'
})
export class Modal {
  private readonly modals = inject(ModalService);

  protected readonly layoutOptions: ModalLayout[] = ['center', 'right', 'left', 'bottom-sheet'];

  protected readonly layoutSelectOptions: BxSelectOption<ModalLayout>[] = this.layoutOptions.map((layout) => ({
    label: layout
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    value: layout
  }));

  protected readonly breakpointSelectOptions: BxSelectOption<string>[] = [{ label: 'None', value: 'none' }, ...this.layoutSelectOptions];

  protected readonly breakpointKeys = Object.keys(BREAKPOINTS) as (keyof typeof BREAKPOINTS)[];
  protected readonly form: FormGroup<ModalConfigFormControls>;

  protected readonly resultMessage = signal('Open a modal to preview its layout and close behavior.');
  protected modalReadmePath = signal<string>('assets/modal-readme/README.md');

  protected codeFiles: ICodeFile[] = [
    {
      title: 'modal-usage.ts',
      path: 'assets/code-snippets/modal/modal-usage.ts.txt',
      language: 'typescript'
    },
    { title: 'modal.ts', path: 'assets/code-snippets/modal/modal.ts.txt', language: 'typescript' },
    { title: 'modal.html', path: 'assets/code-snippets/modal/modal.html.txt', language: 'html' },
    { title: 'modal.scss', path: 'assets/code-snippets/modal/modal.scss.txt', language: 'scss' },
    {
      title: 'confirm-close.ts',
      path: 'assets/code-snippets/modal/confirm-close-modal.ts.txt',
      language: 'typescript'
    },
    {
      title: 'confirm-close.html',
      path: 'assets/code-snippets/modal/confirm-close-modal.html.txt',
      language: 'html'
    },
    {
      title: 'confirm-close.scss',
      path: 'assets/code-snippets/modal/confirm-close-modal.scss.txt',
      language: 'scss'
    },
    { title: 'styles.scss', path: 'assets/code-snippets/modal/styles.scss.txt', language: 'scss' }
  ];

  private openedCount = 0;

  constructor() {
    const controls = {
      layout: new FormControl<ModalLayout>('right'),
      animate: new FormControl<boolean>(true),
      hasBackdrop: new FormControl<boolean>(true),
      showCloseButton: new FormControl<boolean>(true),
      title: new FormControl<string>('Review your changes'),
      headerText: new FormControl<string | null>('Workspace settings'),
      disableClose: new FormControl<boolean>(false),
      disableCloseOnBackdropClick: new FormControl<boolean>(false),
      hasConfirmCloseGuard: new FormControl<boolean>(true)
    } as ModalConfigFormControls;

    this.breakpointKeys.forEach((bp) => {
      let defaultVal = 'none';
      if (bp === 'sm') defaultVal = 'bottom-sheet';
      if (bp === 'xl') defaultVal = 'center';

      controls[bp] = new FormControl(defaultVal);
    });

    this.form = new FormGroup<ModalConfigFormControls>(controls);
  }

  protected openModal(): void {
    const request = this.createRequest();
    if (!request) return;

    const headerText = request.headerText === '' ? null : request.headerText;

    const modal = this.modals.open<IDemoModalData, IDemoModalResult>(DemoModal, {
      header:
        headerText === undefined
          ? undefined
          : ({
              text: headerText,
              icon: {
                name: 'info',
                color: 'text-info',
                bgColor: 'auto'
              }
            } as IModalHeaderConfig),
      data: {
        title: request.title,
        body: 'This dialog shares the application theme and appearance settings. Confirm to apply the example, or cancel to return to the playground.',
        openedCount: this.openedCount
      },
      style: {
        layout: request.layout,
        animate: request.animate,
        hasBackdrop: request.hasBackdrop,
        showCloseButton: request.showCloseButton,
        breakpoints: this.getBreakpointsFromRequest(request)
      },
      disableClose: request.disableClose,
      disableCloseOnBackdropClick: request.disableCloseOnBackdropClick,
      closeGuard: request.hasConfirmCloseGuard
        ? new ModalConfirmCloseGuard<string, undefined>(ConfirmClose, {
            data: 'Are you sure you want to close the modal?',
            header: {
              text: 'Unsaved Changes'
            },
            style: {
              showCloseButton: false
            }
          })
        : undefined
    });

    modal.afterClosed().subscribe((result: IModalCloseResult<IDemoModalResult | undefined>) => {
      if (result.state === 'confirm' && result.data) {
        this.openedCount = result.data.openedCount;
        this.resultMessage.set(`Changes confirmed. This modal has been confirmed ${this.openedCount} time${this.openedCount === 1 ? '' : 's'}.`);
      } else {
        this.resultMessage.set('Modal closed. No changes were applied.');
      }
    });
  }

  private createRequest(): ModalConfigRequest | undefined {
    if (this.form.invalid) return undefined;

    const rawValue = this.form.getRawValue();

    const cleanValues = Object.fromEntries(Object.entries(rawValue).map(([key, value]) => [key, value === null ? undefined : value]));

    return new ModalConfigRequest(cleanValues);
  }

  private getBreakpointsFromRequest(request: ModalConfigRequest): Record<string, ModalLayout> {
    const breakpoints: Record<string, ModalLayout> = {};

    this.breakpointKeys.forEach((key) => {
      const val = request[key];
      if (val && val !== 'none') {
        breakpoints[key] = val as ModalLayout;
      }
    });

    return breakpoints;
  }
}
