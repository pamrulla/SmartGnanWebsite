import { Component, OnInit, Input } from '@angular/core';

import { QuestionInfo } from '../../shared/QuestionInfo';

@Component({
    moduleId: module.id,
    selector: 'course-qna',
    templateUrl: 'course-qna.component.html'
})
export class CourseQnAComponent implements OnInit {
    @Input() courseId;
    
    searchText = "";
    sortingOptions = 0;
    myQuestions = 0;
    noResponseQtns = 0;

    isShowQuestion:boolean = false;

    question: QuestionInfo;

    constructor() { }

    ngOnInit() { }

    showQuestion(qtn : QuestionInfo){
        console.log(qtn);
        this.question = qtn;
        this.isShowQuestion = true;
    }

    filterChanged(event : any){
        this.searchText = event.searchText;
        this.sortingOptions = event.sortingOptions;
        this.myQuestions = event.myQuestions? 1 : 0;
        this.noResponseQtns = event.noResponseQtns? 1 : 0;
    }

    onGoBack(){
        this.isShowQuestion = false;
    }
}