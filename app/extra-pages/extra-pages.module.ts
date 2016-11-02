import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { FaqsComponent }   from './faqs/faqs.component';
import { TnCComponent }   from './tnc/tnc.component';
import { PrivacyPolicyComponent }   from './privacy-policy/privacy-policy.component';
import { DisclaimersComponent }   from './disclaimers/disclaimers.component';
import { AboutComponent }   from './about/about.component';
import { ContactUsComponent }   from './contact-us/contact-us.component';
import { PlansComponent }   from './plans/plans.component';

import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
    imports: [MaterializeModule, HeaderModule, FooterModule],
    exports: [],
    declarations: [FaqsComponent, 
        TnCComponent, 
        PrivacyPolicyComponent, 
        DisclaimersComponent,
        AboutComponent,
        ContactUsComponent,
        PlansComponent],
    providers: [],
})
export class ExtraPagesModule { }
