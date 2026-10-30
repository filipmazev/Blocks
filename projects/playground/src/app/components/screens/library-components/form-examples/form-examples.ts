import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, resource, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  debounce,
  disabled,
  email,
  form,
  FormField as SignalFormField,
  FormRoot,
  max,
  min,
  minLength,
  readonly as readonlyRule,
  required,
  validate,
  validateAsync
} from '@angular/forms/signals';
import {
  Button,
  BxError,
  BxHint,
  Checkbox,
  ErrorDisplayPolicy,
  FormField,
  InputField,
  ISelectAllChange,
  ISelectionChange,
  LoadMoreDirective,
  MultiSelect,
  NativeControlDirective,
  PrefixDirective,
  Radio,
  RadioGroup,
  RangeSlider,
  Select,
  SliderDirective,
  SlideToggle,
  SuffixDirective
} from '@filip.mazev/blocks/forms';
import { LoadingIndicator, LoadingSpinner, ProgressBar } from '@filip.mazev/blocks/primitives';
import { BX_I18N, ResolvableText } from '@filip.mazev/blocks/core';
import { DemoI18nService } from './services/demo-i18n.service';
import { Icon } from '@filip.mazev/blocks/icons';
import {
  INITIAL_REGISTRATION,
  DEMO_DESTINATIONS,
  DEMO_PROJECT_MESSAGES,
  DEMO_PAGE_SIZES,
  DEMO_ALL_SELECTED_TOOLTIP_OPTIONS
} from './constants/form-examples.constants';
import { IRegistrationData } from './interfaces/iregistration-data.interface';
import { MockFormsApi } from './services/mock-forms-api.service';
import { MockOptionsStore } from './services/mock-options-store.service';

@Component({
  selector: 'app-form-examples',
  imports: [
    JsonPipe,
    FormsModule,
    ReactiveFormsModule,
    SignalFormField,
    FormRoot,
    Button,
    BxError,
    BxHint,
    Checkbox,
    FormField,
    InputField,
    LoadMoreDirective,
    MultiSelect,
    NativeControlDirective,
    PrefixDirective,
    Radio,
    RadioGroup,
    RangeSlider,
    Select,
    SliderDirective,
    SlideToggle,
    SuffixDirective,
    LoadingIndicator,
    LoadingSpinner,
    ProgressBar,
    Icon
  ],
  providers: [MockOptionsStore, DemoI18nService, { provide: BX_I18N, useExisting: DemoI18nService }],
  templateUrl: './form-examples.html',
  styleUrl: './form-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormExamples {
  private readonly api = inject(MockFormsApi);
  private readonly translations = inject(DemoI18nService);
  protected readonly remote = inject(MockOptionsStore);
  protected readonly model = signal<IRegistrationData>({ ...INITIAL_REGISTRATION, categories: [] });
  protected readonly locked = signal(false);
  protected readonly readOnly = signal(false);
  protected readonly policy = signal<ErrorDisplayPolicy>('touched');
  protected readonly status = signal('Complete the form to submit.');
  protected readonly events = signal<readonly string[]>([]);
  protected readonly selected = signal<string[] | null>([]);
  protected readonly destination = signal<string | null>(null);
  protected readonly useTags = signal(false);
  protected readonly allowClearing = signal(true);
  protected readonly allSelectedTooltipMode = signal<string | null>('total');
  protected readonly allSelectedTooltipText = signal('All matching locations');
  protected readonly allSelectedTooltipOptions = DEMO_ALL_SELECTED_TOOLTIP_OPTIONS;
  protected readonly allSelectedTooltip = computed<ResolvableText | false | undefined>(() => {
    const mode = this.allSelectedTooltipMode();

    if (mode === 'custom') return this.allSelectedTooltipText();
    if (mode === 'loaded') return undefined;
    if (mode === 'disabled' || this.remote.selectableTotal() === undefined) return false;

    this.translations.version();

    return this.translations.translate('allLocationsTooltip', { total: this.remote.selectableTotal() });
  });

  protected readonly visibleTagLimit = signal(1);
  protected readonly searchLoadingText = signal(false);
  protected readonly summaryLimit = signal(2);
  protected readonly range = signal<[number, number] | null>([20, 80]);
  protected readonly loadingAction = signal(false);
  protected readonly progress = signal(0);
  protected readonly blurControl = new FormControl('', { nonNullable: true, updateOn: 'blur' });
  protected readonly submitForm = new FormGroup({ name: new FormControl('', { nonNullable: true, updateOn: 'submit' }) });
  protected readonly submitSnapshot = signal('');
  protected readonly templateValue = signal('');
  protected readonly pageSizes = DEMO_PAGE_SIZES;
  protected readonly options = DEMO_DESTINATIONS;
  protected readonly projectMessages = DEMO_PROJECT_MESSAGES;
  protected readonly registration = form(
    this.model,
    (p) => {
      required(p.project, { message: 'Enter a project name.' });
      minLength(p.project, 3);
      validateAsync(p.project, {
        params: ({ value }) => value(),
        debounce: 300,
        factory: (params) => resource({ params, loader: ({ params, abortSignal }) => this.api.available(params, abortSignal) }),
        onSuccess: (available) => (available ? null : { kind: 'taken', message: 'That project name is already used. Try another.' }),
        onError: () => ({ kind: 'availability', message: 'Availability could not be checked.' })
      });
      required(p.email, { message: 'Email is required.' });
      email(p.email, { message: 'Enter a valid email address.' });
      required(p.password);
      minLength(p.password, 8, { message: 'Use at least eight characters.' });
      required(p.confirmation);
      validate(p.confirmation, ({ value, valueOf }) => (value() === valueOf(p.password) ? null : { kind: 'mismatch', message: 'Passwords must match.' }));
      required(p.teamSize);
      min(p.teamSize, 1);
      max(p.teamSize, 20);
      required(p.destination);
      required(p.categories);
      required(p.plan);
      required(p.terms, { message: 'Accept the terms to continue.' });
      required(p.note, { when: ({ valueOf }) => valueOf(p.notifications), message: 'Add a notification note.' });
      debounce(p.note, 'blur');
      disabled(p, () => this.locked());
      readonlyRule(p.email, () => this.readOnly());
    },
    {
      submission: {
        ignoreValidators: 'none',
        action: async (field) => {
          const saved = await this.api.save(field().value());

          if (!saved) return { kind: 'server', message: 'The server rejected this email. Edit it and retry.', fieldTree: field.email };

          this.status.set('Saved successfully.');
          return null;
        },
        onInvalid: (field) => {
          this.status.set('Review the validation messages.');
          field().errorSummary()[0]?.fieldTree().focusBoundControl();
        }
      }
    }
  );

  protected readonly canSubmit = computed(() => this.registration().valid() && !this.registration().submitting() && !this.locked());
  protected readonly validationStatus = computed(() =>
    this.registration().pending() ? 'Checking availability' : this.registration().valid() ? 'Ready to submit' : 'Needs attention'
  );

  public readonly example = input('signal-forms');

  constructor() {
    effect(() => {
      this.status.set(this.validationStatus());
    });
  }

  protected validateAll(): void {
    this.registration().markAsTouched();
    this.registration().errorSummary()[0]?.fieldTree().focusBoundControl();
  }

  protected resetForm(): void {
    this.registration().reset({ ...INITIAL_REGISTRATION, categories: [] });
  }

  protected populate(): void {
    this.model.set({
      project: 'My workspace',
      email: 'person@example.com',
      password: 'long-password',
      confirmation: 'long-password',
      teamSize: 3,
      destination: 'skopje',
      categories: ['ohrid'],
      plan: 'team',
      terms: true,
      notifications: false,
      note: '',
      budget: 50
    });
  }

  protected recordIntent(event: ISelectAllChange<string>): void {
    this.events.update((events) =>
      [`select-all: ${event.selected}, ${event.reason}, scope=${event.scope || 'all'}, loaded=${event.values.length}`, ...events].slice(0, 8)
    );
  }

  protected recordSelection(event: ISelectionChange<string[]>): void {
    this.events.update((events) => [`selection: ${event.source}, ${event.value.length} values`, ...events].slice(0, 8));
  }

  protected changeVisibleTags(value: string | number | null): void {
    this.visibleTagLimit.set(Math.max(1, Number(value) || 1));
  }

  protected changeSummaryLimit(value: string | number | null): void {
    this.summaryLimit.set(Math.max(2, Number(value) || 2));
  }

  protected captureSubmit(): void {
    this.submitSnapshot.set(this.submitForm.getRawValue().name);
  }

  protected changePageSize(value: number | null): void {
    this.remote.pageSize.set(value ?? 3);
    this.remote.search(this.remote.query());
  }

  protected async runAction(): Promise<void> {
    if (this.loadingAction()) return;

    this.loadingAction.set(true);
    this.progress.set(15);
    await this.api.available('demo', new AbortController().signal);
    this.progress.set(70);
    await this.api.save(this.model());
    this.progress.set(100);
    this.loadingAction.set(false);
  }
}
