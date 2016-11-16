import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MaterializeAction } from 'angular2-materialize';

import { CourseService } from '../../services/course.service';

import { Overview } from '../../shared/header/overview';

@Component({
    moduleId: module.id,
    selector: 'course-overview',
    templateUrl: 'course-overview-header.component.html'
})
export class CourseOverviewHeaderComponent implements OnInit {

    @Input() courseId;

    modalActions = new EventEmitter<string | MaterializeAction>();
    
    uid = 1;
    overview: Overview;
    CoursePrice: number;
    CourseOverviewVideo: SafeResourceUrl;

    isCourseDiscounted: boolean;
    isReady = true;

    constructor(private sanitizer: DomSanitizer, private courseService: CourseService) { }

    ngOnInit() {
        // this.courseService.getHeaderOverview(this.courseId, this.uid)
        //     .subscribe(
        //         o => this.extractData(o),
        //         err => console.log(err),
        //         () => this.isReady = true
        //     );
        this.extractData(this.courseService.getHeaderOverview(this.courseId, this.uid));
    }

    private extractData(response: Overview) {
        this.overview = response;
        this.CourseOverviewVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/'+this.overview.link);
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

    openModal() {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    }
}