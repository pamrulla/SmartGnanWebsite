import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-qna-form',
    templateUrl: 'course-qna-form.component.html'
})
export class CourseQnAFormComponent implements OnInit {
    @Output() onFilterChange = new EventEmitter<any>();
    @Input() courseId;
    private filterOptions = [];

    private isNewQuestion = false;

    searchText = "";
    sortingOptions = 0;
    myQuestions = false;
    noResponseQtns = false;

    constructor() { }

    ngOnInit() {
        this.filterOptions = [
          {value:0,name:"Sort by date"},
          {value:1,name:"Sort by popularity"}
        ]
     }

     newQuestion(){
         this.isNewQuestion = true;
     }

     newQuestionCancel(){
         this.isNewQuestion = false;
     }

     onFilterShowMyquestions(){
         this.myQuestions = !this.myQuestions; 
         this.triggerFilterChangeEvent();
     }

     onFilterShowQuestionsWithNoResponse(){
         this.noResponseQtns = !this.noResponseQtns; 
         this.triggerFilterChangeEvent();
     }

     onSortingOptionChagne(){
         this.sortingOptions = this.sortingOptions == 0 ? 1 : 0;  
         this.triggerFilterChangeEvent();
     }

     onSearchTextChange(){
         this.triggerFilterChangeEvent();
     }

     triggerFilterChangeEvent(){
         this.onFilterChange.emit({ 
             searchText: this.searchText,
             sortingOptions: this.sortingOptions,
             myQuestions: this.myQuestions,
             noResponseQtns: this.noResponseQtns
          });
     }
}