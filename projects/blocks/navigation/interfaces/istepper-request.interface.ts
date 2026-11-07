import type { StepperAction, StepperSource } from '@navigation/types/stepper.types';

/** Navigation intent, emitted independently from confirmed selection. */
export interface IStepperRequest {
  /** Stable requested destination ID; finish requests identify the current final step. */
  readonly id: string;
  /** Zero-based destination index at request time. */
  readonly index: number;
  /** Origin of the activation. */
  readonly source: StepperSource;
  /** Requested workflow operation. */
  readonly action: StepperAction;
}
