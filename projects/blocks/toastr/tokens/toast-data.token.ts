import { InjectionToken } from '@angular/core';

/** Nonreactive data snapshot captured when content is mounted. Use ToastRef.data for live patch updates. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TOAST_DATA = new InjectionToken<any>('TOAST_DATA');
