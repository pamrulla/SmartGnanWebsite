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
var QuestionInfo_1 = require('../../../shared/QuestionInfo');
var ANS = [
    {
        name: "khan",
        description: "this is test",
        authorImage: "test1"
    },
    {
        name: "Patan",
        description: "this is test2",
        authorImage: "test2"
    }
];
var CourseSingleQnAComponent = (function () {
    function CourseSingleQnAComponent() {
        this.answers = ANS;
        this.goBack = new core_1.EventEmitter();
    }
    CourseSingleQnAComponent.prototype.ngOnInit = function () { };
    CourseSingleQnAComponent.prototype.onGoBack = function () {
        this.goBack.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', QuestionInfo_1.QuestionInfo)
    ], CourseSingleQnAComponent.prototype, "question", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CourseSingleQnAComponent.prototype, "goBack", void 0);
    CourseSingleQnAComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-single-qna',
            templateUrl: 'course-single-qna.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseSingleQnAComponent);
    return CourseSingleQnAComponent;
}());
exports.CourseSingleQnAComponent = CourseSingleQnAComponent;
//# sourceMappingURL=course-single-qna.component.js.map