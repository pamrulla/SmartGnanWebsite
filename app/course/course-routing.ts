import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseMainComponent } from './course-main.component';

const routes: Routes = [
  { path: 'course', component: CourseMainComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);