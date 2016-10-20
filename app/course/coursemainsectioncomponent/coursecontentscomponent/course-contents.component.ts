import { Component, OnInit, Input } from '@angular/core';

import { CourseService } from '../../services/course.service';

import { Lesson } from '../../shared/Lesson';
import { Chapter } from '../../shared/Chapter';


@Component({
    moduleId: module.id,
    selector: 'course-contents',
    templateUrl: 'course-contents.component.html'
})
export class CourseContentsComponent implements OnInit {
    @Input() courseId;
    @Input() isMainCoursePage;
    Chapters : Chapter[];
    isReady = false;

    constructor(private courseService: CourseService) { }

    ngOnInit() { 
        this.courseService.getCourseLessons(this.courseId)
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            )
    }

    extractData(res: Chapter[]){
        this.Chapters = res;
    }

    onLessonsClick(){
        console.log("Clicked");
    }
}