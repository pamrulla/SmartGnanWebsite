import { Component, OnInit, Input } from '@angular/core';

import { CourseService } from '../../services/course.service';
import { CourseDownload } from '../../shared/mainsection/download';

@Component({
    moduleId: module.id,
    selector: 'course-download',
    templateUrl: 'course-download.component.html'
})
export class CourseDownloadComponent implements OnInit {
    @Input() courseId;
    isReady = true;
    download : CourseDownload;

    constructor(private courseService: CourseService) { }

    ngOnInit() {
        this.download = this.courseService.getCourseDownload(this.courseId);
                // .subscribe(
                //     res => this.extractData(res),
                //     err => console.log(err),
                //     () => this.isReady = true
                // )
     }

     extractData(res: CourseDownload){
         this.download = res;
     }
}