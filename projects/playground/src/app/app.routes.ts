import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Modal } from '@playground/components/modal/modal';
import { Home } from '@playground/components/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'modal',
        component: Modal
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class RegisterRouter { }