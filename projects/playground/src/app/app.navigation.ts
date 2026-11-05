import { defineNavigation } from '@filip.mazev/blocks/navigation';

export const APP_NAVIGATION = defineNavigation({
  sections: [
    { id: 'Start', icon: { name: 'house' }, collapsible: true, collapsed: false },
    { id: 'Tools', icon: { name: 'wrench' }, collapsible: true, collapsed: true },
    { id: 'Primitives', icon: { name: 'shapes' }, collapsible: true, collapsed: true },
    { id: 'Forms', icon: { name: 'text-cursor-input' }, collapsible: true, collapsed: true },
    { id: 'Navigation', icon: { name: 'panel-left' }, collapsible: true, collapsed: true },
    { id: 'Modals', icon: { name: 'panels-top-left' }, collapsible: true, collapsed: true },
    { id: 'Notifications', icon: { name: 'bell' }, collapsible: true, collapsed: true }
  ]
});

export type AppNavigationSection = (typeof APP_NAVIGATION.config.sections)[number]['id'];
