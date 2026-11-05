import { IBxSelectOption } from './ibx-select-option.interface';

/** Context for a consumer-supplied option rendering template. */
export interface ISelectOptionContext<T> {
  /** Option being rendered. */
  $implicit: IBxSelectOption<T>;
  /** Whether this option is selected. */
  selected: boolean;
  /** Position in the currently filtered options. */
  index: number;
}
