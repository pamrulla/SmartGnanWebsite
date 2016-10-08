import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { CourseAuthor } from '../../shared/sidebar/author';

@Component({
    moduleId: module.id,
    selector: 'course-sidebar-author',
    templateUrl: 'course-sidebar-author.component.html'
})
export class CourseSidebarAuthorComponent implements OnInit {

    author : CourseAuthor;
    isReady = false;

    constructor(private courseService : CourseService) { }

    ngOnInit() { 
        this.courseService.getSidebarCourseAuthor()
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            )
    }

    extractData(res: CourseAuthor){
        console.log(res);
        this.author = res;
    }
}