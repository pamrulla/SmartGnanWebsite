import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sidebar-player',
    templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    courseId = 0;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        this.courseId = this.route.snapshot.params['cid'];
    }
}