import { Component, OnInit, Input } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { CourseAuthor } from '../../shared/sidebar/author';

@Component({
    moduleId: module.id,
    selector: 'course-sidebar-author',
    templateUrl: 'course-sidebar-author.component.html'
})
export class CourseSidebarAuthorComponent implements OnInit {
    @Input() courseId;
    author : CourseAuthor;
    isReady = false;

    constructor(private courseService : CourseService) { }

    ngOnInit() { 
        this.courseService.getSidebarCourseAuthor(this.courseId)
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            )
    }

    extractData(res: CourseAuthor){
        this.author = res;
    }
}