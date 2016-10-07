import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeDirective } from 'angular2-materialize';

import { RatingsStartModule } from '../shared/ratingsstars/ratingstar.module';

import { CourseMainComponent }   from './course-main.component';

import { CourseProgressbarComponent } from './courseheadercomponent/courseprogressbarcomponent/course-progressbar.component';
import { CourseOverviewHeaderComponent } from './courseheadercomponent/courseoverviewheadercomponent/course-overview-header.component';
import { CourseHeaderInfoComponent } from './courseheadercomponent/courseheaderinfocomponent/course-header-info.component';
import { CourseHeaderComponent } from './courseheadercomponent/course-header.component';

import { CourseSidebarDetailsComponent } from './coursesidebarcomponent/coursesidebardetailscomponent/course-sidebar-details.component';
import { CourseSidebarAuthorComponent } from './coursesidebarcomponent/coursesidebarauthorcomponent/course-sidebar-author.component';

import { CourseMainSectionComponent } from './coursemainsectioncomponent/course-main-section.component';
import { CourseDownloadComponent } from './coursemainsectioncomponent/coursedownloadcomponent/course-download.component';
import { CourseDescriptionComponent } from './coursemainsectioncomponent/coursedescriptioncomponent/course-description.component';
import { CourseContentsComponent } from './coursemainsectioncomponent/coursecontentscomponent/course-contents.component';

import { CourseQnAComponent } from './coursemainsectioncomponent/courseqnacomponent/course-qna.component';
import { CourseQnAFormComponent } from './coursemainsectioncomponent/courseqnacomponent/courseqnaformcomponent/course-qna-form.component';
import { CourseQnARenderComponent } from './coursemainsectioncomponent/courseqnacomponent/courseqnarendercomponent/course-qna-render.component';
import { CourseSingleQnAComponent } from './coursemainsectioncomponent/courseqnacomponent/coursesingleqnacomponent/course-single-qna.component';

import { CourseFeedbackComponent } from './coursefeedbackcomponent/course-feedback.component';
import { CourseFeedbackFormComponent } from './coursefeedbackcomponent/coursefeedbackformcomponent/course-feedback-form.component';
import { CourseFeedbackRenderComponent } from './coursefeedbackcomponent/coursefeedbackrendercomponent/course-feedback-render.component';

import { CourseService } from './services/course.service';


import { routing } from './course-routing';
@NgModule({
    imports: [
        CommonModule,
        RatingsStartModule,
        routing
        ],

    exports: [],
    declarations: [
        CourseMainComponent,
        CourseHeaderComponent,
        CourseProgressbarComponent,
        CourseOverviewHeaderComponent,
        CourseHeaderInfoComponent,
        CourseSidebarDetailsComponent,
        CourseSidebarAuthorComponent,
        CourseMainSectionComponent,
        CourseDownloadComponent,
        CourseDescriptionComponent,
        CourseContentsComponent,
        CourseQnAComponent,
        CourseQnAFormComponent,
        CourseQnARenderComponent,
        CourseSingleQnAComponent,
        CourseFeedbackComponent,
        CourseFeedbackFormComponent,
        CourseFeedbackRenderComponent,
        MaterializeDirective
        ],
    providers: [CourseService],
})
export class CourseModule { }
