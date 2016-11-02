"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_materialize_1 = require('angular2-materialize');
var faqs_component_1 = require('./faqs/faqs.component');
var tnc_component_1 = require('./tnc/tnc.component');
var privacy_policy_component_1 = require('./privacy-policy/privacy-policy.component');
var disclaimers_component_1 = require('./disclaimers/disclaimers.component');
var about_component_1 = require('./about/about.component');
var contact_us_component_1 = require('./contact-us/contact-us.component');
var plans_component_1 = require('./plans/plans.component');
var header_module_1 = require('../shared/header/header.module');
var footer_module_1 = require('../shared/footer/footer.module');
var ExtraPagesModule = (function () {
    function ExtraPagesModule() {
    }
    ExtraPagesModule = __decorate([
        core_1.NgModule({
            imports: [angular2_materialize_1.MaterializeModule, header_module_1.HeaderModule, footer_module_1.FooterModule],
            exports: [],
            declarations: [faqs_component_1.FaqsComponent,
                tnc_component_1.TnCComponent,
                privacy_policy_component_1.PrivacyPolicyComponent,
                disclaimers_component_1.DisclaimersComponent,
                about_component_1.AboutComponent,
                contact_us_component_1.ContactUsComponent,
                plans_component_1.PlansComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ExtraPagesModule);
    return ExtraPagesModule;
}());
exports.ExtraPagesModule = ExtraPagesModule;
//# sourceMappingURL=extra-pages.module.js.map