/*
 * Public API Surface of toastr
 */

export * from '@toastr/services/toastr-global-settings.service';
export * from '@toastr/services/toastr.service';

export * from '@toastr/components/toast-core/toast-core';
export * from '@toastr/components/views/simple-toast/simple-toast';

export * from '@toastr/interfaces/isimple-toast-data.interface';
export * from '@toastr/interfaces/itoast-config.interface';
export * from '@toastr/interfaces/itoast.interface';

export * from '@toastr/types/toastr.types';

export * from '@toastr/tokens/toast-data.token';

export * from '@toastr/classes/toast';
export * from '@toastr/classes/toast-ref';
export type { IToastrGlobalSettings } from '@toastr/interfaces/itoastr-global-settings.interface';

export * from '@toastr/interfaces/itoast-patch.interface';
export * from '@toastr/interfaces/iqueue-simple-toast-request.interface';
export * from '@toastr/types/toast-patch.types';
