import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { CourseListComponent } from './courselistcomponent/course-list.component';
import { RatingsStartModule } from '../ratingsstars/ratingstar.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
    imports: [CommonModule, MaterializeModule, RatingsStartModule, RouterModule, HeaderModule, FooterModule],
    exports: [CourseListComponent],
    declarations: [CourseListComponent],
    providers: [],
})
export class CourseListModule { }
