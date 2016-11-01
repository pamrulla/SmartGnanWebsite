import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { CourseListComponent } from './courselistcomponent/course-list.component';
import { RatingsStartModule } from '../ratingsstars/ratingstar.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, MaterializeModule, RatingsStartModule, RouterModule],
    exports: [CourseListComponent],
    declarations: [CourseListComponent],
    providers: [],
})
export class CourseListModule { }
