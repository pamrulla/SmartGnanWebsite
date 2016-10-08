import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { CourseDescription } from '../../shared/mainsection/description';

@Component({
    moduleId: module.id,
    selector: 'course-description',
    templateUrl: 'course-description.component.html'
})
export class CourseDescriptionComponent implements OnInit {
    
    isReady = false;
    courseDescription: CourseDescription;

    constructor( private courseService: CourseService) { }

    ngOnInit() {
        this.courseService.getCourseDescription()
                .subscribe(
                    res => this.extractData(res),
                    err => console.log(err),
                    () => this.isReady = true
                );
     }

     extractData(res: CourseDescription){
         this.courseDescription = res;
     }
}