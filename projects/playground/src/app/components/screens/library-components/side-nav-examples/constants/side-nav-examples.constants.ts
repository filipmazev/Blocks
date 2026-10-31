export {
  NAVIGATION_DEMO_GROUPS as SIDE_NAV_DEMO_GROUPS,
  NAVIGATION_DEMO_TRANSLATIONS as SIDE_NAV_DEMO_TRANSLATIONS
} from '../../shared/navigation-examples/constants/navigation-examples.constants';

export const SIDE_NAV_ROUTE_EXAMPLE = `const navigation = defineNavigation({
  sections: [{ id: 'workspace', title: 'Workspace', icon: { name: 'building-2' },
    collapsible: true, showInBreadcrumbs: true }],
  sideNav: { side: 'left', persistenceKey: 'my-app.navigation' }
});
const { withNav } = navigation;
export const routes: Routes = [withNav({ path: 'projects', children: [
  withNav({ path: 'tokens', loadComponent: () => import('./tokens').then(m => m.Tokens) },
    { label: { key: 'nav.tokens' }, icon: { name: 'swatch-book' },
      keywords: ['palette'], tags: [{ text: 'New' }], showInBreadcrumbs: false })
]}, { label: 'Projects', section: 'workspace', icon: { name: 'folder' } })];
// In application providers:
provideRouter(routes), provideNavigation(navigation.config)
// In your shell: <bx-side-nav />`;
