import { Component, OnInit, Input } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { UserService } from '../../../shared/services/user.service';
import { CourseProgress } from '../../shared/header/progress';

@Component({
    moduleId: module.id,
    selector: 'course-progressbar',
    templateUrl: 'course-progressbar.component.html'
})
export class CourseProgressbarComponent implements OnInit {
    
    @Input() courseId;
    
    courseProgress: CourseProgress;
    isReady = true;
    isVisible = true;
    Progress: String = "0%";
    
    constructor(private courseService: CourseService, private userService: UserService) { }

    ngOnInit() { 
        if(this.userService.isUserLoggedIn()){
            this.isVisible = true;
        }
        else{
            this.isVisible = false;
        }
        this.courseProgress = this.courseService.getHeaderCourseProgress(this.courseId);
        this.Progress = this.courseProgress.progress + "%";
            // .subscribe(
            //     res => this.extractData(res),
            //     err => console.log(err),
            //     () => this.isReady = true
            // );
        
    }

    extractData(res: CourseProgress)
    {
        this.courseProgress = res;
        this.Progress = res.progress + "%";
    }
}