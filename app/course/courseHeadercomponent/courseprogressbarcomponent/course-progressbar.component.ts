import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { CourseProgress } from '../../shared/header/progress';

@Component({
    moduleId: module.id,
    selector: 'course-progressbar',
    templateUrl: 'course-progressbar.component.html'
})
export class CourseProgressbarComponent implements OnInit {
    
    courseProgress: CourseProgress;
    isReady = false;
    Progress: String = "0%";
    
    constructor(private courseService: CourseService) { }

    ngOnInit() { 
        this.courseService.getHeaderCourseProgress()
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            );
        
    }

    extractData(res: CourseProgress)
    {
        this.courseProgress = res;
        this.Progress = res.progress + "%";
    }
}