import type { Signal, WritableSignal } from '@angular/core';

import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import type { IStepDefinition } from '@navigation/interfaces/istep-definition.interface';
import type { StepperContentPolicy, StepperGuard } from '@navigation/types/stepper.types';

import { Step } from '@navigation/components/step/step';
import { Stepper } from '@navigation/components/stepper/stepper';
import { StepContentDirective } from '@navigation/directives/step-content/step-content.directive';

@Component({
  selector: 'app-stepper-test-host',
  imports: [Stepper, Step, StepContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bx-stepper mode="wizard" [contentPolicy]="policy()" [linear]="false" [steps]="configured()" [beforeTransition]="guard()">
      <bx-step id="first" label="First" [validation]="validation">
        <ng-template bxStepContent><input aria-label="First draft" /></ng-template>
      </bx-step>
      @if (showSecond()) {
        <bx-step id="second" label="Second">
          <ng-template bxStepContent><input aria-label="Second draft" /></ng-template>
        </bx-step>
      }
    </bx-stepper>
  `
})
export class StepperTestHost {
  /** Form validity used to exercise retries after an invalid forward attempt. */
  public readonly validation: FormControl<string> = new FormControl('Ready', { nonNullable: true, validators: Validators.required });

  /** Application guard whose asynchronous save can succeed or fail. */
  public readonly guard: WritableSignal<StepperGuard | undefined> = signal<StepperGuard | undefined>(undefined);
  /** Optional configured data used to verify rejection of mixed ownership. */
  public readonly configured: WritableSignal<readonly IStepDefinition[] | undefined> = signal(undefined);

  /** Content creation policy under test. */
  public readonly policy: WritableSignal<StepperContentPolicy> = signal<StepperContentPolicy>('retained');

  /** Controls dynamic removal of a projected step. */
  public readonly showSecond: WritableSignal<boolean> = signal(true);

  /** Live owning stepper instance used by behavioral tests. */
  public readonly stepper: Signal<Stepper> = viewChild.required(Stepper);
}
