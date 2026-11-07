import type { Signal, TemplateRef, WritableSignal } from '@angular/core';
import type { FieldTree } from '@angular/forms/signals';

import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal, viewChild, viewChildren } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, FormField as SignalFormField, required } from '@angular/forms/signals';

import type { IBxSelectOption } from '@filip.mazev/blocks/forms';
import type {
  IStepDefinition,
  IStepperLabels,
  IStepperRequest,
  IStepperTransition,
  StepperContentPolicy,
  StepperGuard,
  StepperMode,
  StepperOrientation,
  StepperResponsive,
  StepperSize,
  StepperVariant
} from '@filip.mazev/blocks/navigation';
import type { IStepperDemoForm } from '@playground/components/screens/library-components/stepper-examples/interfaces/istepper-demo-form.interface';

import { BX_I18N, BxA11yService, resolveText } from '@filip.mazev/blocks/core';
import { Button, InputField, Select, SlideToggle } from '@filip.mazev/blocks/forms';
import { Step, StepContentDirective, StepLabelDirective, Stepper } from '@filip.mazev/blocks/navigation';
import { Alert } from '@filip.mazev/blocks/primitives';

import { DEMO_LANGUAGE_OPTIONS } from '@playground/components/screens/library-components/shared/i18n/constants/demo-language.constants';
import {
  STEPPER_GALLERY_STEPS,
  STEPPER_MODES,
  STEPPER_ORIENTATIONS,
  STEPPER_RESPONSIVE,
  STEPPER_SECTIONS,
  STEPPER_SIZE_OPTIONS,
  STEPPER_SIZES,
  STEPPER_VARIANT_OPTIONS,
  STEPPER_VARIANTS
} from '@playground/components/screens/library-components/stepper-examples/constants/stepper-demo.constants';
import { simulateStepperRequest } from '@playground/components/screens/library-components/stepper-examples/helpers/stepper-demo.helpers';
import { StepperDemoI18nService } from '@playground/components/screens/library-components/stepper-examples/services/stepper-demo-i18n.service';

@Component({
  selector: 'app-stepper-examples',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SignalFormField,
    Alert,
    Button,
    InputField,
    Select,
    SlideToggle,
    Stepper,
    Step,
    StepContentDirective,
    StepLabelDirective
  ],
  providers: [StepperDemoI18nService, { provide: BX_I18N, useExisting: StepperDemoI18nService }],
  templateUrl: './stepper-examples.html',
  styleUrl: './stepper-examples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperExamples {
  private readonly bxA11yService = inject(BxA11yService);

  protected readonly stepperDemoI18nService = inject(StepperDemoI18nService);

  private readonly sectionsWrapper: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('sectionsWrapper');
  private readonly dynamicContent: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('dynamicContent');

  private readonly sections: Signal<readonly ElementRef<HTMLElement>[]> = viewChildren<ElementRef<HTMLElement>>('section');

  protected readonly modes: typeof STEPPER_MODES = STEPPER_MODES;
  protected readonly variants: typeof STEPPER_VARIANT_OPTIONS = STEPPER_VARIANT_OPTIONS;
  protected readonly sizes: typeof STEPPER_SIZE_OPTIONS = STEPPER_SIZE_OPTIONS;
  protected readonly orientations: typeof STEPPER_ORIENTATIONS = STEPPER_ORIENTATIONS;
  protected readonly responsiveOptions: typeof STEPPER_RESPONSIVE = STEPPER_RESPONSIVE;
  protected readonly galleryVariants: typeof STEPPER_VARIANTS = STEPPER_VARIANTS;
  protected readonly gallerySizes: typeof STEPPER_SIZES = STEPPER_SIZES;
  protected readonly gallerySteps: typeof STEPPER_GALLERY_STEPS = STEPPER_GALLERY_STEPS;
  protected readonly sectionSteps: typeof STEPPER_SECTIONS = STEPPER_SECTIONS;
  protected readonly languages: typeof DEMO_LANGUAGE_OPTIONS = DEMO_LANGUAGE_OPTIONS;
  protected readonly policies: readonly StepperContentPolicy[] = ['eager', 'retained', 'active'];

  protected readonly mode: WritableSignal<StepperMode> = signal<StepperMode>('navigation');
  protected readonly variant: WritableSignal<StepperVariant> = signal<StepperVariant>('steps');
  protected readonly size: WritableSignal<StepperSize> = signal<StepperSize>('md');
  protected readonly orientation: WritableSignal<StepperOrientation> = signal<StepperOrientation>('horizontal');
  protected readonly responsive: WritableSignal<StepperResponsive> = signal<StepperResponsive>('compact');
  protected readonly active: WritableSignal<string | null> = signal<string | null>('build');
  protected readonly sectionActive: WritableSignal<string | null> = signal<string | null>('overview');
  protected readonly wizardActive: WritableSignal<string | null> = signal<string | null>('details');
  protected readonly controlledActive: WritableSignal<string | null> = signal<string | null>('plan');
  protected readonly status: WritableSignal<string> = signal('Use the controls to explore presentation and behavior.');
  protected readonly sectionStatus: WritableSignal<string> = signal('Choose a section or scroll the content. The application confirms the active ID.');
  protected readonly draft: WritableSignal<string> = signal('');
  protected readonly wizardStatus: WritableSignal<string> = signal('Enter a workspace name, then continue.');
  protected readonly nextOutcome: WritableSignal<'allow' | 'reject' | 'fail'> = signal('allow');
  protected readonly policy: WritableSignal<StepperContentPolicy> = signal<StepperContentPolicy>('retained');

  protected readonly pendingConfirmation: WritableSignal<IStepperTransition | null> = signal(null);

  protected readonly showLabels: WritableSignal<boolean> = signal(true);
  protected readonly errorState: WritableSignal<boolean> = signal(false);
  protected readonly loadingState: WritableSignal<boolean> = signal(false);
  protected readonly allowIndicatorRequests: WritableSignal<boolean> = signal(false);
  protected readonly readOnly: WritableSignal<boolean> = signal(false);
  protected readonly glass: WritableSignal<boolean> = signal(true);
  protected readonly lighting: WritableSignal<boolean> = signal(true);
  protected readonly linear: WritableSignal<boolean> = signal(true);
  protected readonly editable: WritableSignal<boolean> = signal(true);
  protected readonly extra: WritableSignal<boolean> = signal(false);

  protected readonly previewSteps: Signal<readonly IStepDefinition[]> = computed(() => {
    const steps: readonly IStepDefinition[] = [
      { id: 'plan', label: { key: 'plan' }, completed: true, icon: 'clipboard-check' },
      { id: 'build', label: { key: 'build' }, description: { key: 'buildDescription' }, icon: 'wrench' },
      { id: 'ship', label: { key: 'ship' }, optional: true, icon: 'send' },
      { id: 'archived', label: { key: 'archived' }, disabled: true, icon: 'archive' }
    ];

    return steps.map((step) => ({ ...step, error: step.id === this.active() && this.errorState(), loading: step.id === this.active() && this.loadingState() }));
  });
  protected readonly currentStepOptions: Signal<readonly IBxSelectOption<string>[]> = computed(() =>
    this.previewSteps().map((step) => ({
      value: step.id,
      label: `${resolveText(step.label, this.stepperDemoI18nService)} (${step.id})`,
      disabled: step.disabled
    }))
  );
  protected readonly confirmationLabel: Signal<string | null> = computed(() => {
    const result = this.pendingConfirmation();
    const destination = this.gallerySteps.find((step) => step.id === result?.toId);

    return result?.outcome === 'accepted' && destination && destination.id !== this.controlledActive()
      ? resolveText(destination.label, this.stepperDemoI18nService)
      : null;
  });
  protected readonly controlledMessage: Signal<string> = computed(() => {
    const result = this.pendingConfirmation();
    const destination = this.confirmationLabel();
    const current = resolveText(this.gallerySteps.find((step) => step.id === this.controlledActive())?.label, this.stepperDemoI18nService);

    if (destination) return `Request accepted. ${current} is still current. Select “Open ${destination}” to let the application confirm the new activeStep.`;

    if (result?.outcome === 'accepted') {
      return result.toId
        ? `The application opened ${current}. Request another step to repeat the two-stage flow.`
        : 'The workflow is complete. Reset to try requesting and confirming steps again.';
    }

    if (result) return `The request was ${result.outcome}. ${current} remains current; no destination is waiting for confirmation.`;

    return `Current step: ${current}. “Request next step” checks the transition. Then select “Open” to confirm it. This demo deliberately waits for that second action.`;
  });
  protected readonly dynamicSteps: Signal<readonly IStepDefinition[]> = computed(() => [
    { id: 'first', label: 'Start', content: this.dynamicContent() },
    ...(this.extra() ? [{ id: 'extra', label: 'Added step', optional: true, content: this.dynamicContent() }] : []),
    { id: 'last', label: 'Review', content: this.dynamicContent() }
  ]);

  protected readonly labels: Partial<IStepperLabels> = Object.fromEntries(
    [
      'label',
      'back',
      'next',
      'finish',
      'skip',
      'pending',
      'awaitingConfirmation',
      'active',
      'completed',
      'skipped',
      'error',
      'loading',
      'disabled',
      'optional',
      'invalid',
      'rejected',
      'position'
    ].map((key) => [key, { key }])
  );
  protected readonly controlledLabels: Partial<IStepperLabels> = {
    ...this.labels,
    next: 'Request next step',
    back: 'Request previous step'
  };
  protected readonly details: FormGroup<{ name: FormControl<string> }> = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: Validators.required })
  });
  protected readonly note: FormControl<string> = new FormControl('', { nonNullable: true });

  protected readonly signalModel: WritableSignal<IStepperDemoForm> = signal({ name: '' });

  protected readonly signalForm: FieldTree<IStepperDemoForm> = form(this.signalModel, (schema) => required(schema.name));

  protected readonly save: StepperGuard = (context) => {
    if (context.request.action === 'previous') return true;

    const outcome = this.nextOutcome();

    this.nextOutcome.set('allow');

    return simulateStepperRequest(context, outcome);
  };

  protected confirmPreview(request: IStepperRequest): void {
    this.status.set(`${request.source} request: ${request.id} (index ${request.index}). Application confirmed selection.`);
    this.active.set(request.id);
  }

  protected navigateSection(request: IStepperRequest): void {
    const wrapper = this.sectionsWrapper()?.nativeElement;
    const section = this.sections().find((item) => item.nativeElement.dataset['section'] === request.id)?.nativeElement;
    const first = this.sections()[0]?.nativeElement;

    if (!wrapper || !section || !first) return;

    this.sectionStatus.set(`Application handled ${request.source} request for section ${request.id}.`);
    wrapper.scrollTo({ top: section.offsetTop - first.offsetTop, behavior: this.bxA11yService.isReducedMotion() ? 'instant' : 'smooth' });
  }

  protected observeSections(): void {
    const wrapper = this.sectionsWrapper()?.nativeElement;

    if (!wrapper) return;

    const top = wrapper.getBoundingClientRect().top;
    const current = this.sections()
      .filter((section) => section.nativeElement.getBoundingClientRect().top <= top + 32)
      .at(-1);

    if (current) this.sectionActive.set(current.nativeElement.dataset['section'] ?? 'overview');
  }

  protected resetWizard(wizard: Stepper): void {
    wizard.reset();
    this.details.reset();
    this.note.reset();
    this.nextOutcome.set('allow');
    this.wizardStatus.set('Enter a workspace name, then continue.');
  }

  protected recordWizard(result: IStepperTransition): void {
    switch (result.outcome) {
      case 'accepted':
        this.wizardStatus.set(result.toId ? `Saved and advanced to ${result.toId}.` : 'Workspace saved. The workflow is complete.');
        break;
      case 'invalid':
        this.wizardStatus.set('Enter a workspace name before continuing. No save has started.');
        break;
      case 'error':
        this.wizardStatus.set('The simulated save failed. Your values are retained. Select Next or Finish once to retry.');
        break;
      case 'rejected':
        this.wizardStatus.set('The guard refused navigation. Your values are retained. Select Next or Finish once to try again.');
        break;
      case 'cancelled':
        this.wizardStatus.set('The save was cancelled because the workflow changed. Your values are retained.');
        break;
      case 'busy':
        break;
    }
  }

  protected confirmSelection(): void {
    const result = this.pendingConfirmation();

    if (result?.outcome === 'accepted' && result.toId && this.confirmationLabel()) this.controlledActive.set(result.toId);
  }
}
