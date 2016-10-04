import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-download',
    templateUrl: 'course-download.component.html'
})
export class CourseDownloadComponent implements OnInit {
    courseMaterial: string;

    constructor() { }

    ngOnInit() {
        this.courseMaterial = "test";
     }
}