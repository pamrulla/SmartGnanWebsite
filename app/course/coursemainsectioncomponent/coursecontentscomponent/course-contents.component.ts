import { Component, OnInit } from '@angular/core';

import { CourseService } from '../../services/course.service';

import { Lesson } from '../../shared/Lesson';
import { Chapter } from '../../shared/Chapter';

const CNTS : Chapter[] = [
    {
        Name: "Ch 1",
        IsEnabled: true,
        Duration: "1h 20m",
        Progress: 10,
        Lessons: [
            {
                Duration: "1m 30s",
                Name: "Ls 1 1",
                IsCompleted: true,
                IsFree: true,
                VideoURL: "ls11"
            },
            {
                Duration: "1m 30s",
                Name: "Ls 1 2",
                IsCompleted: false,
                IsFree: true,
                VideoURL: "ls12"
            }
        ]
    },
    {
        Name: "Ch 2",
        IsEnabled: false,
        Duration: "2h 20m",
        Progress: 0,
        Lessons: [
            {
                Duration: "1m 30s",
                Name: "Ls 2 1",
                IsCompleted: false,
                IsFree: false,
                VideoURL: "ls11"
            },
            {
                Duration: "1m 30s",
                Name: "Ls 2 2",
                IsCompleted: false,
                IsFree: false,
                VideoURL: "ls12"
            }
        ]
    }
];

@Component({
    moduleId: module.id,
    selector: 'course-contents',
    templateUrl: 'course-contents.component.html'
})
export class CourseContentsComponent implements OnInit {

    Chapters : Chapter[];
    isReady = false;

    constructor(private courseService: CourseService) { }

    ngOnInit() { 
        this.courseService.getCourseLessons()
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