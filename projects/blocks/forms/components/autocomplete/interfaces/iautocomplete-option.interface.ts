import { ResolvableText } from '@filip.mazev/blocks/core';

/** A suggestion inserts its value as editable text; labels may be translated independently. */
export interface IAutocompleteOption {
  /** Text inserted into the control when selected. Must be unique within the loaded results. */
  value: string;
  /** Optional visible suggestion text. Defaults to value. */
  label?: ResolvableText;
  /** Optional unavailable suggestion. Defaults to false. */
  disabled?: boolean;
}
