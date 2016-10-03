import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-overview',
    templateUrl: 'course-overview-header.component.html'
})
export class CourseOverviewHeaderComponent implements OnInit {

    isUserLoggedIn: boolean;
    isBought: boolean;
    isExamEnabled: boolean;
    isExamPassed: boolean;
    isCourseDiscounted: boolean;

    CourseActualPrice: number;
    CourseDiscount: number;
    CoursePrice: number;
    CourseOverviewVideo: string;

    constructor() { }

    ngOnInit() {
        this.isUserLoggedIn = false;
        this.isBought = false;
        this.isExamEnabled = false;
        this.isExamPassed = false;
        this.isCourseDiscounted = false;

        this.CourseOverviewVideo = "";
        this.CourseActualPrice = 300;
        this.CourseDiscount = 20;

        this.checkIfCourseisDiscounted();
        this.getCourseFinalPrice();
     }

     checkIfCourseisDiscounted(){
         if( this.CourseDiscount == 0)
         {
             this.isCourseDiscounted = false;
         }
         else
         {
             this.isCourseDiscounted = true;
         }
     }

     getCourseFinalPrice() {
         this.CoursePrice = this.CourseActualPrice * this.CourseDiscount / 100;
     }
}