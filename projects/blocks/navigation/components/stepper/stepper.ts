import type { InputSignal, InputSignalWithTransform, ModelSignal, OutputEmitterRef, Signal, TemplateRef, WritableSignal } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';
import {
  afterRenderEffect,
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
  untracked,
  viewChild,
  viewChildren
} from '@angular/core';

import type { GlassinessMode } from '@filip.mazev/blocks/effects/runtime';
import type { IStepDefinition } from '@navigation/interfaces/istep-definition.interface';
import type { IStepperCompletion } from '@navigation/interfaces/istepper-completion.interface';
import type { IStepperLabels } from '@navigation/interfaces/istepper-labels.interface';
import type { IStepperRequest } from '@navigation/interfaces/istepper-request.interface';
import type { IStepperSelection } from '@navigation/interfaces/istepper-selection.interface';
import type { IStepperTransition } from '@navigation/interfaces/istepper-transition.interface';
import type { IStepperView } from '@navigation/interfaces/istepper-view.interface';
import type {
  StepperAction,
  StepperContentPolicy,
  StepperGuard,
  StepperMode,
  StepperOrientation,
  StepperProgressFormat,
  StepperResponsive,
  StepperSelectionMode,
  StepperSize,
  StepperSource,
  StepperStatus,
  StepperVariant
} from '@navigation/types/stepper.types';

import { BX_I18N, BxA11yService, resolveText, uuidv4 } from '@filip.mazev/blocks/core';
import { BxSurfaceDirective } from '@filip.mazev/blocks/effects';
import { createSpringMotion, ISpringMotion, MOTION_PRESETS, paintMotionStyles, refreshGlassLighting } from '@filip.mazev/blocks/effects/runtime';
import { Button } from '@filip.mazev/blocks/forms';
import { Icon } from '@filip.mazev/blocks/icons';
import { LoadingSpinner, ProgressBar } from '@filip.mazev/blocks/primitives';

import { Step } from '@navigation/components/step/step';
import { STEPPER_LABELS } from '@navigation/constants/stepper.constants';
import { STEPPER_EMISSION_STRENGTH } from '@navigation/constants/stepper-motion.constants';
import { isStepPending, isStepValid } from '@navigation/helpers/stepper.helpers';
import { StepperWorkflowService } from '@navigation/services/stepper-workflow.service';
import { BX_STEPPER_DEFAULTS } from '@navigation/tokens/stepper-defaults.token';

/** Shared progress presentation, application-controlled navigation and guarded wizard workflows. */
@Component({
  selector: 'bx-stepper',
  imports: [NgTemplateOutlet, BxSurfaceDirective, Button, Icon, LoadingSpinner, ProgressBar],
  providers: [StepperWorkflowService],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-mode]': 'mode()',
    '[attr.data-variant]': 'variant()',
    '[attr.data-size]': 'size()',
    '[attr.data-orientation]': 'orientation()',
    '[attr.data-responsive]': 'responsive()',
    '[attr.data-labels]': 'showLabels()',
    '[class.is-reduced-motion]': 'bxA11yService.isReducedMotion()',
    '[class.is-readonly]': 'isReadonly()'
  }
})
export class Stepper {
  private readonly i18n = inject(BX_I18N, { optional: true });
  private readonly defaults = inject(BX_STEPPER_DEFAULTS, { optional: true });
  private readonly destroyRef = inject(DestroyRef);
  private readonly nativeElement = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly stepperWorkflowService = inject(StepperWorkflowService);

  protected readonly bxA11yService = inject(BxA11yService);

  private readonly instanceId: string = `bx-stepper-${uuidv4()}`;
  private readonly markerMotions: Map<HTMLElement, ISpringMotion> = new Map();
  private readonly markerStatuses: Map<HTMLElement, StepperStatus> = new Map();

  private readonly validationRevision: WritableSignal<number> = signal(0);

  private readonly visited: WritableSignal<ReadonlySet<string>> = signal(new Set<string>());

  private readonly focusTarget: WritableSignal<string | true | null> = signal<string | true | null>(null);
  private readonly focusedId: WritableSignal<string | null> = signal(null);
  private readonly transitionState: WritableSignal<IStepperTransition | null> = signal(null);
  private readonly confirmationState: WritableSignal<IStepperTransition | null> = signal(null);
  private readonly feedback: WritableSignal<'invalid' | 'rejected' | 'error' | null> = signal(null);

  private readonly definitions: Signal<readonly IStepDefinition[]> = computed(() => {
    const configured = this.steps();
    const projected = this.projectedSteps();

    if (configured !== undefined && projected.length) throw new Error('bx-stepper: use either steps or projected bx-step definitions, never both.');

    const steps = configured ?? projected.map((step) => step.definition());
    const ids = new Set<string>();

    for (const step of steps) {
      if (!step.id.trim() || ids.has(step.id)) throw new Error(`bx-stepper: nonempty unique step IDs are required (${JSON.stringify(step.id)}).`);

      ids.add(step.id);
    }

    return steps;
  });
  private readonly awaitingStepId: Signal<string | null> = computed(() => {
    const result = this.confirmationState();
    const current = this.selectedStep()?.id;

    if (this.mode() !== 'wizard' || this.selectionMode() !== 'controlled' || this.pending() || this.isComplete() || this.isReadonly()) return null;

    if (result?.outcome !== 'accepted' || !result.toId || result.toId === current || result.fromId !== current) return null;

    const destination = this.definitions().find((step) => step.id === result.toId);

    return destination && !this.unavailable(destination) ? destination.id : null;
  });

  private readonly stepList: Signal<ElementRef<HTMLOListElement> | undefined> = viewChild<ElementRef<HTMLOListElement>>('stepList');
  private readonly selection: Signal<ElementRef<HTMLElement> | undefined> = viewChild<ElementRef<HTMLElement>>('selection');

  private readonly projectedSteps: Signal<readonly Step[]> = contentChildren(Step);

  private readonly markers: Signal<readonly ElementRef<HTMLElement>[]> = viewChildren<ElementRef<HTMLElement>>('marker');
  private readonly connectors: Signal<readonly ElementRef<HTMLElement>[]> = viewChildren<ElementRef<HTMLElement>>('connector');
  private readonly triggers: Signal<readonly ElementRef<HTMLButtonElement>[]> = viewChildren<ElementRef<HTMLButtonElement>>('trigger');
  private readonly panels: Signal<readonly ElementRef<HTMLElement>[]> = viewChildren<ElementRef<HTMLElement>>('panel');

  protected readonly text: Signal<Record<keyof IStepperLabels, string>> = computed(() => {
    const keys = Object.keys(STEPPER_LABELS) as (keyof IStepperLabels)[];

    return Object.fromEntries(
      keys.map((key) => [key, resolveText(this.labels()[key] ?? this.defaults?.labels?.[key] ?? STEPPER_LABELS[key], this.i18n)])
    ) as Record<keyof IStepperLabels, string>;
  });
  protected readonly interactive: Signal<boolean> = computed(() => this.mode() !== 'indicator' || this.indicatorInteractive());

  protected readonly emissionStrength: typeof STEPPER_EMISSION_STRENGTH = STEPPER_EMISSION_STRENGTH;

  protected readonly selectionColor: Signal<string> = computed(() =>
    this.rows().find((row) => row.step.id === this.selectedStep()?.id)?.status === 'error' ? 'var(--bx-bg-danger)' : 'var(--step-color)'
  );
  protected readonly markerIconSize: Signal<number> = computed(() => (this.size() === 'sm' ? 16 : this.size() === 'lg' ? 20 : 18));
  protected readonly rows: Signal<readonly IStepperView[]> = computed(() => {
    this.validationRevision();

    return this.definitions().map((step) => {
      const status = this.status(step);
      const awaitingConfirmation = this.awaitingStepId() === step.id;
      const detail = [
        awaitingConfirmation ? this.text().awaitingConfirmation : this.text()[status],
        step.optional ? this.text().optional : '',
        resolveText(step.statusText, this.i18n)
      ]
        .filter(Boolean)
        .join(' · ');

      return {
        step,
        label: resolveText(step.label, this.i18n),
        description: resolveText(step.description, this.i18n),
        detail,
        status,
        awaitingConfirmation,
        complete: this.stepperWorkflowService.isComplete(step),
        triggerId: `${this.instanceId}-trigger-${encodeURIComponent(step.id)}`,
        panelId: `${this.instanceId}-panel-${encodeURIComponent(step.id)}`
      };
    });
  });
  protected readonly summary: Signal<string> = computed(() => {
    const index = this.definitions().findIndex((step) => step.id === this.selectedStep()?.id);
    const params = {
      index: index + 1,
      count: this.definitions().length,
      label: resolveText(this.selectedStep()?.label, this.i18n),
      percent: Math.round(this.progress())
    };
    const source = this.labels().position ?? this.defaults?.labels?.position ?? STEPPER_LABELS.position;
    const resolved = resolveText(source, this.i18n, params);

    return resolved.replace(/\{(index|count|label|percent)\}/g, (_, key: keyof typeof params) => String(params[key]));
  });
  protected readonly progressDisplay: Signal<string> = computed(() => {
    if (this.progressFormat() === 'percentage') return `${this.progress().toFixed(0)}%`;

    this.validationRevision();

    const enabled = this.definitions().filter((step) => !step.disabled);
    const completed = enabled.filter((step) => this.stepperWorkflowService.isComplete(step)).length;

    return `${completed}/${enabled.length}`;
  });
  protected readonly announcement: Signal<string> = computed(() => {
    if (this.isComplete()) return this.text().completed;

    if (this.pending()) return this.text().loading;

    const feedback = this.feedback();

    return feedback ? this.text()[feedback] : '';
  });
  protected readonly hasPrevious: Signal<boolean> = computed(() => this.neighbor(-1) !== undefined);
  protected readonly hasNext: Signal<boolean> = computed(() => this.neighbor(1) !== undefined);

  /** Effective selected metadata; unknown, removed or disabled IDs render the first enabled step without mutating external selection. */
  public readonly selectedStep: Signal<IStepDefinition | null> = computed(() => {
    const steps = this.definitions();

    return steps.find((step) => step.id === this.activeStep() && !step.disabled) ?? steps.find((step) => !step.disabled) ?? null;
  });
  /** Whether either readonly input prevents edits while retaining focus, content and a neutral presentation. */
  public readonly isReadonly: Signal<boolean> = computed(() => this.readOnly() || this.readonly());

  /** Current guarded operation, or null when idle. Duplicate operations return busy. */
  public readonly pending: Signal<IStepperRequest | null> = this.stepperWorkflowService.pending;
  /** Whether the final action succeeded since reset; visiting the final step does not finish a workflow. */
  public readonly isComplete: Signal<boolean> = this.stepperWorkflowService.finished;
  /** Most recently settled non-cancelled transition result; reset clears it. */
  public readonly lastTransition: Signal<IStepperTransition | null> = this.transitionState.asReadonly();

  /** Actual completed fraction on a 0–100 scale, or the clamped explicit progressValue. Active position never implies completion. */
  public readonly progress: Signal<number> = computed(() => {
    this.validationRevision();

    const explicit = this.progressValue();
    const steps = this.definitions().filter((step) => !step.disabled);

    if (explicit !== undefined) return Number.isFinite(explicit) ? Math.min(100, Math.max(0, explicit)) : 0;

    return steps.length ? (steps.filter((step) => this.stepperWorkflowService.isComplete(step)).length / steps.length) * 100 : 0;
  });

  /** Behavior independent of visual variant. Defaults to indicator. */
  public readonly mode: InputSignal<StepperMode> = input<StepperMode>('indicator');
  /** Data-driven definitions; omit when using projected bx-step children. Mixing sources throws a descriptive error. */
  public readonly steps: InputSignal<readonly IStepDefinition[] | undefined> = input<readonly IStepDefinition[]>();
  /** Presentation shared by all modes. Defaults to steps. */
  public readonly variant: InputSignal<StepperVariant> = input<StepperVariant>('steps');
  /** Density, marker dimensions and connector/segment thickness. Defaults to md. */
  public readonly size: InputSignal<StepperSize> = input<StepperSize>('md');
  /** Base layout direction. Defaults to horizontal. */
  public readonly orientation: InputSignal<StepperOrientation> = input<StepperOrientation>('horizontal');
  /** Narrow-screen behavior at the shared sm breakpoint: horizontal scroll, vertical layout, or reduced labels. Defaults to scroll. */
  public readonly responsive: InputSignal<StepperResponsive> = input<StepperResponsive>('scroll');
  /** Optional visible labels; accessible names remain available when false. Defaults to true. */
  public readonly showLabels: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Optional supporting descriptions; defaults to true. */
  public readonly showDescriptions: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Enables request-only interaction in indicator mode. Defaults to false, producing no focusable step controls. */
  public readonly indicatorInteractive: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Blocks selection changes and wizard actions while preserving enabled presentation and keyboard inspection. Defaults to false. */
  public readonly readOnly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Lowercase readonly form-state alias, combined with readOnly. Defaults to false. */
  public readonly readonly: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Wizard prerequisite enforcement; completed required predecessors must remain valid. Defaults to true. */
  public readonly linear: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Wizard commits selection internally by default. Controlled mode emits accepted transitions and awaits application-owned activeStep updates. */
  public readonly selectionMode: InputSignal<StepperSelectionMode> = input<StepperSelectionMode>('internal');
  /** Optional final guard after per-step exit/enter guards. Receives an AbortSignal for cancellation. */
  public readonly beforeTransition: InputSignal<StepperGuard | undefined> = input<StepperGuard>();
  /** Displays Blocks Back/Next/Skip/Finish buttons only in wizard mode. Defaults to true. */
  public readonly controls: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Content lifecycle: eager, lazy retained (default), or destroy inactive templates (active). Direct projected content is always created eagerly. */
  public readonly contentPolicy: InputSignal<StepperContentPolicy> = input<StepperContentPolicy>('retained');
  /** Moves focus to newly selected wizard panels after rendering. Defaults to true; navigation mode never steals focus. */
  public readonly focusOnChange: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Optional application-owned completion view, rendered after a successful finish action. */
  public readonly completionContent: InputSignal<TemplateRef<unknown> | undefined> = input<TemplateRef<unknown>>();
  /** Optional partial completion percentage on a 0–100 scale. Omission derives actual completed steps, excluding disabled steps. */
  public readonly progressValue: InputSignal<number | undefined> = input<number>();
  /** Completion counter format: percentage (default) or completed/enabled steps as X/N. Fractions use actual completion, independent of progressValue. */
  public readonly progressFormat: InputSignal<StepperProgressFormat> = input<StepperProgressFormat>('percentage');
  /** Shows the completion counter beside the position summary; progressFormat selects percentage or fraction. Defaults to false. */
  public readonly showPercentage: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Translatable labels; individual instance values override BX_STEPPER_DEFAULTS and English defaults. */
  public readonly labels: InputSignal<Partial<IStepperLabels>> = input<Partial<IStepperLabels>>({});
  /** Card surface glass override; omission inherits application appearance. Global accessibility and appearance policies take precedence. */
  public readonly glassiness: InputSignal<GlassinessMode | undefined> = input<GlassinessMode>();
  /** Enables shared surface interaction lighting for interactive steps. Defaults to true. */
  public readonly surfaceEffects: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });

  /** Stable active ID, supporting two-way binding. External updates confirm selection directly; use methods for guarded wizard navigation. Defaults to null. */
  public readonly activeStep: ModelSignal<string | null> = model<string | null>(null);

  /** Navigation intent before wizard validation; indicator/navigation modes never commit selection automatically. */
  public readonly stepRequested: OutputEmitterRef<IStepperRequest> = output<IStepperRequest>();
  /** Confirmed effective selection, including external changes and deterministic fallback after removal. */
  public readonly selectionChanged: OutputEmitterRef<IStepperSelection> = output<IStepperSelection>();
  /** Settled guard/validation result; accepted controlled transitions still require application confirmation. */
  public readonly transitionFinished: OutputEmitterRef<IStepperTransition> = output<IStepperTransition>();
  /** Successful final action with completed and skipped IDs; emitted once until reset. */
  public readonly completed: OutputEmitterRef<IStepperCompletion> = output<IStepperCompletion>();

  private previousId: string | null = null;
  private selectionMotion: ISpringMotion | undefined;
  private selectionLayout: string | null = null;
  private selectionSize: string | null = null;
  private selectionTarget: string | null = null;

  constructor() {
    afterRenderEffect(() => {
      const rows = this.rows();
      const selected = this.selectedStep()?.id;
      const reduced = this.bxA11yService.isReducedMotion();
      const markers = this.markers().map((marker) => marker.nativeElement);

      for (const [marker, motion] of this.markerMotions) {
        if (markers.includes(marker)) continue;

        motion.destroy();
        this.markerMotions.delete(marker);
        this.markerStatuses.delete(marker);
      }

      markers.forEach((marker, index) => {
        const row = rows[index];
        const body = marker.parentElement;
        const item = body?.parentElement;

        if (!row || !item) return;

        const target = [row.step.id === selected ? 1 : 0, row.complete ? 1 : 0];
        const existing = this.markerMotions.get(marker);
        const motion =
          existing ??
          createSpringMotion(
            target,
            ([active, complete]) => {
              paintMotionStyles(item, { '--step-activation': String(active), '--step-completion': String(Math.max(0, Math.min(1, complete))) });
            },
            MOTION_PRESETS.elastic
          );

        this.markerMotions.set(marker, motion);
        motion.retarget(target, reduced || !existing);

        if (this.markerStatuses.get(marker) !== row.status) {
          this.markerStatuses.set(marker, row.status);
          refreshGlassLighting(marker, true);
        }
      });
    });
    this.destroyRef.onDestroy(() => {
      for (const motion of this.markerMotions.values()) motion.destroy();

      this.markerMotions.clear();
      this.markerStatuses.clear();
      this.selectionMotion?.destroy();
    });

    effect((onCleanup) => {
      const subscriptions = this.definitions().flatMap((step) => {
        const subscription = step.validation?.statusChanges?.subscribe(() => this.validationRevision.update((revision) => revision + 1));

        return subscription ? [subscription] : [];
      });

      onCleanup(() => subscriptions.forEach((subscription) => subscription.unsubscribe()));
    });

    effect(() => {
      const steps = this.definitions();
      const id = this.selectedStep()?.id ?? null;
      const mode = this.mode();

      this.isReadonly();
      this.linear();
      this.selectionMode();
      this.beforeTransition();

      untracked(() => {
        this.stepperWorkflowService.cancel();
        this.confirmationState.set(null);
        this.stepperWorkflowService.reconcile(new Set(steps.map((step) => step.id)));
        this.visited.update((ids) => new Set([...ids, ...(mode === 'wizard' && id ? [id] : [])].filter((value) => steps.some((step) => step.id === value))));

        if (this.previousId !== id) {
          if (this.previousId && mode === 'wizard' && this.focusOnChange()) this.focusTarget.set(id);

          this.selectionChanged.emit({ id, index: steps.findIndex((step) => step.id === id), previousId: this.previousId });
          this.previousId = id;
          this.feedback.set(null);
        }
      });
    });

    afterRenderEffect((onCleanup) => {
      const list = this.stepList()?.nativeElement;
      const markers = this.markers().map((marker) => marker.nativeElement);
      const connectors = this.connectors().map((connector) => connector.nativeElement);
      const view = list?.ownerDocument.defaultView;

      this.rows();
      this.size();
      this.orientation();
      this.responsive();
      this.showLabels();
      this.showDescriptions();
      this.bxA11yService.isReducedMotion();
      this.variant();

      if (!list || !view) return;

      const measure = (): void => {
        this.positionConnectors(list, markers, connectors);
        this.positionSelection(list, markers);
      };

      measure();

      if (!view.ResizeObserver) return;

      const observer = new view.ResizeObserver(measure);

      observer.observe(list);

      for (const marker of markers) {
        observer.observe(marker);

        if (marker.parentElement?.parentElement) observer.observe(marker.parentElement.parentElement);
      }

      onCleanup(() => observer.disconnect());
    });

    afterRenderEffect(() => {
      const id = this.focusTarget();

      if (!id) return;

      const panel = id === true ? this.nativeElement.querySelector<HTMLElement>('[data-completion]') : this.panelElement(id);
      const fallback = this.triggers().find((trigger) => trigger.nativeElement.dataset['stepId'] === id)?.nativeElement;

      (panel ?? fallback)?.focus({ preventScroll: true });
      this.focusTarget.set(null);
    });
  }

  /**
   * Requests a stable ID using the same lifecycle as built-in controls. Indicator/navigation modes emit intent without committing.
   * @param id - Requested destination; unknown and disabled IDs return a rejected result.
   * @param source - Request origin; defaults to programmatic.
   */
  public goTo(id: string, source: StepperSource = 'programmatic'): Promise<IStepperTransition> {
    return this.request(id, 'select', source);
  }

  /**
   * Requests the next enabled step, validating and completing the current wizard step on success.
   * @param source - Request origin; defaults to programmatic.
   */
  public next(source: StepperSource = 'programmatic'): Promise<IStepperTransition> {
    return this.request(this.neighbor(1)?.id, 'next', source);
  }

  /**
   * Requests the previous available step; backward transitions run guards but do not require current-step validity.
   * @param source - Request origin; defaults to programmatic.
   */
  public previous(source: StepperSource = 'programmatic'): Promise<IStepperTransition> {
    return this.request(this.neighbor(-1)?.id, 'previous', source);
  }

  /**
   * Skips an optional current wizard step without marking it complete. Skipping the final step finishes the workflow.
   * @param source - Request origin; defaults to programmatic.
   */
  public skip(source: StepperSource = 'programmatic'): Promise<IStepperTransition> {
    return this.request(this.neighbor(1)?.id ?? this.selectedStep()?.id, 'skip', source);
  }

  /**
   * Validates and finishes the current final wizard step; completion is independent from selection.
   * @param source - Request origin; defaults to programmatic.
   */
  public finish(source: StepperSource = 'programmatic'): Promise<IStepperTransition> {
    return this.request(this.selectedStep()?.id, 'finish', source);
  }

  /**
   * Aborts pending work and clears completion, skip, validation-attempt and lazy visitation state. Application form values and validity are preserved.
   * @param id - Restart ID; defaults to the first enabled step. This explicit reset bypasses transition guards.
   */
  public reset(id?: string): void {
    if (this.isReadonly()) return;

    this.stepperWorkflowService.reset();
    this.transitionState.set(null);
    this.confirmationState.set(null);
    this.feedback.set(null);

    const start = this.definitions().find((step) => step.id === id && !step.disabled) ?? this.definitions().find((step) => !step.disabled);

    this.visited.set(new Set(start ? [start.id] : []));
    this.activeStep.set(start?.id ?? null);

    if (this.mode() === 'wizard' && this.focusOnChange()) this.focusTarget.set(start?.id ?? null);
  }

  protected renderContent(id: string): boolean {
    return this.contentPolicy() === 'eager' || this.selectedStep()?.id === id || (this.contentPolicy() === 'retained' && this.visited().has(id));
  }

  protected unavailable(step: IStepDefinition): boolean {
    return (
      !!step.disabled ||
      (this.mode() === 'wizard' && this.stepperWorkflowService.isComplete(step) && step.editable === false && step.id !== this.selectedStep()?.id)
    );
  }

  protected tabIndex(id: string): number {
    const focused = this.rows().find((row) => row.step.id === this.focusedId() && !this.unavailable(row.step));
    const fallback =
      this.rows().find((row) => row.step.id === this.selectedStep()?.id && !this.unavailable(row.step)) ??
      this.rows().find((row) => !this.unavailable(row.step));

    return (focused ?? fallback)?.step.id === id ? 0 : -1;
  }

  protected activate(event: MouseEvent, id: string): void {
    void this.goTo(id, event.detail === 0 ? 'keyboard' : 'pointer');
  }

  protected onKey(event: KeyboardEvent, id: string): void {
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    const button = event.currentTarget as HTMLButtonElement;
    const vertical = button.ownerDocument.defaultView?.getComputedStyle(button.parentElement?.parentElement ?? button).flexDirection === 'column';
    const arrows = vertical ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];

    if (![...arrows, 'Home', 'End'].includes(event.key)) return;

    const enabled = this.rows().filter((row) => !this.unavailable(row.step));

    if (!enabled.length) return;

    event.preventDefault();

    const rtl = !vertical && button.ownerDocument.defaultView?.getComputedStyle(button).direction === 'rtl';
    const direction = (event.key === arrows[1] ? 1 : -1) * (rtl ? -1 : 1);
    const current = enabled.findIndex((row) => row.step.id === id);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.length - 1 : (current + direction + enabled.length) % enabled.length;
    const next = enabled[index];

    this.focusedId.set(next.step.id);
    this.triggers()
      .find((trigger) => trigger.nativeElement.id === next.triggerId)
      ?.nativeElement.focus();
  }

  //#region Helpers

  private layoutScale(track: HTMLElement): number {
    const view = track.ownerDocument.defaultView;

    if (!view) return 1;

    const rendered = track.getBoundingClientRect().width;
    const layout = Number.parseFloat(view.getComputedStyle(track).width);

    return rendered > 0 && layout > 0 ? rendered / layout : 1;
  }

  private positionSelection(list: HTMLElement, markers: readonly HTMLElement[]): void {
    const surface = this.selection()?.nativeElement;
    const index = this.rows().findIndex((row) => row.step.id === this.selectedStep()?.id);
    const marker = markers[index];
    const track = surface?.parentElement;
    const target = this.variant() === 'progress' ? marker?.parentElement : marker;
    const view = list.ownerDocument.defaultView;

    if (!surface || !target || !track || !view || !target.offsetWidth || !target.offsetHeight) {
      if (surface) surface.style.visibility = 'hidden';

      this.selectionMotion?.destroy();
      this.selectionMotion = undefined;
      this.selectionLayout = null;
      this.selectionTarget = null;

      return;
    }

    const scale = this.layoutScale(track);
    const bounds = target.getBoundingClientRect();
    const origin = track.getBoundingClientRect();
    const style = view.getComputedStyle(track);
    const layout = `${this.variant()}:${view.getComputedStyle(list).flexDirection}`;
    const size = `${style.width}:${style.height}`;
    const selection = this.selectedStep()?.id ?? null;
    const padding = this.variant() === 'progress' ? 0 : 3;
    const geometry = [
      (bounds.left - origin.left) / scale - padding,
      (bounds.top - origin.top) / scale - padding,
      bounds.width / scale + padding * 2,
      bounds.height / scale + padding * 2
    ];

    this.selectionMotion ??= createSpringMotion(
      geometry,
      ([x, y, width, height], [velocityX, velocityY]) => {
        const stretch = this.bxA11yService.isReducedMotion() ? 0 : Math.min(0.06, Math.hypot(velocityX, velocityY) / 16000);
        const horizontal = Math.abs(velocityX) >= Math.abs(velocityY);

        paintMotionStyles(
          surface,
          {
            transform: `translate3d(${x}px, ${y}px, 0) scale(${1 + (horizontal ? stretch : -stretch / 3)}, ${1 + (horizontal ? -stretch / 3 : stretch)})`,
            width: `${Math.max(1, width)}px`,
            height: `${Math.max(1, height)}px`
          },
          true
        );
      },
      MOTION_PRESETS.fluid
    );
    // A changed step animates; a resize or presentation change snaps so the accent never trails its marker.
    this.selectionMotion.retarget(
      geometry,
      this.bxA11yService.isReducedMotion() || this.selectionLayout !== layout || (this.selectionTarget === selection && this.selectionSize !== size)
    );
    this.selectionLayout = layout;
    this.selectionSize = size;
    this.selectionTarget = selection;
    surface.style.visibility = 'visible';
  }

  private positionConnectors(list: HTMLElement, markers: readonly HTMLElement[], connectors: readonly HTMLElement[]): void {
    const view = list.ownerDocument.defaultView;

    if (!view || !list.isConnected) return;

    const style = view.getComputedStyle(list);
    const scale = this.layoutScale(list.parentElement ?? list);
    const normalize = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();

      return {
        bottom: rect.bottom / scale,
        height: rect.height / scale,
        left: rect.left / scale,
        right: rect.right / scale,
        top: rect.top / scale,
        width: rect.width / scale
      };
    };

    const vertical = style.flexDirection === 'column';
    const rtl = style.direction === 'rtl';
    const bounds = markers.map((marker) => normalize(marker));
    const owners = connectors.map((connector) => (connector.parentElement ? normalize(connector.parentElement) : undefined));
    const placements = owners.map((owner, index) => {
      const from = bounds[index];
      const to = bounds[index + 1];

      if (!owner || !from || !to) return null;

      const center = rtl ? owner.right - from.right + from.width / 2 : from.left - owner.left + from.width / 2;

      if (vertical) {
        return [
          `calc(${center}px - var(--step-connector) / 2)`,
          `calc(${from.bottom - owner.top}px + var(--step-endpoint-gap))`,
          'var(--step-connector)',
          `max(0px, calc(${to.top - from.bottom}px - 2 * var(--step-endpoint-gap)))`
        ];
      }

      const distance = rtl ? from.left - to.right : to.left - from.right;

      return [
        `calc(${center + from.width / 2}px + var(--step-endpoint-gap))`,
        `calc(${from.top - owner.top + from.height / 2}px - var(--step-connector) / 2)`,
        `max(0px, calc(${distance}px - 2 * var(--step-endpoint-gap)))`,
        'var(--step-connector)'
      ];
    });

    connectors.forEach((connector, index) => {
      const placement = placements[index];

      if (!placement) return;

      connector.style.insetInlineStart = placement[0];
      connector.style.insetBlockStart = placement[1];
      connector.style.inlineSize = placement[2];
      connector.style.blockSize = placement[3];
      connector.style.visibility = 'visible';
    });
  }

  private status(step: IStepDefinition): StepperStatus {
    if (step.disabled) return 'disabled';

    if (isStepPending(step) || (this.pending() && this.selectedStep()?.id === step.id)) return 'loading';

    if (step.error || (this.stepperWorkflowService.attempted().has(step.id) && !isStepValid(step))) return 'error';

    if (this.stepperWorkflowService.isSkipped(step)) return 'skipped';

    if (this.stepperWorkflowService.isComplete(step)) return 'completed';

    return this.selectedStep()?.id === step.id ? 'active' : 'pending';
  }

  private neighbor(direction: -1 | 1): IStepDefinition | undefined {
    const steps = this.definitions();
    const index = steps.findIndex((step) => step.id === this.selectedStep()?.id);
    const candidates = direction === 1 ? steps.slice(index + 1) : steps.slice(0, Math.max(0, index)).reverse();

    return candidates.find((step) => !this.unavailable(step));
  }

  private panelElement(id: string): HTMLElement | undefined {
    return this.panels().find((panel) => panel.nativeElement.dataset['stepId'] === id)?.nativeElement;
  }

  private async request(id: string | undefined, action: StepperAction, source: StepperSource): Promise<IStepperTransition> {
    const fromId = this.selectedStep()?.id ?? null;
    const step = this.definitions().find((item) => item.id === id);
    const intent: IStepperRequest | null = step ? { id: step.id, index: this.definitions().indexOf(step), source, action } : null;
    const base = { request: intent, fromId, toId: action === 'finish' ? null : (id ?? null) };

    if (this.isReadonly()) return this.settle({ ...base, outcome: 'rejected', reason: 'readonly' });

    if (this.pending()) return { ...base, outcome: 'busy' };

    if (!step || !intent || this.unavailable(step)) return this.settle({ ...base, outcome: 'rejected', reason: 'unavailable' });

    if (action === 'finish' && (this.mode() !== 'wizard' || this.hasNext())) return this.settle({ ...base, outcome: 'rejected', reason: 'mode' });

    if (action === 'skip' && this.mode() !== 'wizard') return this.settle({ ...base, outcome: 'rejected', reason: 'mode' });

    this.confirmationState.set(null);
    this.stepRequested.emit(intent);

    if (this.mode() !== 'wizard') return this.settle({ ...base, outcome: 'accepted' });

    this.feedback.set(null);

    const result = await this.stepperWorkflowService.transition(intent, () => ({
      steps: this.definitions(),
      activeId: this.selectedStep()?.id ?? null,
      linear: this.linear(),
      guard: this.beforeTransition()
    }));

    if (this.destroyRef.destroyed) return result;

    if (result.outcome === 'cancelled') {
      this.transitionFinished.emit(result);

      return result;
    }

    if (result.outcome === 'accepted') {
      if (this.isComplete()) {
        this.completed.emit({
          completedIds: this.definitions()
            .filter((item) => this.stepperWorkflowService.isComplete(item))
            .map((item) => item.id),
          skippedIds: this.definitions()
            .filter((item) => this.stepperWorkflowService.isSkipped(item))
            .map((item) => item.id)
        });

        if (this.focusOnChange() && this.completionContent()) this.focusTarget.set(true);
      } else if (this.selectionMode() === 'internal') {
        this.activeStep.set(step.id);
      }
    }

    return this.settle(result);
  }

  private settle(result: IStepperTransition): IStepperTransition {
    this.transitionState.set(result);
    this.confirmationState.set(
      this.mode() === 'wizard' && this.selectionMode() === 'controlled' && result.outcome === 'accepted' && result.toId !== result.fromId ? result : null
    );
    this.feedback.set(result.outcome === 'invalid' || result.outcome === 'error' ? result.outcome : result.outcome === 'rejected' ? 'rejected' : null);
    this.transitionFinished.emit(result);

    return result;
  }

  //#endregion
}
