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
var common_1 = require('@angular/common');
var angular2_materialize_1 = require('angular2-materialize');
var player_routing_1 = require('./player.routing');
var course_content_module_1 = require('../shared/course-content/course-content.module');
var player_component_1 = require('./player.component');
var main_component_1 = require('./maincomponent/main.component');
var sidebar_component_1 = require('./sidebarcomponent/sidebar.component');
var PlayerModule = (function () {
    function PlayerModule() {
    }
    PlayerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular2_materialize_1.MaterializeModule,
                course_content_module_1.CourseContentModule,
                player_routing_1.routing
            ],
            exports: [],
            declarations: [
                main_component_1.MainComponent,
                sidebar_component_1.SidebarComponent,
                player_component_1.PlayerComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerModule);
    return PlayerModule;
}());
exports.PlayerModule = PlayerModule;
//# sourceMappingURL=player.module.js.map