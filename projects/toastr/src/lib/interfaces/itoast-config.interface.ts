import { ToastPosition } from '../types/toastr.types';

export interface IToastConfig<D = unknown> {
  data?: D;
  position?: ToastPosition;
  wrapperClass?: string;
  hasDefaultBackground?: boolean;
  durationInMs?: number;
  swipeToDismiss?: boolean;
  animate?: boolean;
}
