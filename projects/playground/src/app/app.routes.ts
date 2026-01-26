import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Home } from "./components/home/home";

export const routes: Routes = [
    {
        path: '**',
        component: Home
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