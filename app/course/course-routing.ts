import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListsComponent } from './course-lists/course-lists.component';
import { CourseMainComponent } from './course-main.component';

const routes: Routes = [
  { path: 'course', component: CourseListsComponent },
  { path: 'course/:id', component: CourseMainComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);