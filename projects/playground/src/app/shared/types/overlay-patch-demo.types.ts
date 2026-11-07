import type { FormControl } from '@angular/forms';

import type { IconName } from '@filip.mazev/blocks/icons';
import type { SimpleToastType } from '@filip.mazev/blocks/toastr';

export type ModalLiveFormControls = {
  text: FormControl<string>;
  icon: FormControl<IconName | null>;
  loading: FormControl<boolean>;
  disableClose: FormControl<boolean>;
  showCloseButton: FormControl<boolean>;
  emphasize: FormControl<boolean>;
};

export type ToastLiveFormControls = {
  type: FormControl<SimpleToastType>;
  icon: FormControl<IconName | null>;
  loading: FormControl<boolean>;
  durationInMs: FormControl<number>;
  showCloseButton: FormControl<boolean>;
  showProgressBar: FormControl<boolean>;
  hasDefaultBackground: FormControl<boolean>;
};
