import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-header-info',
    templateUrl: 'course-header-info.component.html'
})
export class CourseHeaderInfoComponent implements OnInit {

    Title : string;
    ShortDescription: string;
    Author: string;

    constructor() { }

    ngOnInit() {
        this.Title = "This is course title";
        this.Author = "P Amrulla Khan";
        this.ShortDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aut consequuntur eum quaerat debitis iste dolores, perspiciatis
    aspernatur assumenda temporibus placeat cumque odio similique delectus eligendi enim nam nobis recusandae.`;
     }
}