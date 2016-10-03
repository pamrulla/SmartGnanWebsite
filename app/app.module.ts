import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {MaterializeDirective} from "angular2-materialize";

import {AppComponent} from './app.component';
import { CourseModule } from './course/course.module';

import { routing } from './app.router';

@NgModule({
    imports: [BrowserModule, CourseModule, routing ],
    declarations: [AppComponent ],
    bootstrap: [AppComponent]
})

export class AppModule{

}