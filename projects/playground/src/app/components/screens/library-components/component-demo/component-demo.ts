import type { Signal, WritableSignal } from '@angular/core';
import type { Data } from '@angular/router';

import { ChangeDetectionStrategy, Component, computed, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { Button, BxError, Checkbox, CheckboxIndicator, FormField, InputField, Radio, SliderDirective, SlideToggle } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { ModalBanner, ModalService } from '@filip.mazev/blocks/modal';
import { Breadcrumbs } from '@filip.mazev/blocks/navigation';
import {
  ContextMenuDirective,
  DropdownDirective,
  Menu,
  MenuItem,
  Tab,
  TabContentDirective,
  Tabs,
  TabsVariant,
  Tooltip,
  TooltipDirective
} from '@filip.mazev/blocks/primitives';
import { ToastrService } from '@filip.mazev/blocks/toastr';

import { IComponentDialogData } from '@playground/components/screens/library-components/component-demo/interfaces/icomponent-dialog-data.interface';
import { EssentialsExamples } from '@playground/components/screens/library-components/essentials-examples/essentials-examples';
import { FormExamples } from '@playground/components/screens/library-components/form-examples/form-examples';
import { MenuShortcutExamples } from '@playground/components/screens/library-components/menu-shortcut-examples/menu-shortcut-examples';
import { SearchExamples } from '@playground/components/screens/library-components/search-examples/search-examples';
import { SideNavExamples } from '@playground/components/screens/library-components/side-nav-examples/side-nav-examples';
import { TagExamples } from '@playground/components/screens/library-components/tag-examples/tag-examples';
import { TopNavExamples } from '@playground/components/screens/library-components/top-nav-examples/top-nav-examples';
import { TruncationExamples } from '@playground/components/screens/library-components/truncation-examples/truncation-examples';
import { Readme } from '@playground/components/shared/readme/readme';

import { Highlight } from 'ngx-highlightjs';

import type { ComponentExample } from './component-catalog';

import { COMPONENT_EXAMPLES } from './component-catalog';
import { ComponentDialog } from './component-dialog';

@Component({
  selector: 'app-component-demo',
  imports: [
    Highlight,
    RouterLink,
    FormExamples,
    SearchExamples,
    EssentialsExamples,
    MenuShortcutExamples,
    TagExamples,
    SideNavExamples,
    TopNavExamples,
    TruncationExamples,
    ReactiveFormsModule,
    Button,
    Checkbox,
    CheckboxIndicator,
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
  private readonly modals = inject(ModalService);
  private readonly toasts = inject(ToastrService);

  private readonly routeData: Signal<Data> = toSignal(this.route.data, { initialValue: this.route.snapshot.data });

  private readonly contextMenu: Signal<ContextMenuDirective | undefined> = viewChild(ContextMenuDirective);

  protected readonly entry: Signal<ComponentExample> = computed(
    () => COMPONENT_EXAMPLES.find((item) => item.id === this.routeData()['componentId']) ?? COMPONENT_EXAMPLES[0]
  );

  protected readonly count: WritableSignal<number> = signal(0);

  protected readonly status: WritableSignal<string> = signal('Ready to try.');
  protected readonly fieldValue: WritableSignal<string> = signal('');

  protected readonly showError: WritableSignal<boolean> = signal(false);

  protected readonly fieldError: Signal<'Enter at least three characters.' | undefined> = computed(() =>
    this.showError() && this.fieldValue().trim().length < 3 ? 'Enter at least three characters.' : undefined
  );

  protected readonly name: FormControl<string> = new FormControl('Blocks workspace', { nonNullable: true, validators: Validators.required });
  protected readonly email: FormControl<string> = new FormControl('', { nonNullable: true, validators: Validators.email });
  protected readonly volume: FormControl<number> = new FormControl(50, { nonNullable: true });
  protected readonly quantity: FormControl<number> = new FormControl(3, { nonNullable: true });
  protected readonly checked: FormControl<boolean> = new FormControl(true, { nonNullable: true });
  protected readonly secondChecked: FormControl<boolean> = new FormControl(false, { nonNullable: true });
  protected readonly disabledCheck: FormControl<boolean> = new FormControl({ value: false, disabled: true }, { nonNullable: true });
  protected readonly frequency: FormControl<string> = new FormControl('weekly', { nonNullable: true });
  protected readonly destination: FormControl<string> = new FormControl('skopje', { nonNullable: true });
  protected readonly enabled: FormControl<boolean> = new FormControl(true, { nonNullable: true });

  protected readonly bannerVisible: WritableSignal<boolean> = signal(true);

  protected readonly selectedTab: WritableSignal<string | null> = signal<string | null>('overview');
  protected readonly tabsVariant: WritableSignal<TabsVariant> = signal<TabsVariant>('segmented');

  protected readonly detailsDisabled: WritableSignal<boolean> = signal(false);
  protected readonly showActivity: WritableSignal<boolean> = signal(true);

  protected readonly tabNote: FormControl<string> = new FormControl('', { nonNullable: true });
  protected readonly options: ({ label: string; value: string; disabled?: undefined } | { label: string; value: string; disabled: boolean })[] = [
    { label: 'Skopje', value: 'skopje' },
    { label: 'Ohrid', value: 'ohrid' },
    { label: 'Bitola', value: 'bitola' },
    { label: 'Unavailable destination', value: 'unavailable', disabled: true }
  ];

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

    this.contextMenu()?.open(new MouseEvent('contextmenu', { clientX: rect.left + 16, clientY: rect.bottom + 4 }));
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
