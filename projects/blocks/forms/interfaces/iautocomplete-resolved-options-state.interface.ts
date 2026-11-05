import { ResolvableText } from '@filip.mazev/blocks/core';

/** Resolved resolvedOptions state used by Autocomplete. */
export interface IAutocompleteResolvedOptionsState {
  /** Resolved label Text value. */
  labelText: string;
  /** Resolved value value. */
  value: string;
  /** Resolved label value. */
  label?: ResolvableText;
  /** Whether disabled is enabled in the resolved state. */
  disabled?: boolean;
}
