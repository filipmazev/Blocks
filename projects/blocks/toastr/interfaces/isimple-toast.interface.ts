import { ResolvableText } from '@filip.mazev/blocks/core';
import { SimpleToastType } from '../types/toastr.types';

export interface ISimpleToastData {
  title?: ResolvableText;
  message: ResolvableText;
  type: SimpleToastType;
}
