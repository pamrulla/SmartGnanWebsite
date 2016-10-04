import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-description',
    templateUrl: 'course-description.component.html'
})
export class CourseDescriptionComponent implements OnInit {
    courseFullDescription: string;

    constructor() { }

    ngOnInit() {
        this.courseFullDescription = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum, expedita rerum quia veniam obcaecati quam consequatur repudiandae 
        exercitationem aliquam similique recusandae perferendis odio eos, fugiat nemo, commodi iusto fugit.<p>`;
     }
}