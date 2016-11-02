import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesComponent } from './challenges.component';

const routes: Routes = [
  { path: 'challenges', component: ChallengesComponent },
//   { path: 'course/:id', component: CourseMainComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);