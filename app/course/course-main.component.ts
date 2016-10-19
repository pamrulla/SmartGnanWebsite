import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'course-main',
    templateUrl: 'course-main.component.html'
})
export class CourseMainComponent implements OnInit {

    courseId = 0;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        this.courseId = this.route.snapshot.params['id'];
    }
}