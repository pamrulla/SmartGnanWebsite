import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';
import { PlayerModule } from './player/player.module';
import { HomeModule } from './home/home.module';

import { UserService } from './shared/services/user.service';

import { routing } from './app.router';

@NgModule({
    imports: [
        BrowserModule, 
        RouterModule,
        HttpModule, 
        CourseModule,
        PlayerModule,
        HomeModule, 
        MaterializeModule,
        routing
    ],
    declarations: [AppComponent ],
    bootstrap: [AppComponent],
    providers: [UserService]
})

export class AppModule{

}