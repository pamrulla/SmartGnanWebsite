import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http';
import { Cookie } from './cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
    private headerURL = "http://localhost:8012/api/services/user/";
    
    private isLoggedIn = false;

    public id = 0;

    private userDetails = null;

    constructor(private http: Http) { }

    public isUserLoggedIn(): boolean{
        if(Cookie.check('user')){
            this.isLoggedIn  = true;
            if(Cookie.check('user-details')){
                this.userDetails = JSON.parse(Cookie.get('user-details'));
            }
        }
        else{
            this.isLoggedIn = false;
        }
        return this.isLoggedIn;
    }

    public getUserID(): number{
        if(Cookie.check('user')){
            return Number.parseInt(Cookie.get('user'));
        }
        else{
           return 0;
        }
    }

    public setUserLoggedIn(id: number){
        Cookie.set('user', id.toString(), 7);
        this.id = id;
        this.isLoggedIn = true;
    }

    public setUserDetails(ud: any){
        Cookie.set('user-details', JSON.stringify(ud), 7);
        this.userDetails = ud;
        this.isLoggedIn = true;
    }

    public getUserName(){
        if(this.userDetails != null && this.userDetails.fname != null || this.userDetails.lname != null){
            return this.userDetails.fname + " " + this.userDetails.lname;
        }
        else{
            return '';
        }
    }

    public getUserDP(){
        if(this.userDetails != null && this.userDetails.dp != null){
            return this.userDetails.dp;
        }
        else{
            return '';
        }
    }

    public logoutUser(){
        Cookie.delete('user');
        Cookie.delete('user-details');
        this.id = 0;
        this.userDetails = null;
    }

    public RegisterUser(email: string, password: string){
        var body = { email, password };
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

       return this.http.post(this.headerURL+"postUserRegistration.php", body, options)
                .map(res => res.json());
    }

    public LoginUser(email: string, password: string){
         var body = { email, password };
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        
        return this.http.post(this.headerURL+"loggingInUser.php", body, options)
                .map(res => res.json());
    }
}