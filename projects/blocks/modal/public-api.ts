/*
 * Public API Surface of modal
 */

export * from './components/modal-core';
export * from './components/views/bottom-sheet/modal-bottom-sheet';
export * from './components/views/side/modal-side';
export * from './components/views/centered/modal-centered';
export * from './components/shared/ui/backdrop/modal-backdrop';
export * from './components/shared/ui/banner/modal-banner';

export * from './services/modal-global-settings.service';
export * from './services/modal.service';

export * from './classes/modal';
export * from './classes/modal-config';
export * from './classes/modal-ref';
export * from './classes/modal-style.config';

export * from './interfaces/imodal-close-result.interface';
export * from './interfaces/imodal-component.interface';
export * from './interfaces/imodal-config.interface';
export * from './interfaces/imodal-ref.interface';
export * from './interfaces/imodal-service.interface';
export * from './interfaces/imodal-style-config.interface';
export * from './interfaces/imodal-view.interface';
export * from './interfaces/ibottom-sheet-modal-config.interface';

export * from './constants/modal-animation.constants';
export * from './constants/modal-bottom-sheet.constants';

export * from './enums/modal-warnings.enum';
export * from './enums/modal-state.enum';

export * from './directives/modal-header.directive';
export * from './directives/modal-footer.directive';

export * from './tokens/modal-data.token';

export * from './types/modal.types';

export * from './classes/modal-close-guard';
export * from './classes/guards/modal-confirm-close-guard';
