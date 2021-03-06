import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Answer } from '../../../shared/Answer';
import { QuestionInfo } from '../../../shared/QuestionInfo';

const ANS: Answer[] = [
    {
        name: "khan",
        description: "this is test",
        authorImage: "test1",
        date: "10/10/2016"
    },
    {
        name: "Patan",
        description: "this is test2",
        authorImage: "test2",
        date: "10/10/2016"
    }
];

@Component({
    moduleId: module.id,
    selector: 'course-single-qna',
    templateUrl: 'course-single-qna.component.html'
})
export class CourseSingleQnAComponent implements OnInit {
    @Input() courseId;
    @Input() question : QuestionInfo;
    answers = ANS;

    @Output() goBack = new EventEmitter<void>();

    constructor() { }

    ngOnInit() { }

    onGoBack(){
        this.goBack.emit();
    }
}