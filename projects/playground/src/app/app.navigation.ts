import { defineNavigation } from '@filip.mazev/blocks/navigation';

export const APP_NAVIGATION = defineNavigation({
  sections: [
    { id: 'Start', icon: { name: 'house' }, collapsible: true },
    { id: 'Forms', icon: { name: 'text-cursor-input' }, collapsible: true },
    { id: 'Primitives', icon: { name: 'shapes' }, collapsible: true },
    { id: 'Navigation', icon: { name: 'panel-left' }, collapsible: true },
    { id: 'Icons', icon: { name: 'sparkles' }, collapsible: true },
    { id: 'Modals', icon: { name: 'panels-top-left' }, collapsible: true },
    { id: 'Notifications', icon: { name: 'bell' }, collapsible: true },
    { id: 'Tools', icon: { name: 'wrench' }, collapsible: true }
  ]
});

export type AppNavigationSection = (typeof APP_NAVIGATION.config.sections)[number]['id'];
