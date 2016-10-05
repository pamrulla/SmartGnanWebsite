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
var CNTS = [
    {
        Name: "Ch 1",
        IsEnabled: true,
        Duration: "1h 20m",
        Progress: 10,
        Lessons: [
            {
                Duration: "1m 30s",
                Name: "Ls 1 1",
                IsCompleted: true,
                IsFree: true,
                VideoURL: "ls11"
            },
            {
                Duration: "1m 30s",
                Name: "Ls 1 2",
                IsCompleted: false,
                IsFree: true,
                VideoURL: "ls12"
            }
        ]
    },
    {
        Name: "Ch 2",
        IsEnabled: false,
        Duration: "2h 20m",
        Progress: 0,
        Lessons: [
            {
                Duration: "1m 30s",
                Name: "Ls 2 1",
                IsCompleted: false,
                IsFree: false,
                VideoURL: "ls11"
            },
            {
                Duration: "1m 30s",
                Name: "Ls 2 2",
                IsCompleted: false,
                IsFree: false,
                VideoURL: "ls12"
            }
        ]
    }
];
var CourseContentsComponent = (function () {
    function CourseContentsComponent() {
        this.Chapters = CNTS;
    }
    CourseContentsComponent.prototype.ngOnInit = function () {
    };
    CourseContentsComponent.prototype.onLessonsClick = function () {
        console.log("Clicked");
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