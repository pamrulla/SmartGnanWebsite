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
var CourseDescriptionComponent = (function () {
    function CourseDescriptionComponent() {
    }
    CourseDescriptionComponent.prototype.ngOnInit = function () {
        this.courseFullDescription = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum, expedita rerum quia veniam obcaecati quam consequatur repudiandae \n        exercitationem aliquam similique recusandae perferendis odio eos, fugiat nemo, commodi iusto fugit.<p>";
    };
    CourseDescriptionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-description',
            templateUrl: 'course-description.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseDescriptionComponent);
    return CourseDescriptionComponent;
}());
exports.CourseDescriptionComponent = CourseDescriptionComponent;
//# sourceMappingURL=course-description.component.js.map