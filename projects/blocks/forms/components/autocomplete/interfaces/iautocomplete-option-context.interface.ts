import { IAutocompleteOption } from './iautocomplete-option.interface';

/** Template data for a loaded suggestion. Keep the template content noninteractive. */
export interface IAutocompleteOptionContext {
  $implicit: IAutocompleteOption;
  label: string;
  active: boolean;
  index: number;
}
