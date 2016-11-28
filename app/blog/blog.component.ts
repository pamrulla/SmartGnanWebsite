import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../shared/services/blog.service';


@Component({
    moduleId: module.id,
    selector: 'blog',
    templateUrl: 'blog.component.html'
})
export class BlogComponent implements OnInit {
    @Input() isHome = false;
    @Input() isChs = false;
    
    isChallenges = false;
    isList = false;

    id = 0;

    list: any;

    title = '';
    author = '';
    date = '';
    body = '';
    comments: any;

    colors = ['green', 'purple', 'blue-grey', 'pink', 'red lighten-1', 'blue'];

    constructor(private route: ActivatedRoute, private blogService: BlogService) { }

    ngOnInit() {
        if (!this.isHome) {
            if (this.route.snapshot.url[0].path.includes('blog')) {
                this.isChallenges = false;
            }
            else {
                this.isChallenges = true;
            }

            if (isNaN(this.route.snapshot.params['id'])) {
                this.isList = true;
            }
            else {
                this.id = this.route.snapshot.params['id'];
            }
        }
        else{
            this.isList = true;
            this.isChallenges = this.isChs;
        }

        let response: any = null;

        if (this.isList) {
            response = this.blogService.getList(this.isChallenges);
        }
        else {
            response = this.blogService.getBlogDetails(this.id);
        }

        this.title = '';
        this.author = '';
        this.date = '';
        this.body = '';
        this.list = null;
        this.comments = null;

        this.extractData(response);

    }

    private extractData(res: any) {
        if (this.isHome){
            this.list = res.slice(0, 6);
        }
        else {
            if (this.isList) {
                this.list = res;
            }
            else {
                this.title = res.title;
                this.author = res.author;
                this.date = res.date;
                this.body = res.body;
            }
        }
    }

    private index = -1;
    getColor(idx: number) {
        return this.colors[idx % 6];
    }
}