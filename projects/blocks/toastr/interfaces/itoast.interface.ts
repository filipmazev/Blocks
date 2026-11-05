import { ToastRef } from '@toastr/classes/toast-ref';

/**
 * Describes the toast contract.
 * @typeParam D Type represented by D.
 * @typeParam R Type represented by R.
 */
export interface IToast<D, R> {
  /** Data supplied to, or returned from, the owning component. */
  data: D;
  /** Reference controlling the lifetime of this toast content. */
  toast: ToastRef<D, R>;
  /** Initialization callback invoked after the toast reference has been assigned. Optional. */
  onToastInit?(): void;
}
