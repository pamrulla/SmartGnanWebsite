import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { UserService } from '../../shared/services/user.service'
import 'rxjs/add/operator/map';
import { Overview } from '../shared/header/overview';
import { Title } from '../shared/header/title'
import { CourseProgress } from '../shared/header/progress';
import { CourseAuthor } from '../shared/sidebar/author';
import { CourseDetails } from '../shared/sidebar/details';
import { CourseDescription } from '../shared/mainsection/description';
import { CourseDownload } from '../shared/mainsection/download';
import { Lesson } from '../../course/shared/Lesson';
import { Chapter } from '../../course/shared/Chapter';
import { Config } from '../../shared/config';
@Injectable()
export class CourseService {

    private headerURL = Config.api + "course/";

    constructor(private http: Http, private userService: UserService) { }

    getVideoLink(cid, chid, lid) {
        if (this.courseDetails.courseInfo.Id == cid) {
            return Number.parseInt(this.courseDetails.chapters[chid - 1].Lessons[lid - 1].VideoURL);
        }
    }

    getChapterId(courseId, chapterId, lessonId, flag) {
        if (this.courseDetails.courseInfo.Id == courseId) {
            if (flag) {
                //next
                if (lessonId == this.courseDetails.chapters[chapterId - 1].Lessons.length) {
                    if (chapterId == this.courseDetails.chapters.length) {
                        return { 'isCourseEnded': true, 'chapterId': -1, 'lessonId': -1 };
                    }
                    else {
                        return { 'isCourseEnded': false, 'chapterId': Number.parseInt(chapterId) + 1, 'lessonId': 1 };
                    }
                }
                else {
                    return { 'isCourseEnded': false, 'chapterId': chapterId, 'lessonId': Number.parseInt(lessonId) + 1 };
                }
            }
            else {
                //prev
                if (lessonId == 1) {
                    if (chapterId == 1) {
                        return { 'isCourseEnded': false, 'chapterId': -1, 'lessonId': -1 };
                    }
                    else {
                        return {
                            'isCourseEnded': false, 'chapterId': chapterId - 1,
                            'lessonId': this.courseDetails.chapters[chapterId - 2].Lessons.length - 1
                        };
                    }
                }
                else {
                    return { 'isCourseEnded': true, 'chapterId': chapterId, 'lessonId': Number.parseInt(lessonId) - 1 };
                }
            }
        }
    }

    updateLessonCompletion(courseId, chapterId, lessonId) {
        let aChId = this.courseDetails.chapters[chapterId - 1].Id;
        let lsId: Number = this.courseDetails.chapters[chapterId - 1].Lessons[lessonId - 1].Id;

        this.courseDetails.chapters[chapterId - 1].Lessons[lessonId - 1].is_completed = true;
        this.courseDetails.chapters[chapterId - 1].Progress += (100 / this.courseDetails.chapters[chapterId - 1].Lessons.Length);
        let uid: Number = this.userService.getUserID();
        
        var body = { lsId, uid };
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        console.log(body);
        this.http.post(this.headerURL + "updateLessonCompletion.php", body, options);
    }

    getCourseName(courseId) {
        if (this.courseDetails.courseInfo.Id == courseId) {
            return this.courseDetails.courseInfo.title;
        }
    }

    getChapterName(courseId, chapterId) {
        if (this.courseDetails.courseInfo.Id == courseId) {
            return this.courseDetails.chapters[chapterId - 1].Name;
        }
    }

    getLessonName(courseId, chapterId, lessonId) {
        if (this.courseDetails.courseInfo.Id == courseId) {
            return this.courseDetails.chapters[chapterId - 1].Lessons[lessonId - 1].Name;
        }
    }


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
        let title = new Title();
        title.author = this.courseDetails.author.fName + ' ' + this.courseDetails.author.lName;
        title.shortDescription = this.courseDetails.courseInfo.desc_short;
        title.title = this.courseDetails.courseInfo.title;
        return title;
        // return this.http.get(this.headerURL + "getHeaderTitle.php?id=" + id + "")
        //     .map(res => res.json());
    }

    getHeaderCourseProgress(id, uid = 0) {
        let courseProgress = new CourseProgress();
        courseProgress.isCompleted = this.courseDetails.user_specific.is_course_completed;
        let sum = 0.0;
        this.courseDetails.chapters.forEach(ch => {
            sum += Number.parseFloat(ch.Progress);
        });
        courseProgress.progress = sum / this.courseDetails.chapters.length;

        return courseProgress;
        // return this.http.get(this.headerURL + "getHeaderCourseProgress.php?id=" + id + "&uid=" + uid)
        //     .map(res => res.json());
    }

    getSidebarCourseDetails(id) {
        let courseDetails = new CourseDetails();
        courseDetails.Duration = this.courseDetails.courseInfo.duration;
        courseDetails.Level = this.courseDetails.courseInfo.level;
        courseDetails.Rating = this.courseDetails.courseInfo.rating;
        courseDetails.Released = this.courseDetails.courseInfo.release_date;
        courseDetails.Students = this.courseDetails.courseInfo.students;
        return courseDetails;
        // return this.http.get(this.headerURL + "getSidebarCourseDetails.php?id=" + id + "")
        //     .map(res => res.json());
    }

    getSidebarCourseAuthor(id) {
        let author = new CourseAuthor();
        author.AuthorImage = this.courseDetails.author.dp;
        author.AuthorName = this.courseDetails.author.fName + this.courseDetails.author.lName;
        author.AuthorShortDescription = 'Having ' + this.courseDetails.author.experience_years
            + " years of experience in software engineering. " + this.courseDetails.author.experience_details;
        return author;
        // return this.http.get(this.headerURL + "getSidebarCourseAuthor.php?id=" + id + "")
        //     .map(res => res.json());
    }

    getCourseDescription(id) {
        let courseDescription = new CourseDescription();
        courseDescription.courseFullDescription = this.courseDetails.courseInfo.desc_long;
        return courseDescription;
        // return this.http.get(this.headerURL + "getCourseDescription.php?id=" + id + "")
        //     .map(res => res.json());
    }

    getCourseDownload(id) {
        let courseDownload = new CourseDownload();
        courseDownload.courseMaterial = this.courseDetails.courseInfo.dowload_link;
        return courseDownload;
        // return this.http.get(this.headerURL + "getCourseDownload.php?id=" + id + "")
        //     .map(res => res.json());
    }

    getCourseLessons(id, uid = 0) {
        let chapters = new Array();
        this.courseDetails.chapters.forEach(ch => {
            let chapter = new Chapter();
            chapter.Duration = ch.Duration;
            chapter.Id = ch.Id;
            chapter.IsEnabled = true;
            chapter.Name = ch.Name;
            chapter.Progress = ch.Progress;

            for (let i = 0; i < ch.Lessons.length; i++) {
                let lesson = new Lesson();
                lesson.Duration = ch.Lessons[i].Duration;
                lesson.Id = ch.Lessons[i].Id;
                lesson.IsCompleted = ch.Lessons[i].is_completed;
                lesson.IsFree = ch.Lessons[i].IsFree;
                lesson.Name = ch.Lessons[i].Name;
                lesson.VideoURL = ch.Lessons[i].VideoURL;

                chapter.Lessons.push(lesson);
            }

            chapters.push(chapter);
        });

        return chapters;
        // return this.http.get(this.headerURL + "getCourseLessons.php?id=" + id + "&uid=" + uid)
        //     .map(res => res.json());
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