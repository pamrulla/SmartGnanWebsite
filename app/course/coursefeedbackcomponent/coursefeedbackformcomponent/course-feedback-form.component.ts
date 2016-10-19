import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-feedback-form',
    templateUrl: 'course-feedback-form.component.html'
})
export class CourseFeedbackFormComponent implements OnInit {
    @Input() courseId;
    
    constructor() { }

    ngOnInit() { }
}