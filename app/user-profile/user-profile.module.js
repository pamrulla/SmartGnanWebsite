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
var user_profile_component_1 = require('./user-profile.component');
var header_module_1 = require('../shared/header/header.module');
var footer_module_1 = require('../shared/footer/footer.module');
var user_profile_routing_1 = require('./user-profile.routing');
var UserProfileModule = (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        core_1.NgModule({
            imports: [header_module_1.HeaderModule, footer_module_1.FooterModule, user_profile_routing_1.routing],
            exports: [],
            declarations: [user_profile_component_1.UserProfileComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], UserProfileModule);
    return UserProfileModule;
}());
exports.UserProfileModule = UserProfileModule;
//# sourceMappingURL=user-profile.module.js.map