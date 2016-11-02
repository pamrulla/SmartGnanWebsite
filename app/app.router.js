"use strict";
var router_1 = require('@angular/router');
var faqs_component_1 = require('./extra-pages/faqs/faqs.component');
var tnc_component_1 = require('./extra-pages/tnc/tnc.component');
var privacy_policy_component_1 = require('./extra-pages/privacy-policy/privacy-policy.component');
var disclaimers_component_1 = require('./extra-pages/disclaimers/disclaimers.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./extra-pages/about/about.component');
var contact_us_component_1 = require('./extra-pages/contact-us/contact-us.component');
var plans_component_1 = require('./extra-pages/plans/plans.component');
var routes = [
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    // { path: 'challenges', redirectTo: "/challenges", pathMatch: 'full' },
    // { path: 'blog', redirectTo: "/blog", pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'faqs', component: faqs_component_1.FaqsComponent },
    { path: 'tnc', component: tnc_component_1.TnCComponent },
    { path: 'privacy-policy', component: privacy_policy_component_1.PrivacyPolicyComponent },
    { path: 'disclaimers', component: disclaimers_component_1.DisclaimersComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact-us', component: contact_us_component_1.ContactUsComponent },
    { path: 'plans', component: plans_component_1.PlansComponent },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.router.js.map