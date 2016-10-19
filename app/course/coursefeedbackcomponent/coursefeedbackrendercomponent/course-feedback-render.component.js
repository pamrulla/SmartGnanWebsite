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
var CourseFeedbackRenderComponent = (function () {
    function CourseFeedbackRenderComponent(courseService) {
        this.courseService = courseService;
        this.isReady = false;
    }
    CourseFeedbackRenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourseReviews(this.courseId)
            .subscribe(function (res) { return _this.extractData(res); }, function (err) { return console.log(err); }, function () { return _this.isReady = true; });
    };
    CourseFeedbackRenderComponent.prototype.extractData = function (res) {
        this.ratings = res.reviews;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseFeedbackRenderComponent.prototype, "courseId", void 0);
    CourseFeedbackRenderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-feedback-render',
            templateUrl: 'course-feedback-render.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseFeedbackRenderComponent);
    return CourseFeedbackRenderComponent;
}());
exports.CourseFeedbackRenderComponent = CourseFeedbackRenderComponent;
//# sourceMappingURL=course-feedback-render.component.js.map