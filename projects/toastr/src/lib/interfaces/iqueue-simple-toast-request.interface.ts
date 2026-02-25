import { ToastPosition } from '../types/toastr.types';

export interface IQueueSimpleToastRequest {
  message: string;
  title?: string;
  position?: ToastPosition;
  durationInMs?: number;
}
