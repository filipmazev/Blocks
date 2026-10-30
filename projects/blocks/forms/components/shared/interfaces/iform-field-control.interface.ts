import { Signal } from '@angular/core';
import { ResolvableText } from '@filip.mazev/blocks/core';

/** Registration contract for a custom control projected into a Blocks form field. */
export interface IFormFieldControl {
  /** ID of the actual focusable control. */
  controlId: Signal<string>;
  /** Visible field label. */
  label: Signal<ResolvableText | undefined>;
  /** Whether validation feedback should be shown. */
  showError: Signal<boolean>;
  /** Already resolved validation messages. */
  errorTexts: Signal<readonly string[]>;
  /** Required state used for label decoration. */
  required: Signal<boolean>;
  /** Disabled state of the control. */
  disabled: Signal<boolean>;
  /** Pending asynchronous validation. */
  pending: Signal<boolean>;
  /** Optional description registration for consumer controls with custom interactive elements. */
  setDescribedByIds?: (ids: readonly string[]) => void;
  /** Focus the internal interactive element. */
  focus: (options?: FocusOptions) => void;
}
