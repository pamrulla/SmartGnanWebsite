import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../shared/services/blog.service';


@Component({
    moduleId: module.id,
    selector: 'blog',
    templateUrl: 'blog.component.html',
    providers: [BlogService],
})
export class BlogComponent implements OnInit, AfterViewInit {
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
        else {
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

    ngAfterViewInit() {
        // if (!this.isList) {
        //     var ss = document.createElement("script");
        //     ss.charset = "utf-8";
        //     ss.type = "text/javascript";
        //     ss.textContent = `amzn_assoc_ad_type = "responsive_search_widget";
        //     amzn_assoc_tracking_id = "sweemagiwork-21";
        //     amzn_assoc_marketplace = "amazon";
        //     amzn_assoc_region = "IN";
        //     amzn_assoc_placement = "";
        //     amzn_assoc_search_type = "search_widget";
        //     amzn_assoc_width = "auto";
        //     amzn_assoc_height = "auto";
        //     amzn_assoc_default_search_category = "";
        //     amzn_assoc_default_search_key = "test";
        //     amzn_assoc_theme = "dark";
        //     amzn_assoc_bg_color = "000000"`;
        //     document.getElementById('amazon-script').appendChild(ss);
        //     var s = document.createElement("script");
        //     s.src = "//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=IN";
        //     document.getElementById('amazon-script').appendChild(s);
        // }
    }

    private extractData(res: any) {
        if (this.isHome) {
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