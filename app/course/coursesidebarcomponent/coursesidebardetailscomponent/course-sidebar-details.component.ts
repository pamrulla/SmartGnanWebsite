import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-sidebar-details',
    templateUrl: 'course-sidebar-details.component.html'
})
export class CourseSidebarDetailsComponent implements OnInit {
    Level: string;
    Rating: number;
    Duration: string;
    Released: number;
    Students: number;

    constructor() {
        this.Level = "Beginner";
        this.Duration = "6h 3m";
        this.Rating = 3;
        this.Students = 30;
        this.Released = Date.now();
     }

    ngOnInit() { }
}