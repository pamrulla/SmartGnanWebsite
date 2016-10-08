import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { QuestionInfo } from '../../../shared/QuestionInfo';
import { CourseService } from '../../../services/course.service';
// const QTNS : QuestionInfo[] = [
//     {
//         title: "question 1",
//         shortDescription: "question 1 description",
//         authorImage: "test",
//         responses: 2,
//         id: 1
//     },
//     {
//         title: "question 2",
//         shortDescription: "question 2 description",
//         authorImage: "test 2",
//         responses: 10,
//         id: 2
//     }
// ];

@Component({
    moduleId: module.id,
    selector: 'course-qna-render',
    templateUrl: 'course-qna-render.component.html'
})
export class CourseQnARenderComponent implements OnInit {
    @Output() onShowQuestion = new EventEmitter<QuestionInfo>();
    
    questions : QuestionInfo[];
    isReady = false;

    constructor(private courseService: CourseService) { }

    ngOnInit() {
        this.courseService.getCourseQuestions()
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            )
     }

    extractData(res: QuestionInfo[]){
        this.questions = res;
    }
    
    showQuestion(qtn : QuestionInfo){
        this.onShowQuestion.emit(qtn);
    }
}