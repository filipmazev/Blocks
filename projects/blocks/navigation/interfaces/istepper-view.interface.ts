import type { StepperStatus } from '@navigation/types/stepper.types';

import type { IStepDefinition } from './istep-definition.interface';

/** Internal resolved presentation row, shared by every visual variant. */
export interface IStepperView {
  /** Application metadata. */
  readonly step: IStepDefinition;
  /** Resolved visible name. */
  readonly label: string;
  /** Resolved description. */
  readonly description: string;
  /** Resolved status and optional annotation. */
  readonly detail: string;
  /** State used for visuals. */
  readonly status: StepperStatus;
  /** Whether an accepted controlled transition is waiting for the application to select this destination. */
  readonly awaitingConfirmation: boolean;
  /** Completion independent from active selection. */
  readonly complete: boolean;
  /** Stable control DOM identity. */
  readonly triggerId: string;
  /** Stable panel DOM identity. */
  readonly panelId: string;
}
