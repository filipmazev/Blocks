import { defineNavigation } from '@filip.mazev/blocks/navigation';

export const APP_NAVIGATION = defineNavigation({
  sections: [
    { id: 'Start' },
    { id: 'Forms' },
    { id: 'Primitives' },
    { id: 'Navigation' },
    { id: 'Icons' },
    { id: 'Modals' },
    { id: 'Notifications' },
    { id: 'Tools' }
  ]
});

export type AppNavigationSection = (typeof APP_NAVIGATION.config.sections)[number]['id'];
