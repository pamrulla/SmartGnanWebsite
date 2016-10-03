import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-progressbar',
    templateUrl: 'course-progressbar.component.html'
})
export class CourseProgressbarComponent implements OnInit {
    
    Progress: String = "0%";
    
    constructor() { }

    ngOnInit() { 
        this.Progress = "50" + "%";
    }
}