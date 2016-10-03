import { NgModule } from '@angular/core';

import { CourseMainComponent }   from './course-main.component';
import { CourseProgressbarComponent } from './courseheadercomponent/courseprogressbarcomponent/course-progressbar.component';
import { CourseOverviewHeaderComponent } from './courseheadercomponent/courseoverviewheadercomponent/course-overview-header.component';
import { CourseHeaderInfoComponent } from './courseheadercomponent/courseheaderinfocomponent/course-header-info.component';

import { routing } from './course-routing';
@NgModule({
    imports: [
        routing
        ],

    exports: [],
    declarations: [
        CourseMainComponent,
        CourseProgressbarComponent,
        CourseOverviewHeaderComponent,
        CourseHeaderInfoComponent,
        
        ],
    providers: [],
})
export class CourseModule { }