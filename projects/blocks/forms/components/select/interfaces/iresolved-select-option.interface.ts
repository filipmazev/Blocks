import { IBxSelectOption } from './ibx-select-option.interface';

export interface IResolvedSelectOption<T> extends IBxSelectOption<T> {
  resolvedStr: string;
  resolvedGroup: string;
}
