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
var CourseOverviewHeaderComponent = (function () {
    function CourseOverviewHeaderComponent() {
    }
    CourseOverviewHeaderComponent.prototype.ngOnInit = function () {
        this.isUserLoggedIn = false;
        this.isBought = false;
        this.isExamEnabled = false;
        this.isExamPassed = false;
        this.isCourseDiscounted = false;
        this.CourseOverviewVideo = "";
        this.CourseActualPrice = 300;
        this.CourseDiscount = 20;
        this.checkIfCourseisDiscounted();
        this.getCourseFinalPrice();
    };
    CourseOverviewHeaderComponent.prototype.checkIfCourseisDiscounted = function () {
        if (this.CourseDiscount == 0) {
            this.isCourseDiscounted = false;
        }
        else {
            this.isCourseDiscounted = true;
        }
    };
    CourseOverviewHeaderComponent.prototype.getCourseFinalPrice = function () {
        this.CoursePrice = this.CourseActualPrice * this.CourseDiscount / 100;
    };
    CourseOverviewHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-overview',
            templateUrl: 'course-overview-header.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseOverviewHeaderComponent);
    return CourseOverviewHeaderComponent;
}());
exports.CourseOverviewHeaderComponent = CourseOverviewHeaderComponent;
//# sourceMappingURL=course-overview-header.component.js.map