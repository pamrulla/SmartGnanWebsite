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
var CourseSidebarAuthorComponent = (function () {
    function CourseSidebarAuthorComponent() {
    }
    CourseSidebarAuthorComponent.prototype.ngOnInit = function () {
        this.AuthorName = "Patan Amrulla Khan";
        this.AuthorImage = "https://s-media-cache-ak0.pinimg.com/avatars/amrullakhan5_1418723629_140.jpg";
        this.AuthorShortDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, doloribus, autem possimus veritatis illo tenetur \n            iste natus ipsam nostrum repudiandae eveniet hic fugit error asperiores odit dolor assumenda. Labore, velit.";
    };
    CourseSidebarAuthorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-sidebar-author',
            templateUrl: 'course-sidebar-author.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CourseSidebarAuthorComponent);
    return CourseSidebarAuthorComponent;
}());
exports.CourseSidebarAuthorComponent = CourseSidebarAuthorComponent;
//# sourceMappingURL=course-sidebar-author.component.js.map