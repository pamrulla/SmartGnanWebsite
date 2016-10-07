import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import {AppComponent} from './app.component';
import { CourseModule } from './course/course.module';

import { routing } from './app.router';

@NgModule({
    imports: [
        BrowserModule, 
        HttpModule, 
        CourseModule, 
        routing 
    ],
    declarations: [AppComponent ],
    bootstrap: [AppComponent]
})

export class AppModule{

}