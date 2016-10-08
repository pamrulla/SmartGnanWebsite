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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var CourseService = (function () {
    function CourseService(http) {
        this.http = http;
        this.headerOverviewURL = "app/course/services/headeroverview.json";
    }
    // getHeaderOverview(): Overview{
    //     return { isBought: true, isCompleted: true, isExamEnabled: true, isUserLoggedIn: true, 
    //         link: "//www.youtube.com/embed/Q8TXgCzxEnw?rel=0", courseActualPrice: 300, courseDiscount: 20};
    // }
    // getHeaderOverview1(): Promise<Overview>{
    //     return Promise.resolve({ isBought: true, isCompleted: true, isExamEnabled: true, isUserLoggedIn: true, 
    //         link: "//www.youtube.com/embed/Q8TXgCzxEnw?rel=0", courseActualPrice: 500, courseDiscount: 0});
    // }
    CourseService.prototype.getHeaderOverview = function () {
        return this.http.get(this.headerOverviewURL)
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getHeaderTitle = function () {
    };
    CourseService.prototype.getHeaderCourseProgress = function () {
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map