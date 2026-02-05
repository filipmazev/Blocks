import { ModalConfigRequest } from "../classes/requests/ModalConfigRequest";
import { FormControl } from '@angular/forms';

export type ModalConfigFormControls = {
    [K in keyof ModalConfigRequest]-?: FormControl<ModalConfigRequest[K] | null>;
};