import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-header',
    templateUrl: 'course-header.component.html'
})
export class CourseHeaderComponent implements OnInit {
    
    @Input() courseId;

    constructor() { }

    ngOnInit() {
        
     }
}