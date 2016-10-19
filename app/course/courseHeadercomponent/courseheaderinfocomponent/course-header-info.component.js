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
var CourseHeaderInfoComponent = (function () {
    function CourseHeaderInfoComponent(courseService) {
        this.courseService = courseService;
        this.isReady = false;
    }
    CourseHeaderInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getHeaderTitle(this.courseId)
            .subscribe(function (o) { return _this.extractData(o); }, function (err) { return console.log(err); }, function () { return _this.isReady = true; });
    };
    CourseHeaderInfoComponent.prototype.extractData = function (response) {
        this.title = response;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseHeaderInfoComponent.prototype, "courseId", void 0);
    CourseHeaderInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-header-info',
            templateUrl: 'course-header-info.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseHeaderInfoComponent);
    return CourseHeaderInfoComponent;
}());
exports.CourseHeaderInfoComponent = CourseHeaderInfoComponent;
//# sourceMappingURL=course-header-info.component.js.map