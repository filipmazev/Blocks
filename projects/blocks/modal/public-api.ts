/*
 * Public API Surface of modal
 */

export * from '@modal/components/modal-core/modal-core';
export * from '@modal/components/shared/ui/backdrop/modal-backdrop';
export * from '@modal/components/shared/ui/banner/modal-banner';
export * from '@modal/components/views/bottom-sheet/modal-bottom-sheet';
export * from '@modal/components/views/centered/modal-centered';
export * from '@modal/components/views/side/modal-side';

export * from '@modal/services/modal-global-settings.service';
export * from '@modal/services/modal.service';

export * from '@modal/classes/modal';
export * from '@modal/classes/modal-config';
export * from '@modal/classes/modal-ref';
export * from '@modal/classes/modal-style.config';

export * from '@modal/interfaces/ibottom-sheet-modal-config.interface';
export * from '@modal/interfaces/imodal-close-result.interface';
export * from '@modal/interfaces/imodal-component.interface';
export * from '@modal/interfaces/imodal-config.interface';
export * from '@modal/interfaces/imodal-ref.interface';
export * from '@modal/interfaces/imodal-service.interface';
export * from '@modal/interfaces/imodal-style-config.interface';
export * from '@modal/interfaces/imodal-view.interface';

export * from '@modal/constants/modal-animation.constants';
export * from '@modal/constants/modal-bottom-sheet.constants';

export * from '@modal/enums/modal-state.enum';
export * from '@modal/enums/modal-warnings.enum';

export * from '@modal/directives/footer/modal-footer.directive';
export * from '@modal/directives/header/modal-header.directive';

export * from '@modal/tokens/modal-data.token';

export * from '@modal/types/modal.types';

export * from '@modal/classes/guards/modal-confirm-close-guard';
export * from '@modal/classes/modal-close-guard';
