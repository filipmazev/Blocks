import { ResolvableText } from '@filip.mazev/blocks/core';

/** Resolved completionOption state used by Autocomplete. */
export interface IAutocompleteCompletionOptionState {
  /** Resolved label Text value. */
  labelText: string;
  /** Resolved value value. */
  value: string;
  /** Resolved label value. */
  label?: ResolvableText;
  /** Whether disabled is enabled in the resolved state. */
  disabled?: boolean;
}
