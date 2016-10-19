import { Component, OnInit } from '@angular/core';
import { CourseList } from '../shared/CourseList';
import { CourseService } from '../services/course.service';

@Component({
    moduleId: module.id,
    selector: 'course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {

    isReady = false;
    courseList: CourseList[];

    constructor(private courseService: CourseService) { }

    ngOnInit() {
        this.courseService.getCourseList(0)
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            );
     }

     extractData(res: CourseList[]){
         this.courseList = res;
     }

     showOnly(sortType){
         this.courseService.getCourseList(sortType)
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            );
     }
}