import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../course/services/course.service';

import { Lesson } from '../../../course/shared/Lesson';
import { Chapter } from '../../../course/shared/Chapter';


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
    uid = 1;

    constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { 
        this.courseService.getCourseLessons(this.courseId, this.uid)
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            )
    }

    extractData(res: Chapter[]){
        this.Chapters = res;
        console.log(res);
    }

    onLessonsClick(chIdx: number, lsIdx: number){
        if(this.Chapters[chIdx].IsEnabled)
            this.router.navigate(['player', this.courseId, this.Chapters[chIdx].Id, this.Chapters[chIdx].Lessons[lsIdx].Id], { relativeTo: this.route.parent});
    }
}