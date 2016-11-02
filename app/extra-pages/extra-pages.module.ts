import { NgModule } from '@angular/core';

import { FaqsComponent }   from './faqs/faqs.component';
import { TnCComponent }   from './tnc/tnc.component';
import { PrivacyPolicyComponent }   from './privacy-policy/privacy-policy.component';
import { DisclaimersComponent }   from './disclaimers/disclaimers.component';
import { AboutComponent }   from './about/about.component';
import { ContactUsComponent }   from './contact-us/contact-us.component';
import { PlansComponent }   from './plans/plans.component';

@NgModule({
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
