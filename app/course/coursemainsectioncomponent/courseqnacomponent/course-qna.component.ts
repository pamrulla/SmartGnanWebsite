import { Component, OnInit } from '@angular/core';

import { QuestionInfo } from '../../shared/QuestionInfo';

@Component({
    moduleId: module.id,
    selector: 'course-qna',
    templateUrl: 'course-qna.component.html'
})
export class CourseQnAComponent implements OnInit {

    isShowQuestion:boolean = false;

    question: QuestionInfo;

    constructor() { }

    ngOnInit() { }

    showQuestion(qtn : QuestionInfo){
        console.log(qtn);
        this.question = qtn;
        this.isShowQuestion = true;
    }

    onGoBack(){
        this.isShowQuestion = false;
    }
}