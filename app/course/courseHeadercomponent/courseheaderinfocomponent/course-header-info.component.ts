import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';

import { Title } from '../../shared/header/title'

@Component({
    moduleId: module.id,
    selector: 'course-header-info',
    templateUrl: 'course-header-info.component.html'
})
export class CourseHeaderInfoComponent implements OnInit {
    @Input() courseId;
    
    title: Title;
    isReady = true;

    constructor(private courseService: CourseService) { }

    ngOnInit() {
        this.title = this.courseService.getHeaderTitle(this.courseId);
        // this.courseService.getHeaderTitle(this.courseId)
        //     .subscribe(o => this.extractData(o),
        //     err => console.log(err),
        //     () => this.isReady = true);
     }

     private extractData(response: Title) {
        this.title = response;
    }
}