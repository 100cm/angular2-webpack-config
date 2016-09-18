import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "../components/404";
import {HomeComponent} from "../app/welcome/home.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by atyun on 9/18/16.
 */

const appRoutes: Routes = [

    {path: '', HomeComponent},

    {path: '**', component: PageNotFoundComponent}

]

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);