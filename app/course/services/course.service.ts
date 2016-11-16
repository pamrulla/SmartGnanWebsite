import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserService } from '../../shared/services/user.service'
import 'rxjs/add/operator/map';
import { Overview } from '../shared/header/overview';

@Injectable()
export class CourseService {

    private headerURL = "http://localhost:8012/api/services/course/";

    constructor(private http: Http, private userService: UserService) { }

    getHeaderOverview(id, uid = 0) {
        let overview = new Overview();
        overview.courseActualPrice = Number.parseInt(this.courseDetails.courseInfo.price);
        overview.chId = this.courseDetails.chapters[0].Id;
        overview.courseDiscount = Number.parseInt(this.courseDetails.courseInfo.discount);
        overview.isBought = this.courseDetails.user_specific.is_Bought;
        overview.isCompleted = this.courseDetails.user_specific.is_course_completed;
        overview.isExamEnabled = this.courseDetails.user_specific.is_exam_enabled;
        overview.isUserLoggedIn = this.userService.isUserLoggedIn();
        overview.link = this.courseDetails.chapters[0].Lessons[0].VideoURL;
        overview.lsId = this.courseDetails.chapters[0].Lessons[0].Id;
        return overview;
        // return this.http.get(this.headerURL + "getHeaderOverview.php?id=" + id + "&uid=" + uid)
        //     .map(res => res.json());

    }

    getHeaderTitle(id) {
        return this.http.get(this.headerURL + "getHeaderTitle.php?id=" + id + "")
            .map(res => res.json());
    }

    getHeaderCourseProgress(id, uid = 0) {
        return this.http.get(this.headerURL + "getHeaderCourseProgress.php?id=" + id + "&uid=" + uid)
            .map(res => res.json());
    }

    getSidebarCourseDetails(id) {
        return this.http.get(this.headerURL + "getSidebarCourseDetails.php?id=" + id + "")
            .map(res => res.json());
    }

    getSidebarCourseAuthor(id) {
        return this.http.get(this.headerURL + "getSidebarCourseAuthor.php?id=" + id + "")
            .map(res => res.json());
    }

    getCourseDescription(id) {
        return this.http.get(this.headerURL + "getCourseDescription.php?id=" + id + "")
            .map(res => res.json());
    }

    getCourseDownload(id) {
        return this.http.get(this.headerURL + "getCourseDownload.php?id=" + id + "")
            .map(res => res.json());
    }

    getCourseLessons(id, uid = 0) {
        return this.http.get(this.headerURL + "getCourseLessons.php?id=" + id + "&uid=" + uid)
            .map(res => res.json());
    }

    getCourseReviews(id) {
        return this.http.get(this.headerURL + "getCourseReviews.php?id=" + id + "&start=1&count=5")
            .map(res => res.json());
    }

    getCourseQuestions(id, start, count, sort, mine, nores, uid) {
        return this.http.get(this.headerURL + "getCourseQuestions.php?id=" + id + "&start=" + start + "&count=" + count + "&sort=" + sort + "&mine=" + mine + "&nores=" + nores + "&uid=" + uid + "")
            .map(res => res.json());
    }

    getCourseList(sortType) {
        return this.http.get(this.headerURL + "getCourseList.php?type=" + sortType)
            .map(res => res.json());
    }

    getBasicCourseDetails(id) {

        let uid = 0;

        if (this.userService.isUserLoggedIn()) {
            uid = this.userService.getUserID();
        }

        return this.http.get(this.headerURL + "getBasicCourseDetails.php?id=" + id + "&uid=" + uid)
            .map(res => res.json());;
    }

    courseDetails: any;

    updateCourseDetails(obj: any, id: number) {
        this.courseDetails = obj;
    }

    checkCourseDetails(id: number) {
        if (this.courseDetails != null && this.courseDetails.courseInfo.Id == id) {
            let uid = 0;
            if (this.userService.isUserLoggedIn()) {
                uid = this.userService.getUserID();
                if (this.courseDetails.uid != 0 && this.courseDetails.courseInfo.uid == uid) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}