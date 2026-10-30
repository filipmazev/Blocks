import { ChangeDetectionStrategy, Component, ViewChild, computed, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Button, Checkbox, FormField, InputField, Radio, SliderDirective, SlideToggle, BxError } from '@filip.mazev/blocks/forms';
import {
  Menu,
  MenuItem,
  Tooltip,
  DropdownDirective,
  ContextMenuDirective,
  TooltipDirective,
  Tabs,
  Tab,
  TabContentDirective,
  TabsVariant
} from '@filip.mazev/blocks/primitives';
import { Breadcrumbs } from '@filip.mazev/blocks/navigation';
import { Icon } from '@filip.mazev/blocks/icons';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { ModalService, ModalBanner } from '@filip.mazev/blocks/modal';
import { ToastrService } from '@filip.mazev/blocks/toastr';
import { Readme } from '../../../shared/readme/readme';
import { TagExamples } from '../tag-examples/tag-examples';
import { TruncationExamples } from '../truncation-examples/truncation-examples';
import { FormExamples } from '../form-examples/form-examples';
import { SearchExamples } from '../search-examples/search-examples';
import { ComponentDialog } from './component-dialog';
import { IComponentDialogData } from './interfaces/icomponent-dialog-data.interface';
import { COMPONENT_EXAMPLES } from './component-catalog';

@Component({
  selector: 'app-component-demo',
  imports: [
    RouterLink,
    FormExamples,
    SearchExamples,
    TagExamples,
    TruncationExamples,
    ReactiveFormsModule,
    Button,
    Checkbox,
    FormField,
    InputField,
    Radio,
    SliderDirective,
    SlideToggle,
    BxError,
    Menu,
    MenuItem,
    Tooltip,
    DropdownDirective,
    ContextMenuDirective,
    TooltipDirective,
    Tabs,
    Tab,
    TabContentDirective,
    Breadcrumbs,
    Icon,
    BxSurfaceDirective,
    ModalBanner,
    Readme
  ],
  templateUrl: './component-demo.html',
  styleUrl: './component-demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentDemo {
  private readonly route = inject(ActivatedRoute);
  private readonly routeData = toSignal(this.route.data, { initialValue: this.route.snapshot.data });
  private readonly modals = inject(ModalService);
  private readonly toasts = inject(ToastrService);
  protected readonly entry = computed(() => COMPONENT_EXAMPLES.find((item) => item.id === this.routeData()['componentId']) ?? COMPONENT_EXAMPLES[0]);
  protected readonly count = signal(0);
  protected readonly status = signal('Ready to try.');
  protected readonly fieldValue = signal('');
  protected readonly showError = signal(false);
  protected readonly fieldError = computed(() => (this.showError() && this.fieldValue().trim().length < 3 ? 'Enter at least three characters.' : undefined));
  protected readonly name = new FormControl('Blocks workspace', { nonNullable: true, validators: Validators.required });
  protected readonly email = new FormControl('', { nonNullable: true, validators: Validators.email });
  protected readonly volume = new FormControl(50, { nonNullable: true });
  protected readonly quantity = new FormControl(3, { nonNullable: true });
  protected readonly checked = new FormControl(true, { nonNullable: true });
  protected readonly secondChecked = new FormControl(false, { nonNullable: true });
  protected readonly disabledCheck = new FormControl({ value: false, disabled: true }, { nonNullable: true });
  protected readonly frequency = new FormControl('weekly', { nonNullable: true });
  protected readonly destination = new FormControl('skopje', { nonNullable: true });
  protected readonly enabled = new FormControl(true, { nonNullable: true });
  protected readonly bannerVisible = signal(true);
  protected readonly selectedTab = signal<string | null>('overview');
  protected readonly tabsVariant = signal<TabsVariant>('segmented');
  protected readonly detailsDisabled = signal(false);
  protected readonly showActivity = signal(true);
  protected readonly tabNote = new FormControl('', { nonNullable: true });
  protected readonly options = [
    { label: 'Skopje', value: 'skopje' },
    { label: 'Ohrid', value: 'ohrid' },
    { label: 'Bitola', value: 'bitola' },
    { label: 'Unavailable destination', value: 'unavailable', disabled: true }
  ];

  @ViewChild(ContextMenuDirective) private contextMenu?: ContextMenuDirective;

  protected activate(label: string): void {
    this.count.update((count) => count + 1);
    this.status.set(`${label} · action ${this.count()}`);
  }

  protected updateField(event: Event): void {
    this.fieldValue.set((event.target as HTMLInputElement).value);
  }

  protected openContextMenu(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault();
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.contextMenu?.open(new MouseEvent('contextmenu', { clientX: rect.left + 16, clientY: rect.bottom + 4 }));
  }

  protected openModal(layout?: 'center' | 'left' | 'right' | 'bottom-sheet'): void {
    const selected = layout ?? (this.entry().id === 'modal-side' ? 'right' : this.entry().id === 'modal-bottom-sheet' ? 'bottom-sheet' : 'center');
    const ref = this.modals.open<IComponentDialogData, string>(ComponentDialog, {
      data: {
        title: this.entry().title,
        description: 'Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.'
      },
      header: { text: this.entry().title },
      style: { layout: selected, hasBackdrop: true, animate: true, showCloseButton: true }
    });
    ref.afterClosed().subscribe((result) => this.status.set(result.state === 'confirm' ? `Saved: ${result.data}` : 'Dialog dismissed.'));
  }

  protected notify(intent: 'success' | 'info' | 'warn' | 'danger'): void {
    const request = {
      title: intent === 'success' ? 'Settings saved' : intent === 'warn' ? 'Review needed' : intent === 'danger' ? 'Action failed' : 'Workspace update',
      message: 'This notification follows the application theme and appearance settings.',
      durationInMs: 4500
    };
    switch (intent) {
      case 'success':
        this.toasts.queueSuccess(request);
        break;
      case 'info':
        this.toasts.queueInfo(request);
        break;
      case 'warn':
        this.toasts.queueWarning(request);
        break;
      case 'danger':
        this.toasts.queueDanger(request);
        break;
    }
    this.status.set(`${intent} notification queued.`);
  }
}
