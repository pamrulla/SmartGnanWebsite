import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: "/player/1/1/1", pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);