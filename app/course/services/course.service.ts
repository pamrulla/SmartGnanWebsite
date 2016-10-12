import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {

    private headerURL = "http://localhost/api/services/course/";//app/course/services/";

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

        return this.http.get(this.headerURL+"getHeaderOverview.php?id=1&uid=1")
                .map(res => res.json());
    }

    getHeaderTitle(){
        return this.http.get(this.headerURL+"getHeaderTitle.php?id=1")
                .map(res => res.json());
    }

    getHeaderCourseProgress(){
        return this.http.get(this.headerURL+"getHeaderCourseProgress.php?id=1")
                .map(res => res.json());
    }

    getSidebarCourseDetails(){
        return this.http.get(this.headerURL+"getSidebarCourseDetails.php?id=1")
                .map(res => res.json());
    }

    getSidebarCourseAuthor(){
        return this.http.get(this.headerURL+"getSidebarCourseAuthor.php?id=1")
                .map(res => res.json());
    }

    getCourseDescription(){
        return this.http.get(this.headerURL+"getCourseDescription.php?id=1")
                .map(res => res.json());
    }

    getCourseDownload(){
        return this.http.get(this.headerURL+"getCourseDownload.php?id=1")
                .map(res => res.json());
    }

    getCourseLessons(){
        return this.http.get(this.headerURL+"getCourseLessons.php?id=1")
                .map(res => res.json());
    }

    getCourseReviews(){
        return this.http.get(this.headerURL+"getCourseReviews.php?id=1")
                .map(res => res.json());
    }

    getCourseQuestions(){
        return this.http.get(this.headerURL+"getCourseQuestions.php?id=1")
                .map(res => res.json());
    }
}