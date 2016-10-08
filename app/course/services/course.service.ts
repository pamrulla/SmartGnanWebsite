import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Overview } from '../shared/header/overview';

@Injectable()
export class CourseService {

    private headerOverviewURL = "app/course/services/headeroverview.json";

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
        return this.http.get(this.headerOverviewURL)
                .map(res => res.json());
    }

    getHeaderTitle(): void{

    }

    getHeaderCourseProgress(): void{

    }

}