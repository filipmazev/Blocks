import type { IStepperLabels } from '@navigation/interfaces/istepper-labels.interface';

export const STEPPER_LABELS: IStepperLabels = {
  label: 'Progress',
  back: 'Back',
  next: 'Next',
  finish: 'Finish',
  skip: 'Skip',
  pending: 'Pending',
  awaitingConfirmation: 'Awaiting confirmation',
  active: 'Current step',
  completed: 'Completed',
  skipped: 'Skipped',
  error: 'Error',
  loading: 'Loading',
  disabled: 'Disabled',
  optional: 'Optional',
  invalid: 'Check this step before continuing',
  rejected: 'Navigation was not accepted',
  position: 'Step {index} of {count}: {label}'
};
