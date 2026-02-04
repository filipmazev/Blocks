/*
 * Public API Surface of modal
 */

export * from './lib/components/modal-core';
export * from './lib/components/views/bottom-sheet/modal-bottom-sheet';
export * from './lib/components/views/side/modal-side';
export * from './lib/components/views/centered/modal-centered';
export * from './lib/components/shared/ui/backdrop/modal-backdrop';
export * from './lib/components/shared/ui/banner/modal-banner';

export * from './lib/services/modal.service';

export * from './lib/classes/modal';
export * from './lib/classes/modal-config';
export * from './lib/classes/modal-ref';
export * from './lib/classes/modal-style.config';

export * from './lib/interfaces/imodal-close-result.interface';
export * from './lib/interfaces/imodal-component.interface';
export * from './lib/interfaces/imodal-config.interface';
export * from './lib/interfaces/imodal-ref.interface';
export * from './lib/interfaces/imodal-service.interface';
export * from './lib/interfaces/imodal-style-config.interface';
export * from './lib/interfaces/imodal-view.interface';
export * from './lib/interfaces/ibottom-sheet-modal-config';

export * from './lib/constants/modal-animation.constants';
export * from './lib/constants/modal-bottom-sheet.constants';

export * from './lib/enums/modal-warnings.enum';
export * from './lib/enums/modal-state.enum';

export * from './lib/directives/modal-header.directive';
export * from './lib/directives/modal-footer.directive';

export * from './lib/tokens/modal-data.token';

export * from './lib/types/modal.types';

export * from './lib/classes/modal-close-guard';
export * from './lib/classes/guards/modal-confirm-close-guard';