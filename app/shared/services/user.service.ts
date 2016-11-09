import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private headerURL = "http://localhost:8012/api/services/user/";
    
    private isLoggedIn = false;

    constructor(private http: Http) { }

    public isUserLoggedIn(): boolean{
        return this.isLoggedIn;
    }

    public RegisterUser(email: string, password: string){
        var body = { email, password };
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        var response;

        return this.http.post(this.headerURL+"postUserRegistration.php", body, options)
                .map(res => res.json());
    }
}