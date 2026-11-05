import { inject, Injectable } from '@angular/core';

import { IToast } from '@toastr/interfaces/itoast.interface';
import { TOAST_DATA } from '@toastr/tokens/toast-data.token';

import { ToastRef } from './toast-ref';

@Injectable()
export abstract class Toast<D = unknown, R = unknown> implements IToast<D, R> {
  private readonly injectedData = inject<D>(TOAST_DATA);

  /**
   * Data injected into the toast component.
   */
  public data: D = this.injectedData;
  /**
   * Reference to the ToastRef instance associated with this toast.
   */
  public toast!: ToastRef<D, R>;

  /** Called when the toast is initialized. */
  public onToastInit(): void {}

  /**
   * Closes the toast with an optional result.
   *
   * @param result - The result to be passed when closing the toast.
   */
  public close(result?: R): void {
    this.toast?.close(result);
  }
}
