import { Component, inject, input, OnInit, signal } from '@angular/core';
import { DemoModal } from './components/demo-modal/demo-modal';
import { ModalService } from '../../../../../modal/src/lib/services/modal.service';
import { IModalCloseResult } from '../../../../../modal/src/lib/interfaces/imodal-close-result.interface';
import { ConfirmClose } from './components/confirm-close/confirm-close';
import { ModalConfirmCloseGuard } from '../../../../../modal/src/lib/classes/guards/modal-confirm-close-guard';
import { IDemoModalData } from '../../shared/interfaces/modals/data/idemo-modal-data.interface';
import { IDemoModalResult } from '../../shared/interfaces/modals/result/idemo-modal-result.interface';
import { MODAL_DEFAULT_ANIM_DURATION, ModalLayout } from '../../../../../modal/src/public-api';
import { ModalConfigRequest } from '../../shared/classes/requests/ModalConfigRequest';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalConfigFormControls } from '../../shared/types/form.types';
import { BREAKPOINTS } from '../../../../../blocks-core/src/public-api';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MarkdownModule
  ],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements OnInit {
  private modals = inject(ModalService);
  private http = inject(HttpClient);

  private openedCount = 0;

  readonly layoutOptions: ModalLayout[] = ['center', 'right', 'left', 'bottom-sheet'];
  readonly breakpointKeys = Object.keys(BREAKPOINTS) as (keyof typeof BREAKPOINTS)[];

  readonly form: FormGroup<ModalConfigFormControls>;

  protected readmeContent = signal<string>('');

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
      hasConfirmCloseGuard: new FormControl<boolean>(true),
    } as ModalConfigFormControls;;

    this.breakpointKeys.forEach(bp => {
      let defaultVal = 'none';
      if (bp === 'sm') defaultVal = 'bottom-sheet';
      if (bp === 'xl') defaultVal = 'center';

      controls[bp] = new FormControl(defaultVal);
    });

    this.form = new FormGroup<ModalConfigFormControls>(controls);
  }

  public ngOnInit() {
    this.loadReadme();
  }

  private loadReadme() {
    this.http.get('assets/README.md', { responseType: 'text' })
      .subscribe({
        next: (content) => {
          this.readmeContent.set(content);
        },
        error: (err) => {
          this.readmeContent.set('Failed to load README.md content.');
          console.error(err);
        }
      });
  }

  protected openModal(): void {
    const request = this.createRequest();
    if (!request) return;

    const bannerText = request.bannerText === '' ? null : request.bannerText;

    const modal = this.modals.open<IDemoModalData, IDemoModalResult>(DemoModal, {
      bannerText: bannerText || undefined,
      data: {
        title: request.title,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet neque sed enim aliquam ullamcorper. Donec tempus convallis dolor vitae faucibus. Vivamus sodales pulvinar porttitor. Donec hendrerit et ligula vitae iaculis. Ut quis nulla maximus eros sagittis pretium in vitae nunc. Duis dictum hendrerit porttitor. Aliquam erat volutpat. Nullam sollicitudin felis tellus, eu vestibulum ligula blandit a. Curabitur sit amet magna in dui rutrum feugiat dictum vel felis. Donec id euismod tortor. Fusce nisi risus, tristique a elit interdum, condimentum tempor ex. Suspendisse nec velit eget neque interdum suscipit. Nullam iaculis luctus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.In vitae dignissim mauris.Pellentesque malesuada nunc ut tortor vehicula aliquam.Phasellus volutpat purus sed neque sagittis venenatis.In lacinia dolor sit amet tortor tristique fringilla.Morbi vitae nulla non libero consequat facilisis id ac ligula.Maecenas augue est, fringilla at ante ut, commodo facilisis leo.Nullam vulputate aliquam pharetra.",
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
      closeGuard: request.hasConfirmCloseGuard ? new ModalConfirmCloseGuard<string, undefined>(ConfirmClose, {
        data: 'Are you sure you want to close the modal?',
        bannerText: 'Unsaved Changes',
        style: {
          showCloseButton: false
        }
      }) : undefined
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

    const cleanValues = Object.fromEntries(
      Object.entries(rawValue).map(([key, value]) => [key, value === null ? undefined : value])
    );

    return new ModalConfigRequest(cleanValues);
  }

  private getBreakpointsFromRequest(request: ModalConfigRequest): Record<string, ModalLayout> {
    const breakpoints: Record<string, ModalLayout> = {};

    this.breakpointKeys.forEach(key => {
      const val = request[key];
      if (val && val !== 'none') {
        breakpoints[key] = val as ModalLayout;
      }
    });

    return breakpoints;
  }

  private getOrdinal(n: number): string {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }
}