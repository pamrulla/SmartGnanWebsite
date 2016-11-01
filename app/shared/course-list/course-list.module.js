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
var course_list_component_1 = require('./courselistcomponent/course-list.component');
var ratingstar_module_1 = require('../ratingsstars/ratingstar.module');
var router_1 = require('@angular/router');
var CourseListModule = (function () {
    function CourseListModule() {
    }
    CourseListModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, angular2_materialize_1.MaterializeModule, ratingstar_module_1.RatingsStartModule, router_1.RouterModule],
            exports: [course_list_component_1.CourseListComponent],
            declarations: [course_list_component_1.CourseListComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], CourseListModule);
    return CourseListModule;
}());
exports.CourseListModule = CourseListModule;
//# sourceMappingURL=course-list.module.js.map