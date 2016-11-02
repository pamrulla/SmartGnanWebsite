import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqsComponent }   from './extra-pages/faqs/faqs.component';
import { TnCComponent }   from './extra-pages/tnc/tnc.component';
import { PrivacyPolicyComponent }   from './extra-pages/privacy-policy/privacy-policy.component';
import { DisclaimersComponent }   from './extra-pages/disclaimers/disclaimers.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent }   from './extra-pages/about/about.component';
import { ContactUsComponent }   from './extra-pages/contact-us/contact-us.component';
import { PlansComponent }   from './extra-pages/plans/plans.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'faqs', component: FaqsComponent },
  { path: 'tnc', component: TnCComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'disclaimers', component: DisclaimersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'plans', component: PlansComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);