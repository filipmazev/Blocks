import { ToastRef } from '../classes/toast-ref';

export interface IToast<D, R> {
  data: D;
  toast: ToastRef<R>;
  onToastInit?(): void;
}
