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
var CourseContentsComponent = (function () {
    function CourseContentsComponent(courseService) {
        this.courseService = courseService;
        this.isReady = false;
    }
    CourseContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourseLessons(this.courseId)
            .subscribe(function (res) { return _this.extractData(res); }, function (err) { return console.log(err); }, function () { return _this.isReady = true; });
    };
    CourseContentsComponent.prototype.extractData = function (res) {
        this.Chapters = res;
    };
    CourseContentsComponent.prototype.onLessonsClick = function () {
        console.log("Clicked");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseContentsComponent.prototype, "courseId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseContentsComponent.prototype, "isMainCoursePage", void 0);
    CourseContentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-contents',
            templateUrl: 'course-contents.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseContentsComponent);
    return CourseContentsComponent;
}());
exports.CourseContentsComponent = CourseContentsComponent;
//# sourceMappingURL=course-contents.component.js.map