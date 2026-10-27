import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { withNav } from '../../../blocks/navigation/helpers/navigation-functions';
import { COMPONENT_EXAMPLES } from './components/screens/library-components/component-demo/component-catalog';

const componentRoutes: Routes = COMPONENT_EXAMPLES.map((entry, index) =>
  withNav(
    {
      path: entry.id,
      loadComponent: () => import('./components/screens/library-components/component-demo/component-demo').then((m) => m.ComponentDemo),
      title: `${entry.title} · Blocks`,
      data: { componentId: entry.id }
    },
    { label: entry.title, breadcrumb: entry.title, section: entry.group, menu: true, order: index }
  )
);

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  withNav(
    { path: 'home', loadComponent: () => import('./components/screens/home/home').then((m) => m.Home), title: 'Blocks' },
    { label: 'Overview', breadcrumb: 'Home', section: 'Start', menu: true, root: true, order: 1 }
  ),
  withNav(
    { path: 'appearance', loadComponent: () => import('./components/screens/appearance/appearance').then((m) => m.Appearance), title: 'Appearance · Blocks' },
    { label: 'Appearance', breadcrumb: 'Appearance', section: 'Start', menu: true, order: 2 }
  ),
  withNav(
    {
      path: 'components',
      title: 'Components · Blocks',
      children: [
        {
          path: '',
          pathMatch: 'full',
          loadComponent: () => import('./components/screens/library-components/component-demo/component-index').then((m) => m.ComponentIndex)
        },
        ...componentRoutes
      ]
    },
    { label: 'All components', breadcrumb: 'Components', section: 'Start', menu: true, order: 3 }
  ),
  withNav(
    {
      path: 'icon-catalog',
      loadComponent: () => import('./components/screens/icon-catalog/icon-catalog').then((m) => m.IconCatalog),
      title: 'Icon catalog · Blocks'
    },
    { label: 'Icon catalog', breadcrumb: 'Icon catalog', section: 'Tools', menu: true, order: 4 }
  ),
  withNav(
    {
      path: 'modal',
      loadComponent: () => import('./components/screens/library-components/modal/modal').then((m) => m.Modal),
      title: 'Modal configurator · Blocks'
    },
    { label: 'Modal configurator', breadcrumb: 'Modal configurator', section: 'Tools', menu: true, order: 5 }
  ),
  withNav(
    {
      path: 'toastr',
      loadComponent: () => import('./components/screens/library-components/toastr/toastr').then((m) => m.Toastr),
      title: 'Toast configurator · Blocks'
    },
    { label: 'Toast configurator', breadcrumb: 'Toast configurator', section: 'Tools', menu: true, order: 6 }
  ),
  { path: 'glass', pathMatch: 'full', redirectTo: 'appearance' },
  { path: '**', redirectTo: 'components' }
];

@NgModule({ imports: [RouterModule.forRoot(ROUTES)], exports: [RouterModule] })
export class RegisterRouter {}
