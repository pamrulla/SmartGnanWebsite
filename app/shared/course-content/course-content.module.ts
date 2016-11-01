import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { CourseContentsComponent } from './coursecontentscomponent/course-contents.component';

@NgModule({
    imports: [CommonModule,MaterializeModule],
    exports: [CourseContentsComponent],
    declarations: [CourseContentsComponent],
    providers: [],
})
export class CourseContentModule { }
