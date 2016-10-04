import { Component, OnInit } from '@angular/core';

import { Lesson } from '../../shared/Lesson';
import { Chapter } from '../../shared/Chapter';

@Component({
    moduleId: module.id,
    selector: 'course-contents',
    templateUrl: 'course-contents.component.html'
})
export class CourseContentsComponent implements OnInit {

    Chapters = Array(Chapter);

    constructor() { }

    ngOnInit() { 
        
        this.Chapters.pop();

        console.log(this.Chapters.length);
        var ch = new Chapter();
        
        ch.Name = "Chapter 1";
        ch.IsEnabled = true;
        ch.Progress = 45;
        ch.Duration = "1h 2m";
        ch.Lessons.pop();

        var ls = new Lesson();
        ls.Duration = "Lesson 1 1";
        ls.IsCompleted = true;
        ls.IsFree = true;
        ls.VideoURL = "Lesson 1 1";
        ls.Name = "Lesson 1 1";

        ch.Lessons.push(ls);

        this.Chapters.push(ch);

        var ch1 = new Chapter();
        
        ch1.Name = "Chapter 2";
        ch1.IsEnabled = true;
        ch1.Progress = 45;
        ch1.Duration = "1h 2m";
        ch1.Lessons.pop();

        var ls1 = new Lesson();
        ls1.Duration = "Lesson 2 1";
        ls1.IsCompleted = true;
        ls1.IsFree = true;
        ls1.VideoURL = "Lesson 2 1";
        ls1.Name = "Lesson 2 1";

        ch1.Lessons.push(ls1);

        this.Chapters.push(ch1);
        console.log(this.Chapters.length);

    }
}