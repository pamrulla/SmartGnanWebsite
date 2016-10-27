import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';
import { PlayerModule } from './player/player.module';
import { HomeModule } from './home/home.module';

import { routing } from './app.router';

@NgModule({
    imports: [
        BrowserModule, 
        HttpModule, 
        CourseModule,
        PlayerModule,
        HomeModule, 
        MaterializeModule,
        routing
    ],
    declarations: [AppComponent ],
    bootstrap: [AppComponent]
})

export class AppModule{

}