import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Modal } from '@playground/components/screens/library-components/modal/modal';
import { Home } from '@playground/components/screens/home/home';
import { Toastr } from './components/screens/library-components/toastr/toastr';
import { IconCatalog } from './components/screens/icon-catalog/icon-catalog';
import { withNav } from '@navigation/helpers/navigation-functions';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  withNav(
    {
      path: 'home',
      component: Home,
      title: 'Home'
    },
    {
      label: 'Home',
      breadcrumb: 'Home',
      section: 'base',
      menu: true,
      root: true,
      order: 1
    }
  ),

  withNav(
    {
      path: 'icon-catalog',
      component: IconCatalog,
      title: 'Icon Catalog'
    },
    {
      label: 'Icon Catalog',
      breadcrumb: 'Icon Catalog',
      section: 'base',
      menu: true,
      order: 2
    }
  ),

  withNav(
    {
      path: 'modal',
      component: Modal,
      title: 'Modal'
    },
    {
      label: 'Modal',
      breadcrumb: 'Modal',
      section: 'base',
      menu: true,
      order: 3
    }
  ),

  withNav(
    {
      path: 'toastr',
      component: Toastr,
      title: 'Toastr'
    },
    {
      label: 'Toastr',
      breadcrumb: 'Toastr',
      section: 'base',
      menu: true,
      order: 4
    }
  )
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports: [RouterModule]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RegisterRouter {}
