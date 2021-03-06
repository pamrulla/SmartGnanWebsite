import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { routing } from './player.routing';

import { CourseContentModule } from '../shared/course-content/course-content.module';

import { PlayerComponent } from './player.component';
// import { MainComponent } from './maincomponent/main.component';
// import { SidebarComponent } from './sidebarcomponent/sidebar.component';


@NgModule({
    imports: [
        CommonModule,
        MaterializeModule,
        CourseContentModule,
        FormsModule,
        routing
    ],
    exports: [],
    declarations: [
        // MainComponent,
        // SidebarComponent,
        PlayerComponent
    ],
    providers: [],
})
export class PlayerModule { }
