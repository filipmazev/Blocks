import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { COMPONENT_EXAMPLES } from '@playground/components/screens/library-components/component-demo/component-catalog';
import { DEFAULT_RELEASE_VERSION } from '@playground/components/screens/release-notes/constants/release-notes.constants';

import { APP_NAVIGATION } from './app.navigation';

const { withInAppNavigation } = APP_NAVIGATION;

const componentRoutes: Routes = COMPONENT_EXAMPLES.map((entry, index) =>
  withInAppNavigation(
    {
      path: entry.id,
      loadComponent:
        entry.id === 'side-nav' || entry.id === 'top-nav'
          ? undefined
          : () => import('@playground/components/screens/library-components/component-demo/component-demo').then((m) => m.ComponentDemo),
      children:
        entry.id === 'side-nav' || entry.id === 'top-nav'
          ? [
              { path: '', pathMatch: 'full', redirectTo: 'overview' },
              {
                path: ':navId',
                loadComponent: () => import('@playground/components/screens/library-components/component-demo/component-demo').then((m) => m.ComponentDemo),
                data: { componentId: entry.id }
              }
            ]
          : undefined,
      title: `${entry.title} · Blocks`,
      data: { componentId: entry.id }
    },
    { label: entry.title, breadcrumb: entry.title, section: entry.group, menu: true, order: index, icon: { name: 'box' } }
  )
);

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  withInAppNavigation(
    { path: 'home', loadComponent: () => import('@playground/components/screens/home/home').then((m) => m.Home), title: 'Blocks' },
    { label: 'Home', breadcrumb: 'Home', section: 'Start', icon: { name: 'house' }, menu: true, root: true, order: 1 }
  ),
  withInAppNavigation(
    {
      path: 'appearance',
      loadComponent: () => import('@playground/components/screens/appearance/appearance').then((m) => m.Appearance),
      title: 'Appearance · Blocks'
    },
    { label: 'Appearance', breadcrumb: 'Appearance', section: 'Start', menu: true, order: 2 }
  ),
  withInAppNavigation(
    {
      path: 'components',
      title: 'Components · Blocks',
      children: [
        {
          path: '',
          pathMatch: 'full',
          loadComponent: () => import('@playground/components/screens/library-components/component-demo/component-index').then((m) => m.ComponentIndex)
        },
        ...componentRoutes
      ]
    },
    { label: 'All components', breadcrumb: 'Components', section: 'Start', menu: true, order: 3 }
  ),
  withInAppNavigation(
    {
      path: 'release-notes',
      title: 'Release notes · Blocks',
      children: [
        { path: '', pathMatch: 'full', redirectTo: DEFAULT_RELEASE_VERSION },
        {
          path: ':version',
          loadComponent: () => import('@playground/components/screens/release-notes/release-notes').then((m) => m.ReleaseNotes)
        }
      ]
    },
    { label: 'Release notes', breadcrumb: 'Release notes', section: 'Start', icon: { name: 'history' }, menu: true, order: 4 }
  ),
  withInAppNavigation(
    {
      path: 'icon-catalog',
      loadComponent: () => import('@playground/components/screens/icon-catalog/icon-catalog').then((m) => m.IconCatalog),
      title: 'Icon catalog · Blocks'
    },
    { label: 'Icon catalog', breadcrumb: 'Icon catalog', section: 'Tools', menu: true, order: 4 }
  ),
  withInAppNavigation(
    {
      path: 'modal',
      loadComponent: () => import('@playground/components/screens/library-components/modal/modal').then((m) => m.Modal),
      title: 'Modal configurator · Blocks'
    },
    { label: 'Modal configurator', breadcrumb: 'Modal configurator', section: 'Tools', menu: true, order: 5 }
  ),
  withInAppNavigation(
    {
      path: 'toastr',
      loadComponent: () => import('@playground/components/screens/library-components/toastr/toastr').then((m) => m.Toastr),
      title: 'Toast configurator · Blocks'
    },
    { label: 'Toast configurator', breadcrumb: 'Toast configurator', section: 'Tools', menu: true, order: 6 }
  ),
  { path: 'glass', pathMatch: 'full', redirectTo: 'appearance' },
  { path: '**', redirectTo: 'components' }
];

@NgModule({ imports: [RouterModule.forRoot(ROUTES)], exports: [RouterModule] })
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- Angular requires a class to declare an NgModule.
export class RegisterRouter {}
