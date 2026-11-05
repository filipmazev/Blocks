import { IAutocompleteOption } from './iautocomplete-option.interface';

/** Template data for a loaded suggestion. Keep the template content noninteractive. */
export interface IAutocompleteOptionContext {
  /** Value exposed as the implicit variable in a consumer template. */
  $implicit: IAutocompleteOption;
  /** Visible or resolved label presented to the user. */
  label: string;
  /** Whether this item is currently active for keyboard navigation. */
  active: boolean;
  /** Zero-based position of this item within the rendered collection. */
  index: number;
}
