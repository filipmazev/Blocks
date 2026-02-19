import { ToastPosition } from '../types/toastr.types';

export interface IToastConfig<D = unknown> {
  data?: D;
  position?: ToastPosition;
  wrapperClass?: string;
  durationInMs?: number;
  swipeToDismiss?: boolean;
  animate?: boolean;
  maxOpened?: number;
}
