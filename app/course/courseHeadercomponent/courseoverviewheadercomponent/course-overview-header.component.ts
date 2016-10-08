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
    isReady = false;

    constructor(private sanitizer: DomSanitizer, private courseService: CourseService) { }

    ngOnInit() {
        this.courseService.getHeaderOverview()
            .subscribe(o => this.extractData(o),
            err => console.log("Khan "+err),
            () => this.isReady = false);
    }

    private extractData(response: Overview) {
        this.overview = response;
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