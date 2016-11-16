import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './services/course.service';

@Component({
    moduleId: module.id,
    selector: 'course-main',
    templateUrl: 'course-main.component.html'
})
export class CourseMainComponent implements OnInit {

    courseId = 0;
    isReady = false;
    response = null;

    constructor(private route: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit() { 
        this.courseId = this.route.snapshot.params['id'];
        this.isReady = false;


        if(!this.courseService.checkCourseDetails(this.courseId)){
            this.courseService.getBasicCourseDetails(this.courseId) 
            .subscribe(o => this.response = o,
            err => console.log(err),
            () => {
                if(this.response.isSuccess){
                    this.courseService.updateCourseDetails(this.response, this.courseId);
                    this.isReady = true;
                }
            });
        }
        else{
            this.isReady = true;
        }
     }
}