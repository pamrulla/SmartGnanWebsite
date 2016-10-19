import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-feedback',
    templateUrl: 'course-feedback.component.html'
})
export class CourseFeedbackComponent implements OnInit {
    @Input() courseId;
    constructor() { }

    ngOnInit() { }
}