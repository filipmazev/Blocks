import type { StepperStatus } from '@navigation/types/stepper.types';

import type { IStepDefinition } from './istep-definition.interface';

/** Context for a custom visual step label. The plain label continues to supply the accessible name. */
export interface IStepperLabelContext {
  /** Current step metadata exposed by let-step. */
  readonly $implicit: IStepDefinition;
  /** Zero-based step index. */
  readonly index: number;
  /** Resolved visual state. */
  readonly status: StepperStatus;
}
