import { SimpleToastType } from '../types/toastr.types';

export interface ISimpleToastData {
  title?: string;
  message: string;
  type: SimpleToastType;
}
