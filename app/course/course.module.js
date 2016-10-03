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
var course_main_component_1 = require('./course-main.component');
var course_progressbar_component_1 = require('./courseheadercomponent/courseprogressbarcomponent/course-progressbar.component');
var course_overview_header_component_1 = require('./courseheadercomponent/courseoverviewheadercomponent/course-overview-header.component');
var course_header_info_component_1 = require('./courseheadercomponent/courseheaderinfocomponent/course-header-info.component');
var course_routing_1 = require('./course-routing');
var CourseModule = (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                course_routing_1.routing
            ],
            exports: [],
            declarations: [
                course_main_component_1.CourseMainComponent,
                course_progressbar_component_1.CourseProgressbarComponent,
                course_overview_header_component_1.CourseOverviewHeaderComponent,
                course_header_info_component_1.CourseHeaderInfoComponent,
                angular2_materialize_1.MaterializeDirective
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map