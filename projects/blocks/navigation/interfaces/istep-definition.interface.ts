import type { TemplateRef } from '@angular/core';

import type { ResolvableText } from '@filip.mazev/blocks/core';
import type { IconName } from '@filip.mazev/blocks/icons';
import type { StepperGuard } from '@navigation/types/stepper.types';

import type { IStepValidation } from './istep-validation.interface';
import type { IStepperLabelContext } from './istepper-label-context.interface';

/** Immutable application-owned step metadata. IDs must be nonempty and unique within a stepper. */
export interface IStepDefinition {
  /** Stable identity preserved across reordering; required. */
  readonly id: string;
  /** Visible and accessible name; plain text or a shared translation key. Required. */
  readonly label: ResolvableText;
  /** Optional supporting text, resolved reactively through BX_I18N. */
  readonly description?: ResolvableText;
  /** Optional Blocks icon; otherwise the step number is displayed. */
  readonly icon?: IconName;
  /** Excludes the step from user navigation and required workflow completion. Defaults to false. */
  readonly disabled?: boolean;
  /** Allows skipping without claiming completion. Defaults to false. */
  readonly optional?: boolean;
  /** Allows revisiting a completed step. Defaults to true. */
  readonly editable?: boolean;
  /** Explicit completion override; omission derives completion from successful wizard advancement. Visiting never completes a step. */
  readonly completed?: boolean;
  /** Explicit skipped state; omission uses wizard skip state. Defaults to false. */
  readonly skipped?: boolean;
  /** Explicit validity, overriding validation.valid. Omission uses validation or true when no form is supplied. */
  readonly valid?: boolean;
  /** Shared structural form state; accepts AbstractControl, NgForm, or a Signal Forms field state (field()). Optional. */
  readonly validation?: IStepValidation;
  /** Server/application error state. Blocks forward progress until cleared; initially false. */
  readonly error?: boolean;
  /** Application-owned busy state. Blocks forward progress until cleared; initially false. */
  readonly loading?: boolean;
  /** Optional translated status text, displayed and included in the accessible description. */
  readonly statusText?: ResolvableText;
  /** Optional guard run when leaving this step, including backward and finish actions. */
  readonly canExit?: StepperGuard;
  /** Optional guard run before entering this step. */
  readonly canEnter?: StepperGuard;
  /** Optional content template for data-driven wizards; ignored outside wizard mode. */
  readonly content?: TemplateRef<unknown>;
  /** Optional visual label template. Keep label text meaningful for accessible naming. */
  readonly labelTemplate?: TemplateRef<IStepperLabelContext>;
}
