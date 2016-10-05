import { Component, OnInit } from '@angular/core';

import { QuestionInfo } from '../../../shared/QuestionInfo';

const QTNS : QuestionInfo[] = [
    {
        title: "question 1",
        shortDescription: "question 1 description",
        authorImage: "test",
        responses: 2,
        id: 1
    },
    {
        title: "question 2",
        shortDescription: "question 2 description",
        authorImage: "test 2",
        responses: 10,
        id: 2
    }
];

@Component({
    moduleId: module.id,
    selector: 'course-qna-render',
    templateUrl: 'course-qna-render.component.html'
})
export class CourseQnARenderComponent implements OnInit {

    questions = QTNS;

    constructor() { }

    ngOnInit() { }
}