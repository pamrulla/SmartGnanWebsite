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
var course_service_1 = require('../../services/course.service');
var CourseSidebarDetailsComponent = (function () {
    function CourseSidebarDetailsComponent(courseService) {
        this.courseService = courseService;
        this.isReady = false;
    }
    CourseSidebarDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getSidebarCourseDetails(this.courseId)
            .subscribe(function (res) { return _this.extractData(res); }, function (err) { return console.log(err); }, function () { return _this.isReady = true; });
    };
    CourseSidebarDetailsComponent.prototype.extractData = function (res) {
        this.courseDetails = res;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseSidebarDetailsComponent.prototype, "courseId", void 0);
    CourseSidebarDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-sidebar-details',
            templateUrl: 'course-sidebar-details.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseSidebarDetailsComponent);
    return CourseSidebarDetailsComponent;
}());
exports.CourseSidebarDetailsComponent = CourseSidebarDetailsComponent;
//# sourceMappingURL=course-sidebar-details.component.js.map