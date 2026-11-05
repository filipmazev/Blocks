import { FormControl } from '@angular/forms';

import { ModalConfigRequest } from '@playground/classes/requests/ModalConfigRequest';
import { ToastConfigRequest } from '@playground/classes/requests/ToastConfigRequest';

export type ModalConfigFormControls = {
  [K in keyof ModalConfigRequest]-?: FormControl<ModalConfigRequest[K] | null>;
};

export type ToastrConfigFormControls = {
  [K in keyof ToastConfigRequest]-?: FormControl<ToastConfigRequest[K] | null>;
};
