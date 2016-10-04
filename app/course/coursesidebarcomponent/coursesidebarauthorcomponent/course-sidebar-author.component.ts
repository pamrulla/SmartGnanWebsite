import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'course-sidebar-author',
    templateUrl: 'course-sidebar-author.component.html'
})
export class CourseSidebarAuthorComponent implements OnInit {

    AuthorName: string;
    AuthorImage: string;
    AuthorShortDescription: string;

    constructor() { }

    ngOnInit() { 
        this.AuthorName = "Patan Amrulla Khan";
        this.AuthorImage = "https://s-media-cache-ak0.pinimg.com/avatars/amrullakhan5_1418723629_140.jpg";
        this.AuthorShortDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, doloribus, autem possimus veritatis illo tenetur 
            iste natus ipsam nostrum repudiandae eveniet hic fugit error asperiores odit dolor assumenda. Labore, velit.`;
    }
}