import { Component, OnInit, Input } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { CourseDetails } from '../../shared/sidebar/details';

@Component({
    moduleId: module.id,
    selector: 'course-sidebar-details',
    templateUrl: 'course-sidebar-details.component.html'
})
export class CourseSidebarDetailsComponent implements OnInit {
    @Input() courseId;
    courseDetails: CourseDetails;
    isReady = true;

    constructor(private courseService: CourseService) {
     }

    ngOnInit() {
        this.courseDetails = this.courseService.getSidebarCourseDetails(this.courseId);
            // .subscribe(
            //     res => this.extractData(res),
            //     err => console.log(err),
            //     () => this.isReady = true
            // );
     }

     extractData(res : CourseDetails){
         this.courseDetails = res;
     }
}