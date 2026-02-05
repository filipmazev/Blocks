import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Modal } from "./components/modal/modal";
import { Home } from "./components/home/home";

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