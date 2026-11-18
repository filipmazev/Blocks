import type { IModalStoryArgs } from '@playground/interfaces/imodal-story-args.interface';

export const MODAL_STORY_DEFAULTS: IModalStoryArgs = {
  layout: 'center',
  closeLabel: 'Close dialog',
  disableCloseOnNavigation: false,
  closeGuardOnlyOnCancel: true,
  closeDelay: 175,
  contentWrapper: true,
  wrapperStyles: '',
  wrapperClasses: '',
  contentStyles: '',
  overrideFullHeight: false,
  animate: true,
  hasBackdrop: true,
  showCloseButton: true,
  title: 'Review your changes',
  headerText: 'Workspace settings',
  disableClose: false,
  disableCloseOnBackdropClick: false,
  hasConfirmCloseGuard: true,
  breakpoints: { sm: 'bottom-sheet', xl: 'center' }
};
