import { ValidationError } from '@angular/forms/signals';

/** Context available to a parameterized validation message. */
export interface IValidationMessageContext {
  /** Canonical error kind, including minLength/maxLength aliases. */
  kind: string;
  /** Original Angular error including any validator-specific properties. */
  error: ValidationError.WithOptionalFieldTree;
  /** Parameters from a Reactive Forms error payload or a Signal Forms error. */
  params: Record<string, unknown>;
}
