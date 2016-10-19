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
        this.headerURL = "http://localhost:8012/api/services/course/"; //app/course/services/";
    }
    // getHeaderOverview(): Overview{
    //     return { isBought: true, isCompleted: true, isExamEnabled: true, isUserLoggedIn: true, 
    //         link: "//www.youtube.com/embed/Q8TXgCzxEnw?rel=0", courseActualPrice: 300, courseDiscount: 20};
    // }
    // getHeaderOverview1(): Promise<Overview>{
    //     return Promise.resolve({ isBought: true, isCompleted: true, isExamEnabled: true, isUserLoggedIn: true, 
    //         link: "//www.youtube.com/embed/Q8TXgCzxEnw?rel=0", courseActualPrice: 500, courseDiscount: 0});
    // }
    CourseService.prototype.getHeaderOverview = function (id, uid) {
        if (uid === void 0) { uid = 0; }
        return this.http.get(this.headerURL + "getHeaderOverview.php?id=" + id + "&uid=" + uid)
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getHeaderTitle = function (id) {
        return this.http.get(this.headerURL + "getHeaderTitle.php?id=" + id + "")
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getHeaderCourseProgress = function (id, uid) {
        if (uid === void 0) { uid = 0; }
        return this.http.get(this.headerURL + "getHeaderCourseProgress.php?id=" + id + "&uid=" + uid)
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getSidebarCourseDetails = function (id) {
        return this.http.get(this.headerURL + "getSidebarCourseDetails.php?id=" + id + "")
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getSidebarCourseAuthor = function (id) {
        return this.http.get(this.headerURL + "getSidebarCourseAuthor.php?id=" + id + "")
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getCourseDescription = function (id) {
        return this.http.get(this.headerURL + "getCourseDescription.php?id=" + id + "")
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getCourseDownload = function (id) {
        return this.http.get(this.headerURL + "getCourseDownload.php?id=" + id + "")
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getCourseLessons = function (id, uid) {
        if (uid === void 0) { uid = 0; }
        return this.http.get(this.headerURL + "getCourseLessons.php?id=" + id + "&uid=" + uid)
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getCourseReviews = function (id) {
        return this.http.get(this.headerURL + "getCourseReviews.php?id=" + id + "&start=1&count=5")
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getCourseQuestions = function (id, start, count, sort, mine, nores, uid) {
        return this.http.get(this.headerURL + "getCourseQuestions.php?id=" + id + "&start=" + start + "&count=" + count + "&sort=" + sort + "&mine=" + mine + "&nores=" + nores + "&uid=" + uid + "")
            .map(function (res) { return res.json(); });
    };
    CourseService.prototype.getCourseList = function (sortType) {
        return this.http.get(this.headerURL + "getCourseList.php?type=" + sortType)
            .map(function (res) { return res.json(); });
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map