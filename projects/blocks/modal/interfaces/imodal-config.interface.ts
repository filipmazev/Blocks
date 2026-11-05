import { Observable } from 'rxjs';

import { ModalCloseGuard } from '@modal/classes/modal-close-guard';

import { IModalCloseResult } from './imodal-close-result.interface';
import { IModalHeaderConfig } from './imodal-header-config.interface';
import { IModalStyleConfig } from './imodal-style-config.interface';

/**
 * IModalConfig<D>, the configuration for the modal
 * @typeParam D The type of data passed to the modal
 * @typeParam R The type of result returned from the modal
 */
export interface IModalConfig<D, R> {
  /** (optional) Whether the modal should be open or not, will default to true */
  open?: boolean;

  /** (optional) The function to run after the modal closes */
  afterClose?: () => Observable<IModalCloseResult<R | undefined>>;

  /** (optional) The guard that will determine whether the modal can be closed or not */
  closeGuard?: ModalCloseGuard;
  /** (optional) Whether the close guard should only be checked on cancel actions, will default to true */
  closeGuardOnlyOnCancel?: boolean;

  /** (optional) Whether the modal should be closable or not, will default to false (this applies to the close button and backdrop) */
  disableClose?: boolean;
  /** (optional) Whether the modal shouldn't be closable when the user clicks on the backdrop, will default to false */
  disableCloseOnBackdropClick?: boolean;
  /** (optional) Whether the modal should be closable or not when the user navigates away from the page, will default to false */
  disableCloseOnNavigation?: boolean;

  /** (optional) The data to pass to the component of the modal. The component needs to use the */
  data?: D | null;

  /** (optional) The style configuration for the modal, will default to an empty object */
  style?: IModalStyleConfig;
  /** (optional) Header to be shown */
  header?: IModalHeaderConfig;

  /** (optional) The classes to apply to the content of the modal */
  contentClasses?: string;
  /** (optional) The styles to apply to the content of the modal */
  contentStyles?: string;

  /** (optional) The id of the modal (set at the top level of the modal), will default to a random string */
  id?: string;
}
