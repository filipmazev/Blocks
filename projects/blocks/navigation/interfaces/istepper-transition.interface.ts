import type { StepperOutcome } from '@navigation/types/stepper.types';

import type { IStepperRequest } from './istepper-request.interface';

/** Result of one navigation attempt. Expected rejection and invalid input do not throw. */
export interface IStepperTransition {
  /** Original intent, or null when an imperative call has no eligible destination. */
  readonly request: IStepperRequest | null;
  /** Step active when the operation started. */
  readonly fromId: string | null;
  /** Requested destination, or null for completion. */
  readonly toId: string | null;
  /** Accepted means guards passed; controlled selection still requires application confirmation. */
  readonly outcome: StepperOutcome;
  /** Validation/guard failure reason, suitable for application feedback. */
  readonly reason?: 'unavailable' | 'readonly' | 'linear' | 'validation' | 'guard' | 'mode' | 'completed';
  /** Original thrown/rejected value, present only for error outcomes. */
  readonly error?: unknown;
}
