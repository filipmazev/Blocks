import { IBxSelectOption } from './ibx-select-option.interface';

/**
 * Describes the resolved select option contract.
 * @typeParam T Type represented by T.
 */
export interface IResolvedSelectOption<T> extends IBxSelectOption<T> {
  /** Resolved option label used for display and matching. */
  resolvedStr: string;
  /** Resolved group label used when arranging the option. */
  resolvedGroup: string;
}
