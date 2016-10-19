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
var CourseQnAFormComponent = (function () {
    function CourseQnAFormComponent() {
        this.onFilterChange = new core_1.EventEmitter();
        this.filterOptions = [];
        this.isNewQuestion = false;
        this.searchText = "";
        this.sortingOptions = 0;
        this.myQuestions = false;
        this.noResponseQtns = false;
    }
    CourseQnAFormComponent.prototype.ngOnInit = function () {
        this.filterOptions = [
            { value: 0, name: "Sort by date" },
            { value: 1, name: "Sort by popularity" }
        ];
    };
    CourseQnAFormComponent.prototype.newQuestion = function () {
        this.isNewQuestion = true;
    };
    CourseQnAFormComponent.prototype.newQuestionCancel = function () {
        this.isNewQuestion = false;
    };
    CourseQnAFormComponent.prototype.onFilterShowMyquestions = function () {
        this.myQuestions = !this.myQuestions;
        this.triggerFilterChangeEvent();
    };
    CourseQnAFormComponent.prototype.onFilterShowQuestionsWithNoResponse = function () {
        this.noResponseQtns = !this.noResponseQtns;
        this.triggerFilterChangeEvent();
    };
    CourseQnAFormComponent.prototype.onSortingOptionChagne = function () {
        this.sortingOptions = this.sortingOptions == 0 ? 1 : 0;
        this.triggerFilterChangeEvent();
    };
    CourseQnAFormComponent.prototype.onSearchTextChange = function () {
        this.triggerFilterChangeEvent();
    };
    CourseQnAFormComponent.prototype.triggerFilterChangeEvent = function () {
        this.onFilterChange.emit({
            searchText: this.searchText,
            sortingOptions: this.sortingOptions,
            myQuestions: this.myQuestions,
            noResponseQtns: this.noResponseQtns
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CourseQnAFormComponent.prototype, "onFilterChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseQnAFormComponent.prototype, "courseId", void 0);
    CourseQnAFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-qna-form',
            templateUrl: 'course-qna-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseQnAFormComponent);
    return CourseQnAFormComponent;
}());
exports.CourseQnAFormComponent = CourseQnAFormComponent;
//# sourceMappingURL=course-qna-form.component.js.map