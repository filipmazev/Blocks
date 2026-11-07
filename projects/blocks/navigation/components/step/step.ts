import type { InputSignal, InputSignalWithTransform, Signal, TemplateRef } from '@angular/core';

import { booleanAttribute, ChangeDetectionStrategy, Component, computed, contentChild, input, viewChild } from '@angular/core';

import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { IStepDefinition } from '@navigation/interfaces/istep-definition.interface';
import type { IStepValidation } from '@navigation/interfaces/istep-validation.interface';
import type { StepperGuard } from '@navigation/types/stepper.types';

import { StepContentDirective } from '@navigation/directives/step-content/step-content.directive';
import { StepLabelDirective } from '@navigation/directives/step-label/step-label.directive';

/** Declarative metadata and content registration for a bx-stepper. */
@Component({
  selector: 'bx-step',
  templateUrl: './step.html',
  styleUrl: './step.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step {
  private readonly directContent: Signal<TemplateRef<unknown> | undefined> = viewChild<TemplateRef<unknown>>('content');

  private readonly lazyContent: Signal<StepContentDirective | undefined> = contentChild(StepContentDirective);
  private readonly customLabel: Signal<StepLabelDirective | undefined> = contentChild(StepLabelDirective);

  /** Current metadata snapshot consumed by the owning Stepper; content templates follow its lifecycle policy. */
  public readonly definition: Signal<IStepDefinition> = computed(() => ({
    id: this.id(),
    label: this.label(),
    description: this.description(),
    icon: this.icon(),
    disabled: this.disabled(),
    optional: this.optional(),
    editable: this.editable(),
    completed: this.completed(),
    skipped: this.skipped(),
    valid: this.valid(),
    validation: this.validation(),
    error: this.error(),
    loading: this.loading(),
    statusText: this.statusText(),
    canExit: this.canExit(),
    canEnter: this.canEnter(),
    content: this.lazyContent()?.templateRef ?? this.directContent(),
    labelTemplate: this.customLabel()?.templateRef
  }));

  /** Required stable nonempty identity; unique within the owning stepper. */
  public readonly id: InputSignal<string> = input.required<string>();
  /** Required visible and accessible label; supports BX_I18N translation keys. */
  public readonly label: InputSignal<ResolvableText> = input.required<ResolvableText>();
  /** Optional translated supporting text. */
  public readonly description: InputSignal<ResolvableText | undefined> = input<ResolvableText>();
  /** Optional Blocks icon; omission displays the step number. */
  public readonly icon: InputSignal<IconName | undefined> = input<IconName>();
  /** Excludes this step from navigation and required completion. Defaults to false. */
  public readonly disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Allows the skip action. Defaults to false. */
  public readonly optional: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Allows revisiting after completion. Defaults to true. */
  public readonly editable: InputSignalWithTransform<boolean, unknown> = input(true, { transform: booleanAttribute });
  /** Explicit completion override; omission uses accepted wizard progress. */
  public readonly completed: InputSignal<boolean | undefined> = input<boolean>();
  /** Explicit skip override; omission uses accepted skip state. */
  public readonly skipped: InputSignal<boolean | undefined> = input<boolean>();
  /** Explicit validity overriding the supplied form. Omission derives form validity or true. */
  public readonly valid: InputSignal<boolean | undefined> = input<boolean>();
  /** Optional Reactive Forms control, NgForm, or Signal Forms field state (field()). */
  public readonly validation: InputSignal<IStepValidation | undefined> = input<IStepValidation>();
  /** Application-owned error; blocks forward navigation until cleared. Defaults to false. */
  public readonly error: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Application-owned loading state; blocks forward navigation until cleared. Defaults to false. */
  public readonly loading: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
  /** Optional translated status description. */
  public readonly statusText: InputSignal<ResolvableText | undefined> = input<ResolvableText>();
  /** Optional synchronous, promise, or observable guard before leaving this step. */
  public readonly canExit: InputSignal<StepperGuard | undefined> = input<StepperGuard>();
  /** Optional synchronous, promise, or observable guard before entering this step. */
  public readonly canEnter: InputSignal<StepperGuard | undefined> = input<StepperGuard>();
}
