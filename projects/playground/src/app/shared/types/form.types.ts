import { ToastConfigRequest } from '@playground/classes/requests/ToastConfigRequest';
import { ModalConfigRequest } from '../classes/requests/ModalConfigRequest';
import { FormControl } from '@angular/forms';

export type ModalConfigFormControls = {
  [K in keyof ModalConfigRequest]-?: FormControl<ModalConfigRequest[K] | null>;
};

export type ToastrConfigFormControls = {
  [K in keyof ToastConfigRequest]-?: FormControl<ToastConfigRequest[K] | null>;
};
