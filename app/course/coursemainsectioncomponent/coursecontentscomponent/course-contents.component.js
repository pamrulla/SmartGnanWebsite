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
var Lesson_1 = require('../../shared/Lesson');
var Chapter_1 = require('../../shared/Chapter');
var CourseContentsComponent = (function () {
    function CourseContentsComponent() {
        this.Chapters = Array(Chapter_1.Chapter);
    }
    CourseContentsComponent.prototype.ngOnInit = function () {
        this.Chapters.pop();
        console.log(this.Chapters.length);
        var ch = new Chapter_1.Chapter();
        ch.Name = "Chapter 1";
        ch.IsEnabled = true;
        ch.Progress = 45;
        ch.Duration = "1h 2m";
        ch.Lessons.pop();
        var ls = new Lesson_1.Lesson();
        ls.Duration = "Lesson 1 1";
        ls.IsCompleted = true;
        ls.IsFree = true;
        ls.VideoURL = "Lesson 1 1";
        ls.Name = "Lesson 1 1";
        ch.Lessons.push(ls);
        this.Chapters.push(ch);
        var ch1 = new Chapter_1.Chapter();
        ch1.Name = "Chapter 2";
        ch1.IsEnabled = true;
        ch1.Progress = 45;
        ch1.Duration = "1h 2m";
        ch1.Lessons.pop();
        var ls1 = new Lesson_1.Lesson();
        ls1.Duration = "Lesson 2 1";
        ls1.IsCompleted = true;
        ls1.IsFree = true;
        ls1.VideoURL = "Lesson 2 1";
        ls1.Name = "Lesson 2 1";
        ch1.Lessons.push(ls1);
        this.Chapters.push(ch1);
        console.log(this.Chapters.length);
    };
    CourseContentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-contents',
            templateUrl: 'course-contents.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseContentsComponent);
    return CourseContentsComponent;
}());
exports.CourseContentsComponent = CourseContentsComponent;
//# sourceMappingURL=course-contents.component.js.map