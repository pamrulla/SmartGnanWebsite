import { Component, OnInit, Input } from '@angular/core';
import { CourseList } from '../../../course/shared/CourseList';
import { CourseService } from '../../../course/services/course.service';

@Component({
    moduleId: module.id,
    selector: 'course-list',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {
    @Input() isOnHome = false;
    isReady = false;
    courseList: CourseList[];

    colors = ['green', 'purple', 'blue-grey', 'pink', 'red lighten-1', 'blue'];

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

     private index = -1;
     getColor(idx: number){
         return this.colors[idx%6];
        //  if(this.index == -1){
        //      this.index = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
        //     return this.colors[this.index];
        //  }
        //  else{
        //      var clr = this.colors[this.index];
        //      this.index = -1;
        //      return clr;
        //  }
     }
}