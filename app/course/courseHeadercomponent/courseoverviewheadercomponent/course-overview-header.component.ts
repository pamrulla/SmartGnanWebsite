import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { CourseService } from '../../services/course.service';

import { Overview } from '../../shared/header/overview';

@Component({
    moduleId: module.id,
    selector: 'course-overview',
    templateUrl: 'course-overview-header.component.html'
})
export class CourseOverviewHeaderComponent implements OnInit {

    overview: Overview;
    CoursePrice: number;
    CourseOverviewVideo: SafeResourceUrl;

    isCourseDiscounted: boolean;

    constructor(private sanitizer: DomSanitizer, private courseService: CourseService) { }

    ngOnInit() {
        this.overview = this.courseService.getHeaderOverview().then(o => this.extractData(o));
            //.then(o => {this.overview = o; this.extractData();});
    }

    private extractData(response: Overview) : Overview {
      console.log(response);
      return response;
    }
    private extractData1() {
       this.CourseOverviewVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.overview.link);
       this.checkIfCourseisDiscounted();
       this.getCourseFinalPrice();
    }

    checkIfCourseisDiscounted() {
        if (this.overview.courseDiscount == 0) {
            this.isCourseDiscounted = false;
        }
        else {
            this.isCourseDiscounted = true;
        }
    }

    getCourseFinalPrice() {
        this.CoursePrice = this.overview.courseActualPrice - (this.overview.courseActualPrice * this.overview.courseDiscount / 100);
    }
}