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
var RATINGS = [
    {
        authorImage: "img1",
        feedback: "Awesome",
        rating: 5
    },
    {
        authorImage: "img2",
        feedback: "Ok",
        rating: 3
    },
    {
        authorImage: "img3",
        feedback: "Worst",
        rating: 1
    }
];
var CourseFeedbackRenderComponent = (function () {
    function CourseFeedbackRenderComponent() {
        this.ratings = RATINGS;
    }
    CourseFeedbackRenderComponent.prototype.ngOnInit = function () { };
    CourseFeedbackRenderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-feedback-render',
            templateUrl: 'course-feedback-render.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseFeedbackRenderComponent);
    return CourseFeedbackRenderComponent;
}());
exports.CourseFeedbackRenderComponent = CourseFeedbackRenderComponent;
//# sourceMappingURL=course-feedback-render.component.js.map