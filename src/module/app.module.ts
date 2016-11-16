/**
 * Created by atyun on 9/18/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../components/app';
import {routing} from "../routes/app.routes";
import {HomeComponent} from  '../app/welcome/home.component'
import {PageNotFoundComponent} from "../components/404";

@NgModule({
    imports: [BrowserModule ,routing],
    declarations: [ AppComponent ,HomeComponent,PageNotFoundComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
