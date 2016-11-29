import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http';
import { Cookie } from './cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Config } from '../config';

@Injectable()
export class BlogService {

    constructor(private http: Http) { }

    getBlogDetails(id: number) {
        return { 'isError': false, 'errorMessage': '', 'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'body': '<p>This paragramph1</p><p>This paragramph2</p><p>This paragramph3</p>' };
    }

    getList(isChallenges) {
        console.log(isChallenges);
        if (isChallenges == 'true') {
            return [
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                }
            ];
        }
        else {
            return [
                {
                    'title': 'This is title1', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title1', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title1', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title1', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                },
                {
                    'title': 'This is title1', 'author': 'Patan Amrulla Khan', 'date': '28-10-2016', 'id': 1
                }
            ];
        }
    }
}