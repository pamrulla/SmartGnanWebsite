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

    getHeaderOverview(id, uid=0){

        return this.http.get(this.headerURL+"getHeaderOverview.php?id="+id+"&uid="+uid)
                .map(res => res.json());
    }

    getHeaderTitle(id){
        return this.http.get(this.headerURL+"getHeaderTitle.php?id="+id+"")
                .map(res => res.json());
    }

    getHeaderCourseProgress(id, uid = 0){
        return this.http.get(this.headerURL+"getHeaderCourseProgress.php?id="+id+"&uid=" + uid)
                .map(res => res.json());
    }

    getSidebarCourseDetails(id){
        return this.http.get(this.headerURL+"getSidebarCourseDetails.php?id="+id+"")
                .map(res => res.json());
    }

    getSidebarCourseAuthor(id){
        return this.http.get(this.headerURL+"getSidebarCourseAuthor.php?id="+id+"")
                .map(res => res.json());
    }

    getCourseDescription(id){
        return this.http.get(this.headerURL+"getCourseDescription.php?id="+id+"")
                .map(res => res.json());
    }

    getCourseDownload(id){
        return this.http.get(this.headerURL+"getCourseDownload.php?id="+id+"")
                .map(res => res.json());
    }

    getCourseLessons(id, uid = 0){
        return this.http.get(this.headerURL+"getCourseLessons.php?id="+id+"&uid="+uid)
                .map(res => res.json());
    }

    getCourseReviews(id){
        return this.http.get(this.headerURL+"getCourseReviews.php?id="+id+"&start=1&count=5")
                .map(res => res.json());
    }

    getCourseQuestions(id, start, count, sort, mine, nores, uid){
        return this.http.get(this.headerURL+"getCourseQuestions.php?id="+ id +"&start="+ start +"&count="+ count +"&sort="+ sort +"&mine="+ mine +"&nores="+ nores +"&uid="+ uid +"")
                .map(res => res.json());
    }

    getCourseList(sortType){
        return this.http.get(this.headerURL+"getCourseList.php?type="+sortType)
                .map(res => res.json());
    }
}