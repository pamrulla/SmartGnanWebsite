import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MaterializeAction } from 'angular2-materialize';

import { CourseService } from '../../services/course.service';

import { Overview } from '../../shared/header/overview';
import { CourseImage } from '../../shared/CertificateImage';
import { UserService } from '../../../shared/services/user.service';

declare var jsPDF: any;

@Component({
    moduleId: module.id,
    selector: 'course-overview',
    templateUrl: 'course-overview-header.component.html'
})
export class CourseOverviewHeaderComponent implements OnInit {

    @Input() courseId;

    modalActions = new EventEmitter<string | MaterializeAction>();
    
    uid = 1;
    overview: Overview;
    CoursePrice: number;
    CourseOverviewVideo: SafeResourceUrl;

    isCourseDiscounted: boolean;
    isReady = true;

    constructor(private sanitizer: DomSanitizer, private courseService: CourseService, private userService: UserService) { }

    ngOnInit() {
        this.uid = this.userService.getUserID();
        // this.courseService.getHeaderOverview(this.courseId, this.uid)
        //     .subscribe(
        //         o => this.extractData(o),
        //         err => console.log(err),
        //         () => this.isReady = true
        //     );
        this.extractData(this.courseService.getHeaderOverview(this.courseId, this.uid));
    }

    getCertificate(){
        var doc = new jsPDF('landscape');
        doc.addImage(CourseImage.imgData, 'JPEG', 0, 0, 295, 210);
        doc.setFontSize(40);
        doc.setTextColor(100);
        doc.setFontType("italic");
        doc.text(150, 115, this.userService.getUserName(), null, null, 'center');
        doc.setFontSize(20);
        doc.setFontType("normal");
        doc.text(150, 145, this.courseService.getCourseName(this.courseId), null, null, 'center');
        
        var today = new Date();
        console.log(today);
        var dd = '';
        var mm = ''; //January is 0!

        var yyyy = today.getFullYear();
        
        if( today.getDate()<10){
            dd = '0' +  today.getDate()
        }
        else{
            dd += today.getDate();
        }
        if((today.getMonth()+1)<10){
            mm='0'+ (today.getMonth()+1)
        } 
        else{
            mm += today.getMonth() + 1;
        }

        var today1 = dd+'-'+mm+'-'+yyyy;        
        
        doc.setFontSize(10);
        doc.setFontType("normal");
        doc.text(205, 167, today1);
        
        doc.setFontSize(10);
        doc.setFontType("normal");
        doc.text(150, 182, 'www.smartgnan.com www.sweetymagicalworks.com', null, null, 'center');
        
        doc.save('Certificate.pdf');
    }

    private extractData(response: Overview) {
        this.overview = response;
        this.CourseOverviewVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/'+this.overview.link);
        this.checkIfCourseisDiscounted();
        this.getCourseFinalPrice();
    }
 
    checkIfCourseisDiscounted() {
        if (this.overview.courseDiscount == 0) {
            this.isCourseDiscounted = false;
        }
        else {
            this.isCourseDiscounted = true;
        }
    }

    getCourseFinalPrice() {
        this.CoursePrice = this.overview.courseActualPrice - (this.overview.courseActualPrice * this.overview.courseDiscount / 100);
    }

    openModal() {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    }
}