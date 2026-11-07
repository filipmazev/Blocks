import type { Signal } from '@angular/core';

import { inject, Injectable } from '@angular/core';

import { IToast } from '@toastr/interfaces/itoast.interface';

import { ToastRef } from './toast-ref';

@Injectable()
export abstract class Toast<D = unknown, R = unknown> implements IToast<D, R> {
  private readonly toastRef = inject<ToastRef<D, R>>(ToastRef);

  /** Injected reference shared with the caller and presentation host; available during construction. */
  public readonly toast: ToastRef<D, R> = this.toastRef;
  /** Reactive content data; read with data(). Undefined when the opening configuration supplies no data. */
  public readonly data: Signal<D | undefined> = this.toast.data;

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
