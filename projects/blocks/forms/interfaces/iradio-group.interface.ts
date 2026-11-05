import { Signal } from '@angular/core';

/** Coordination contract shared by a radio group and its option components. */
export interface IRadioGroup {
  /** Current value represented by this control or pending edit. */
  value: Signal<unknown>;
  /** Reactive disabled state; disabled controls reject interaction. */
  disabled: Signal<boolean>;
  /** Reactive lowercase readonly form-state contract. */
  readonly: Signal<boolean>;
  /** Resolved readonly state, including the consumer-facing readOnly alias. */
  isReadonly: Signal<boolean>;
  /** Reactive required state used by controls and accessible labels. */
  required: Signal<boolean>;
  /** IDs of elements describing this control, separated by spaces. */
  describedBy: Signal<string>;
  /** Native name shared by controls belonging to this group. */
  groupName: Signal<string>;
  /** Selects the supplied value using the group interaction contract. */
  select: (value: unknown) => void;
  /** Marks the owning control or group as touched. */
  markTouched: () => void;
}
