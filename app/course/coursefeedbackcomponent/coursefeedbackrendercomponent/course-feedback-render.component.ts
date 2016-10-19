import { Component, OnInit, Input } from '@angular/core';

import { CourseRating } from "../../shared/CourseRatings";
import { CourseRatingList } from "../../shared/CourseRatingList";
import { CourseService } from '../../services/course.service';

@Component({
    moduleId: module.id,
    selector: 'course-feedback-render',
    templateUrl: 'course-feedback-render.component.html'
})
export class CourseFeedbackRenderComponent implements OnInit {
    @Input() courseId;
    ratings : CourseRating[];
    isReady = false;
    
    constructor(private courseService: CourseService) { }

    ngOnInit() {
        this.courseService.getCourseReviews(this.courseId)
            .subscribe(
                res => this.extractData(res),
                err => console.log(err),
                () => this.isReady = true
            )
     }

    extractData(res: CourseRatingList){
        this.ratings = res.reviews;
    }
}