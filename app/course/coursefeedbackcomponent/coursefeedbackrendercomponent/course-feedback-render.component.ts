import { Component, OnInit } from '@angular/core';

import { CourseRating } from "../../shared/CourseRatings";

const RATINGS: CourseRating[] = [
    {
        authorImage: "img1",
        feedback: "Awesome",
        rating: 5
    },
    {
        authorImage: "img2",
        feedback: "Ok",
        rating: 3
    },
    {
        authorImage: "img3",
        feedback: "Worst",
        rating: 1
    }
]

@Component({
    moduleId: module.id,
    selector: 'course-feedback-render',
    templateUrl: 'course-feedback-render.component.html'
})
export class CourseFeedbackRenderComponent implements OnInit {
    ratings = RATINGS;
    
    constructor() { }

    ngOnInit() { }
}