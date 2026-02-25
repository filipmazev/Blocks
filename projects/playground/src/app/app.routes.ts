import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Modal } from '@playground/components/modal/modal';
import { Home } from '@playground/components/home/home';
import { Toastr } from './components/toastr/toastr';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports: [RouterModule]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class RegisterRouter {}
