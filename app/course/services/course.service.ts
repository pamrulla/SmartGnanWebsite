import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {

    private headerURL = "app/course/services/";

    constructor(private http: Http) { }

    // getHeaderOverview(): Overview{
    //     return { isBought: true, isCompleted: true, isExamEnabled: true, isUserLoggedIn: true, 
    //         link: "//www.youtube.com/embed/Q8TXgCzxEnw?rel=0", courseActualPrice: 300, courseDiscount: 20};
    // }

    // getHeaderOverview1(): Promise<Overview>{
    //     return Promise.resolve({ isBought: true, isCompleted: true, isExamEnabled: true, isUserLoggedIn: true, 
    //         link: "//www.youtube.com/embed/Q8TXgCzxEnw?rel=0", courseActualPrice: 500, courseDiscount: 0});
    // }

    getHeaderOverview(){

        return this.http.get(this.headerURL+"headeroverview.json")
                .map(res => res.json());
    }

    getHeaderTitle(){
        return this.http.get(this.headerURL+"header.title.json")
                .map(res => res.json());
    }

    getHeaderCourseProgress(){
        return this.http.get(this.headerURL+"header.progress.json")
                .map(res => res.json());
    }

    getSidebarCourseDetails(){
        return this.http.get(this.headerURL+"course.details.json")
                .map(res => res.json());
    }

    getSidebarCourseAuthor(){
        return this.http.get("http://localhost/api/test.php")//this.headerURL+"course.author.json")
                .map(res => res.json());
    }

    getCourseDescription(){
        return this.http.get(this.headerURL+"course.description.json")
                .map(res => res.json());
    }

    getCourseDownload(){
        return this.http.get(this.headerURL+"course.download.json")
                .map(res => res.json());
    }

    getCourseLessons(){
        return this.http.get(this.headerURL+"course.lessons.json")
                .map(res => res.json());
    }

    getCourseReviews(){
        return this.http.get(this.headerURL+"course.review.json")
                .map(res => res.json());
    }

    getCourseQuestions(){
        return this.http.get(this.headerURL+"course.questions.json")
                .map(res => res.json());
    }
}