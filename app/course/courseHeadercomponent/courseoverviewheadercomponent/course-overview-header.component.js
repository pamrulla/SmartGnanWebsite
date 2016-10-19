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
var platform_browser_1 = require('@angular/platform-browser');
var course_service_1 = require('../../services/course.service');
var CourseOverviewHeaderComponent = (function () {
    function CourseOverviewHeaderComponent(sanitizer, courseService) {
        this.sanitizer = sanitizer;
        this.courseService = courseService;
        this.uid = 0;
        this.isReady = false;
    }
    CourseOverviewHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getHeaderOverview(this.courseId)
            .subscribe(function (o) { return _this.extractData(o); }, function (err) { return console.log(err); }, function () { return _this.isReady = true; });
    };
    CourseOverviewHeaderComponent.prototype.extractData = function (response) {
        this.overview = response;
        this.CourseOverviewVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.overview.link);
        this.checkIfCourseisDiscounted();
        this.getCourseFinalPrice();
    };
    CourseOverviewHeaderComponent.prototype.checkIfCourseisDiscounted = function () {
        if (this.overview.courseDiscount == 0) {
            this.isCourseDiscounted = false;
        }
        else {
            this.isCourseDiscounted = true;
        }
    };
    CourseOverviewHeaderComponent.prototype.getCourseFinalPrice = function () {
        this.CoursePrice = this.overview.courseActualPrice - (this.overview.courseActualPrice * this.overview.courseDiscount / 100);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseOverviewHeaderComponent.prototype, "courseId", void 0);
    CourseOverviewHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-overview',
            templateUrl: 'course-overview-header.component.html'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer, course_service_1.CourseService])
    ], CourseOverviewHeaderComponent);
    return CourseOverviewHeaderComponent;
}());
exports.CourseOverviewHeaderComponent = CourseOverviewHeaderComponent;
//# sourceMappingURL=course-overview-header.component.js.map