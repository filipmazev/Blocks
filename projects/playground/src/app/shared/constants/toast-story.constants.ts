import type { IToastStoryArgs } from '@playground/interfaces/itoast-story-args.interface';

export const TOAST_STORY_DEFAULTS: IToastStoryArgs = {
  position: 'top-right',
  title: 'Workspace update',
  message: 'Your preferences have been saved.',
  durationInMs: 5000,
  maxOpened: 4,
  animate: true,
  swipeToDismiss: true,
  type: 'info',
  icon: 'info',
  loading: false,
  showCloseButton: true,
  showProgressBar: true,
  hasDefaultBackground: true,
  language: 'en'
};
