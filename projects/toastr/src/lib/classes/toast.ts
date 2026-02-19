import { inject, Injectable } from '@angular/core';
import { ToastRef } from './toast-ref';
import { TOAST_DATA } from '../tokens/toast-data.token';
import { IToast } from '../interfaces/itoast.interface';

@Injectable()
export abstract class Toast<D = unknown, R = unknown> implements IToast<D, R> {
  /**
   * Data injected into the toast component.
   */
  public data = inject<D>(TOAST_DATA);

  /**
   * Reference to the ToastRef instance associated with this toast.
   */
  public toast!: ToastRef<R>;

  /**
   * Called when the toast is initialized.
   */
  public onToastInit(): void {}

  /**
   * Closes the toast with an optional result.
   * @param result The result to be passed when closing the toast.
   */
  public close(result?: R): void {
    this.toast?.close(result);
  }
}
