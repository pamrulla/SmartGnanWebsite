import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';


const routes: Routes = [
  { path: 'player/:cid/:chid/:lid', component: PlayerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);