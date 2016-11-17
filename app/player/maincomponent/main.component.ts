import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/catch';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseService } from '../../course/services/course.service';

declare var Vimeo: any;

@Component({
    moduleId: module.id,
    selector: 'main-player',
    templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit {
    playerObj: any;
    courseId = 0;
    chapterId = 0;
    lessonId = 0;

    isReady = false;

    link: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit() {
        this.courseId = this.route.snapshot.params['cid'];
        this.chapterId = this.route.snapshot.params['chid'];
        this.lessonId = this.route.snapshot.params['lid'];

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
        // this.playerObj = new Vimeo.Player('Lesson-Player');
        // this.playerObj.unload();
        // this.playerObj.loadVideo(this.link)
        //     .then(
        //     () => {
        //         console.log("Loading success " + this.link);
        //         this.isReady = true;
        //         this.playerObj.on('play', this.playEvent);
        //         this.playerObj.play();
        //     }
        //     )
        //     .catch(error => console.log(Error));


    }

    playEvent() {
        console.log('Played ' + this.link);
    }

}