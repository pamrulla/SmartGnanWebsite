import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  { path: 'user/:id/:type', component: UserProfileComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);