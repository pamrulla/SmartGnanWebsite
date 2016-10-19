import { Component, OnInit, OnChanges, EventEmitter, Output, Input, SimpleChange } from '@angular/core';

import { QuestionInfo } from '../../../shared/QuestionInfo';
import {CourseQuestionsList} from '../../../shared/CourseQuestionsList';
import { CourseService } from '../../../services/course.service';

@Component({
    moduleId: module.id,
    selector: 'course-qna-render',
    templateUrl: 'course-qna-render.component.html'
})
export class CourseQnARenderComponent implements OnInit, OnChanges {

    @Input() searchText = "";
    @Input() courseId;
    @Output() onShowQuestion = new EventEmitter<QuestionInfo>();

    questions: QuestionInfo[];
    isReady = false;

    isLeftActive = false;
    isRightActive = true;
    pageLabel = 1;


    max = 0;

    start = 1;
    count = 5;
    @Input() sort = 0;
    @Input() mine = 0;
    @Input() nores = 0;
    uid = 1;

    constructor(private courseService: CourseService) { }

    ngOnInit() {
        this.courseService.getCourseQuestions(this.courseId, this.start, this.count, this.sort, this.mine, this.nores, this.uid)
            .subscribe(
            res => this.extractData(res),
            err => console.log(err),
            () => this.isReady = true
            );
    }

    onClickQuestions(isNext: boolean) {
        if (isNext && this.isRightActive) {
            this.isReady = false;
            this.start += this.count
            this.courseService.getCourseQuestions(this.courseId, this.start, this.count, this.sort, this.mine, this.nores, this.uid)
                .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => { this.isReady = true; this.pageLabel++; }
                );
        }
        else if (!isNext && this.isLeftActive) {
            this.isReady = false;
            this.start -= this.count
            this.courseService.getCourseQuestions(this.courseId, this.start, this.count, this.sort, this.mine, this.nores, this.uid)
                .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => { this.isReady = true; this.pageLabel--; }
                );
        }

    }

    extractData(res: CourseQuestionsList, isFresh = false) {
        this.questions = res.questions;
        this.max = res.max;

        if(isFresh)
        {
            this.start = 1;
            this.count = 5;
        }
        
        if ((this.start + this.count) <= this.max) {
            this.isRightActive = true;
        }
        else {
            this.isRightActive = false;
        }

        if ((this.start - this.count) >= 1) {
            this.isLeftActive = true;
        }
        else {
            this.isLeftActive = false;
        }
    }

    showQuestion(qtn: QuestionInfo) {
        this.onShowQuestion.emit(qtn);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        for (let propName in changes) {
            let chng = changes[propName];
            if(propName == "searchText"){
                this.searchText = JSON.stringify(chng.currentValue);
            }
            else if(propName == "sort"){
                this.sort = parseInt(JSON.stringify(chng.currentValue));
            }
            else if(propName == "mine"){
                this.mine =  parseInt(JSON.stringify(chng.currentValue));
            }
            else if(propName == "nores"){
                this.nores = parseInt(JSON.stringify(chng.currentValue));
            }

            this.isReady = false;
            this.courseService.getCourseQuestions(this.courseId, this.start, this.count, this.sort, this.mine, this.nores, this.uid)
                .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => { this.isReady = true; }
                );
        }
    }
}