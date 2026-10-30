import { Signal } from '@angular/core';

/** Coordination contract shared by a radio group and its option components. */
export interface IRadioGroup {
  value: Signal<unknown>;
  disabled: Signal<boolean>;
  readonly: Signal<boolean>;
  isReadonly: Signal<boolean>;
  required: Signal<boolean>;
  describedBy: Signal<string>;
  groupName: Signal<string>;
  select: (value: unknown) => void;
  markTouched: () => void;
}
