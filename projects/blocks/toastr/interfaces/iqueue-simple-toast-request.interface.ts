import { ResolvableText } from '@filip.mazev/blocks/core';
import { ToastPosition } from '../types/toastr.types';

export interface IQueueSimpleToastRequest {
  title?: ResolvableText;
  message: ResolvableText;
  animate?: boolean;
  position?: ToastPosition;
  durationInMs?: number;
  showCloseButton?: boolean;
  showProgessBar?: boolean;
}
