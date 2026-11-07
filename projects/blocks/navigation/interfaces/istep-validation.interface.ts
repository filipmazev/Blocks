import type { Observable } from 'rxjs';

/** Structural validity contract accepted by reactive controls, NgForm, and Signal Forms field states. */
export interface IStepValidation {
  /** Current validity or reactive validity reader. Explicit step.valid takes precedence over this value. */
  readonly valid: boolean | (() => boolean);
  /** Pending asynchronous validation; blocks forward transitions even when explicit validity is true. Defaults to false. */
  readonly pending?: boolean | (() => boolean);
  /** Reactive Forms status notifications, used to refresh displayed completion after validation changes. Optional for signals. */
  readonly statusChanges?: Observable<unknown>;
  /** Marks a reactive form subtree touched on an invalid forward attempt. Optional. */
  markAllAsTouched?(): void;
  /** Marks a Signal Forms field touched on an invalid forward attempt. Optional fallback to markAllAsTouched. */
  markAsTouched?(): void;
}
