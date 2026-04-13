import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Modal } from '@playground/components/screens/library-components/modal/modal';
import { Home } from '@playground/components/screens/home/home';
import { Toastr } from './components/screens/library-components/toastr/toastr';
import { IconCatalog } from './components/screens/icon-catalog/icon-catalog';

export const ROUTES: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'modal',
    component: Modal
  },
  {
    path: 'toastr',
    component: Toastr
  },
  {
    path: 'icon-catalog',
    component: IconCatalog
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports: [RouterModule]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RegisterRouter {}
