import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'challenges', component: BlogComponent },
  { path: 'challenges/:id', component: BlogComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);