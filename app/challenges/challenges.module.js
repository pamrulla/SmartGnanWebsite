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
var challenges_component_1 = require('./challenges.component');
var challenges_routing_1 = require('./challenges.routing');
var header_module_1 = require('../shared/header/header.module');
var footer_module_1 = require('../shared/footer/footer.module');
var ChallengesModule = (function () {
    function ChallengesModule() {
    }
    ChallengesModule = __decorate([
        core_1.NgModule({
            imports: [challenges_routing_1.routing, header_module_1.HeaderModule, footer_module_1.FooterModule],
            exports: [],
            declarations: [challenges_component_1.ChallengesComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], ChallengesModule);
    return ChallengesModule;
}());
exports.ChallengesModule = ChallengesModule;
//# sourceMappingURL=challenges.module.js.map