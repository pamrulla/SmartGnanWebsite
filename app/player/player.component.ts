import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseService } from '../course/services/course.service';

declare var Vimeo: any;

@Component({
    moduleId: module.id,
    selector: 'player',
    templateUrl: 'player.component.html',
    styleUrls: ['player.component.css']
})
export class PlayerComponent implements OnInit {
    playerObj: any;
    courseId = 0;
    chapterId = 0;
    lessonId = 0;
    isReady = false;
    link: SafeResourceUrl;
    autoplay = true;
    courseName = '';
    chapterName = '';
    lessonName = '';

    response = null;
    timer = null;
    timer_subscribe = null;

    countDown = 6;

    constructor(private sanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private courseService: CourseService,
        private router: Router) { }

    ngOnInit() {

        this.getDetails();

        if (!this.courseService.checkCourseDetails(this.courseId)) {
            this.courseService.getBasicCourseDetails(this.courseId)
                .subscribe(o => this.response = o,
                err => console.log(err),
                () => {
                    if (this.response.isSuccess) {
                        this.courseService.updateCourseDetails(this.response, this.courseId);
                        this.isReady = true;
                        this.timer = Observable.timer(1000, 1);
                        this.timer_subscribe = this.timer.subscribe(t => { this.initialize(); });
                    }
                });
        }
        else {
            this.isReady = true;
            this.timer = Observable.timer(1000, 1);
            this.timer_subscribe = this.timer.subscribe(t => { this.initialize(); });
        }

    }

    initialize() {
        this.timer_subscribe.unsubscribe();
        this.getDetails();

        let num = this.courseService.getVideoLink(this.courseId, this.chapterId, this.lessonId);

        this.link = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + num + "?title=0&byline=0&portrait=0");

        var options = {
            id: num,
            width: window.innerWidth,
            height: window.innerHeight,
            loop: false,
            title: 0,
            byline: 0,
            portrait: 0
        };

        this.playerObj = new Vimeo.Player('player-container', options);
        this.playerObj.on('ended', () => { this.endedEvent(); });
        this.playerObj.play();

        this.route.params.subscribe(
            params => { this.paramsChanged(params['cid'], params['chid'], params['lid']); }
        );
    }

    endedEvent() {
        if (this.autoplay) {
            this.timer = Observable.timer(1000, 1000);
            this.timer_subscribe = this.timer.subscribe(t => { this.CountDown(); })
        }


        this.courseService.updateLessonCompletion(this.courseId, this.chapterId, this.lessonId);
    }

    CountDown() {
        this.countDown--;
        console.log(this.countDown);
        if (this.countDown <= 0) {
            this.timer_subscribe.unsubscribe();
            this.countDown = 6;
            this.next();
        }
    }

    getDetails() {
        this.courseId = this.route.snapshot.params['cid'];
        this.chapterId = this.route.snapshot.params['chid'];
        this.lessonId = this.route.snapshot.params['lid'];

        if (this.isReady) {
            this.courseName = this.courseService.getCourseName(this.courseId);
            this.chapterName = this.courseService.getChapterName(this.courseId, this.chapterId);
            this.lessonName = this.courseService.getLessonName(this.courseId, this.chapterId, this.lessonId);
        }
    }

    paramsChanged(c, ch, l) {
        this.playerObj.unload().then(() => this.videoUnloaded(c, ch, l))
            .catch(function (error) {
                console.log(error);
            });
    }

    videoUnloaded(c, ch, l) {
        let num = this.courseService.getVideoLink(c, ch, l);
        this.playerObj.loadVideo(num).then(() => {
            this.getDetails();
            this.playerObj.on('ended', this.endedEvent);
            this.playerObj.play();
        }).catch(function (error) {
            console.log(error);
        });
    }

    next() {
        let nextIds = this.courseService.getChapterId(this.courseId, this.chapterId, this.lessonId, true);
        if (nextIds.isCourseEnded) {
            this.router.navigate(['course', this.courseId], { relativeTo: this.route.parent });
        }
        else {
            this.router.navigate(['player', this.courseId, nextIds.chapterId, nextIds.lessonId], { relativeTo: this.route.parent });
        }
    }

    prev() {
        let prevIds = this.courseService.getChapterId(this.courseId, this.chapterId, this.lessonId, false);
        if (prevIds.chapterId == -1 && prevIds.lessonId == -1) {
            this.router.navigate(['course', this.courseId], { relativeTo: this.route.parent });
        }
        else {
            this.router.navigate(['player', this.courseId, prevIds.chapterId, prevIds.lessonId], { relativeTo: this.route.parent });
        }
    }

    SidebarClick() {
        this.playerObj.pause();
    }

    replay5() {
        this.playerObj.getCurrentTime().then(s => {
            this.playerObj.setCurrentTime(s - 5);
        }).catch(function (error) {
            console.log(error);
        });
    }

    forward5() {
        this.playerObj.getCurrentTime().then(s => {
            this.playerObj.setCurrentTime(s + 5);
        }).catch(function (error) {
            console.log(error);
        });
    }
}