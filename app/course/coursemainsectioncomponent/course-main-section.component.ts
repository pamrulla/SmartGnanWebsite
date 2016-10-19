import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-main-section',
    templateUrl: 'course-main-section.component.html'
})

export class CourseMainSectionComponent implements OnInit {
    
    @Input() courseId;

    constructor() { }

    ngOnInit() { }
}