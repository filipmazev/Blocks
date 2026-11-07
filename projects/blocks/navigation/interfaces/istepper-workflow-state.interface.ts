import type { StepperGuard } from '@navigation/types/stepper.types';

import type { IStepDefinition } from './istep-definition.interface';

/** Internal immutable policy snapshot used by the wizard transition coordinator. */
export interface IStepperWorkflowState {
  /** Current step collection. */
  readonly steps: readonly IStepDefinition[];
  /** Effective active ID. */
  readonly activeId: string | null;
  /** Linear prerequisite enforcement. */
  readonly linear: boolean;
  /** Optional application-wide transition guard. */
  readonly guard: StepperGuard | undefined;
}
