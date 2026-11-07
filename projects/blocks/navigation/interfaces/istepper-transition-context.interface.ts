import type { IStepDefinition } from './istep-definition.interface';
import type { IStepperRequest } from './istepper-request.interface';

/** Guard context containing metadata snapshots and cooperative cancellation. */
export interface IStepperTransitionContext {
  /** Requested operation and its source. */
  readonly request: IStepperRequest;
  /** Step being left, or null for an empty workflow. */
  readonly from: IStepDefinition | null;
  /** Destination metadata; null represents finishing the workflow. */
  readonly to: IStepDefinition | null;
  /** Aborted on reset, destruction, external selection, or definition/policy changes. Pass to application requests where supported. */
  readonly signal: AbortSignal;
}
