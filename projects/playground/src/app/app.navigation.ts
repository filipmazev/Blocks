import { defineNavigation } from '@filip.mazev/blocks/navigation';

export const APP_NAVIGATION = defineNavigation({
  sections: [
    { id: 'Start', collapsible: true, collapsed: false },
    { id: 'Core', collapsible: true, collapsed: false },
    { id: 'Primitives', collapsible: true, collapsed: true },
    { id: 'Forms', collapsible: true, collapsed: true },
    { id: 'Navigation', collapsible: true, collapsed: true },
    { id: 'Modals', collapsible: true, collapsed: true },
    { id: 'Notifications', collapsible: true, collapsed: true },
    { id: 'Tools', collapsible: true, collapsed: true }
  ]
});

export type AppNavigationSection = (typeof APP_NAVIGATION.config.sections)[number]['id'];
