import type { ResolvableText } from '@filip.mazev/blocks/core';

/** Translatable component-owned text. Partial instance values merge with provided defaults and library defaults. */
export interface IStepperLabels {
  /** Accessible group name; defaults to 'Progress'. */
  readonly label: ResolvableText;
  /** Back action; defaults to 'Back'. */
  readonly back: ResolvableText;
  /** Next action; defaults to 'Next'. */
  readonly next: ResolvableText;
  /** Final action; defaults to 'Finish'. */
  readonly finish: ResolvableText;
  /** Optional-step action; defaults to 'Skip'. */
  readonly skip: ResolvableText;
  /** Pending status; defaults to 'Pending'. */
  readonly pending: ResolvableText;
  /** Accepted controlled destination awaiting application selection; optional, defaults to 'Awaiting confirmation'. */
  readonly awaitingConfirmation?: ResolvableText;
  /** Active status; defaults to 'Current step'. */
  readonly active: ResolvableText;
  /** Completion status and announcement; defaults to 'Completed'. */
  readonly completed: ResolvableText;
  /** Skipped status; defaults to 'Skipped'. */
  readonly skipped: ResolvableText;
  /** Error status; defaults to 'Error'. */
  readonly error: ResolvableText;
  /** Busy status; defaults to 'Loading'. */
  readonly loading: ResolvableText;
  /** Unavailable status; defaults to 'Disabled'. */
  readonly disabled: ResolvableText;
  /** Optional-step annotation; defaults to 'Optional'. */
  readonly optional: ResolvableText;
  /** Invalid-forward announcement; defaults to 'Check this step before continuing'. */
  readonly invalid: ResolvableText;
  /** Guard refusal announcement; defaults to 'Navigation was not accepted'. */
  readonly rejected: ResolvableText;
  /** Position summary. Translation adapters receive index, count, label and percent. Plain strings replace {index}, {count}, {label}, {percent}. */
  readonly position: ResolvableText;
}
