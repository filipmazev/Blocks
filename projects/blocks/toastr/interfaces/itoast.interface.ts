import type { Signal } from '@angular/core';

import { ToastRef } from '@toastr/classes/toast-ref';

/**
 * Describes the toast contract.
 * @typeParam D Type represented by D.
 * @typeParam R Type represented by R.
 */
export interface IToast<D, R> {
  /** Reactive application data; read data() to observe patches. Undefined when opening data was omitted. */
  readonly data: Signal<D | undefined>;
  /** Reference controlling the lifetime of this toast content. */
  readonly toast: ToastRef<D, R>;
  /** Initialization callback invoked after the toast reference has been assigned. Optional. */
  onToastInit?(): void;
}
