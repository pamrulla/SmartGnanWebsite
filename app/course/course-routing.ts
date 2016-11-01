import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from '../shared/course-list/courselistcomponent/course-list.component';
import { CourseMainComponent } from './course-main.component';

const routes: Routes = [
  { path: 'course', component: CourseListComponent },
  { path: 'course/:id', component: CourseMainComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);