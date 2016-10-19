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
var course_service_1 = require('../../../services/course.service');
var CourseQnARenderComponent = (function () {
    function CourseQnARenderComponent(courseService) {
        this.courseService = courseService;
        this.searchText = "";
        this.onShowQuestion = new core_1.EventEmitter();
        this.isReady = false;
        this.isLeftActive = false;
        this.isRightActive = true;
        this.pageLabel = 1;
        this.max = 0;
        this.start = 1;
        this.count = 5;
        this.sort = 0;
        this.mine = 0;
        this.nores = 0;
        this.uid = 1;
    }
    CourseQnARenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourseQuestions(this.courseId, this.start, this.count, this.sort, this.mine, this.nores, this.uid)
            .subscribe(function (res) { return _this.extractData(res); }, function (err) { return console.log(err); }, function () { return _this.isReady = true; });
    };
    CourseQnARenderComponent.prototype.onClickQuestions = function (isNext) {
        var _this = this;
        if (isNext && this.isRightActive) {
            this.isReady = false;
            this.start += this.count;
            this.courseService.getCourseQuestions(this.courseId, this.start, this.count, this.sort, this.mine, this.nores, this.uid)
                .subscribe(function (res) { return _this.extractData(res); }, function (err) { return console.log(err); }, function () { _this.isReady = true; _this.pageLabel++; });
        }
        else if (!isNext && this.isLeftActive) {
            this.isReady = false;
            this.start -= this.count;
            this.courseService.getCourseQuestions(this.courseId, this.start, this.count, this.sort, this.mine, this.nores, this.uid)
                .subscribe(function (res) { return _this.extractData(res); }, function (err) { return console.log(err); }, function () { _this.isReady = true; _this.pageLabel--; });
        }
    };
    CourseQnARenderComponent.prototype.extractData = function (res, isFresh) {
        if (isFresh === void 0) { isFresh = false; }
        this.questions = res.questions;
        this.max = res.max;
        if (isFresh) {
            this.start = 1;
            this.count = 5;
        }
        if ((this.start + this.count) <= this.max) {
            this.isRightActive = true;
        }
        else {
            this.isRightActive = false;
        }
        if ((this.start - this.count) >= 1) {
            this.isLeftActive = true;
        }
        else {
            this.isLeftActive = false;
        }
    };
    CourseQnARenderComponent.prototype.showQuestion = function (qtn) {
        this.onShowQuestion.emit(qtn);
    };
    CourseQnARenderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        for (var propName in changes) {
            var chng = changes[propName];
            if (propName == "searchText") {
                this.searchText = JSON.stringify(chng.currentValue);
            }
            else if (propName == "sort") {
                this.sort = parseInt(JSON.stringify(chng.currentValue));
            }
            else if (propName == "mine") {
                this.mine = parseInt(JSON.stringify(chng.currentValue));
            }
            else if (propName == "nores") {
                this.nores = parseInt(JSON.stringify(chng.currentValue));
            }
            this.isReady = false;
            this.courseService.getCourseQuestions(this.courseId, this.start, this.count, this.sort, this.mine, this.nores, this.uid)
                .subscribe(function (res) { return _this.extractData(res); }, function (err) { return console.log(err); }, function () { _this.isReady = true; });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseQnARenderComponent.prototype, "searchText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseQnARenderComponent.prototype, "courseId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CourseQnARenderComponent.prototype, "onShowQuestion", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseQnARenderComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseQnARenderComponent.prototype, "mine", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseQnARenderComponent.prototype, "nores", void 0);
    CourseQnARenderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-qna-render',
            templateUrl: 'course-qna-render.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseQnARenderComponent);
    return CourseQnARenderComponent;
}());
exports.CourseQnARenderComponent = CourseQnARenderComponent;
//# sourceMappingURL=course-qna-render.component.js.map