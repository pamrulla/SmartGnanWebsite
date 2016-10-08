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
// const QTNS : QuestionInfo[] = [
//     {
//         title: "question 1",
//         shortDescription: "question 1 description",
//         authorImage: "test",
//         responses: 2,
//         id: 1
//     },
//     {
//         title: "question 2",
//         shortDescription: "question 2 description",
//         authorImage: "test 2",
//         responses: 10,
//         id: 2
//     }
// ];
var CourseQnARenderComponent = (function () {
    function CourseQnARenderComponent(courseService) {
        this.courseService = courseService;
        this.onShowQuestion = new core_1.EventEmitter();
        this.isReady = false;
    }
    CourseQnARenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourseQuestions()
            .subscribe(function (res) { return _this.extractData(res); }, function (err) { return console.log(err); }, function () { return _this.isReady = true; });
    };
    CourseQnARenderComponent.prototype.extractData = function (res) {
        this.questions = res;
    };
    CourseQnARenderComponent.prototype.showQuestion = function (qtn) {
        this.onShowQuestion.emit(qtn);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CourseQnARenderComponent.prototype, "onShowQuestion", void 0);
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