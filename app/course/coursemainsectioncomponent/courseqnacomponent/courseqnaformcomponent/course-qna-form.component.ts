import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-qna-form',
    templateUrl: 'course-qna-form.component.html'
})
export class CourseQnAFormComponent implements OnInit {

    private filterOptions = [];

    private isNewQuestion = false;

    constructor() { }

    ngOnInit() {
        this.filterOptions = [
          {value:1,name:"Sort by date"},
          {value:2,name:"Sort by popularity"}
        ]
     }

     newQuestion(){
         this.isNewQuestion = true;
     }

     newQuestionCancel(){
         this.isNewQuestion = false;
     }
}