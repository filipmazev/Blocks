import { Component, inject, signal } from '@angular/core';
import { DemoModal } from '@playground/components/modal/components/demo-modal/demo-modal';
import { ModalService } from '@modal/services/modal.service';
import { IModalCloseResult } from '@modal/interfaces/imodal-close-result.interface';
import { ConfirmClose } from '@playground/components/modal/components/confirm-close/confirm-close';
import { ModalConfirmCloseGuard } from '@modal/classes/guards/modal-confirm-close-guard';
import { IDemoModalData } from '@playground/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '@playground/interfaces/modals/result/idemo-modal-result.interface';
import { MODAL_DEFAULT_ANIM_DURATION } from '@modal/constants/modal-animation.constants';
import { ModalLayout } from '@modal/types/modal.types';
import { ModalConfigRequest } from '@playground/classes/requests/ModalConfigRequest';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalConfigFormControls } from '@playground/types/form.types';
import { BREAKPOINTS } from '@core/constants/window-dimension.constants';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ICodeFile } from '@playground/interfaces/icode-file.interface';
import { ComponentInfo } from '@playground/components/shared/component-info/component-info';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MarkdownModule, ComponentInfo],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  protected modalReadmePath = signal<string>('assets/modal-readme/README.md');

  protected codeFiles: ICodeFile[] = [
    { title: 'modal-usage.ts', path: 'assets/code-snippets/modal/modal-usage.ts.txt', language: 'typescript' },
    { title: 'modal.ts', path: 'assets/code-snippets/modal/modal.ts.txt', language: 'typescript' },
    { title: 'modal.html', path: 'assets/code-snippets/modal/modal.html.txt', language: 'html' },
    { title: 'modal.scss', path: 'assets/code-snippets/modal/modal.scss.txt', language: 'scss' },
    { title: 'confirm-close.ts', path: 'assets/code-snippets/modal/confirm-close-modal.ts.txt', language: 'typescript' },
    { title: 'confirm-close.html', path: 'assets/code-snippets/modal/confirm-close-modal.html.txt', language: 'html' },
    { title: 'confirm-close.scss', path: 'assets/code-snippets/modal/confirm-close-modal.scss.txt', language: 'scss' },
    { title: 'styles.scss', path: 'assets/code-snippets/modal/styles.scss.txt', language: 'scss' }
  ];

  protected readonly layoutOptions: ModalLayout[] = ['center', 'right', 'left', 'bottom-sheet'];

  protected readonly breakpointKeys = Object.keys(BREAKPOINTS) as (keyof typeof BREAKPOINTS)[];
  protected readonly form: FormGroup<ModalConfigFormControls>;

  private modals = inject(ModalService);

  private openedCount = 0;

  constructor() {
    const controls = {
      layout: new FormControl<ModalLayout>('right', [Validators.required]),
      animate: new FormControl<boolean>(true, [Validators.required]),
      hasBackdrop: new FormControl<boolean>(true, [Validators.required]),
      showCloseButton: new FormControl<boolean>(true, [Validators.required]),
      title: new FormControl<string>('This is the title of the modal in its header'),
      bannerText: new FormControl<string | null>('The Lorem Ipsum Modal'),
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

    const bannerText = request.bannerText === '' ? null : request.bannerText;

    const modal = this.modals.open<IDemoModalData, IDemoModalResult>(DemoModal, {
      bannerText: bannerText || undefined,
      data: {
        title: request.title,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet neque sed enim aliquam ullamcorper.',
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
            bannerText: 'Unsaved Changes',
            style: {
              showCloseButton: false
            }
          })
        : undefined
    });

    modal.afterClosed().subscribe((result: IModalCloseResult<IDemoModalResult | undefined>) => {
      if (result.state === 'confirm' && result.data) {
        this.openedCount = result.data.openedCount;
        setTimeout(() => {
          alert(`This is my ${this.getOrdinal(this.openedCount)} time that I've been closed with the confirm button!`);
        }, MODAL_DEFAULT_ANIM_DURATION);
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

  private getOrdinal(n: number): string {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }
}
