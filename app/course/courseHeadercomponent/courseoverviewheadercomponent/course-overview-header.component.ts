import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
    CourseOverviewVideo: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.isUserLoggedIn = true;
        this.isBought = true;
        this.isExamPassed = this.isUserLoggedIn && this.isBought && true;
        this.isExamEnabled = this.isUserLoggedIn && this.isBought && !this.isExamPassed && true;
        this.isCourseDiscounted = false;

        this.CourseOverviewVideo = this.sanitizer.bypassSecurityTrustResourceUrl("//www.youtube.com/embed/Q8TXgCzxEnw?rel=0");
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
         this.CoursePrice = this.CourseActualPrice - (this.CourseActualPrice * this.CourseDiscount / 100);
     }
}