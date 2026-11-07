import type { IStepperLabels } from './istepper-labels.interface';

/** Shared Stepper defaults, provided through BX_STEPPER_DEFAULTS. */
export interface IStepperConfig {
  /** Partial translated text defaults; instance labels override individual members. */
  readonly labels?: Partial<IStepperLabels>;
}
