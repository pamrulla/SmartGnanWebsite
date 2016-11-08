import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header-bar',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
    isUserLoggedIn = false;
    userName = "";
    userDP = "";
    userID = 0;

    email = "";
    password = "";
    password_confirm = "";
    error = "";
    acceptance = 0;
    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.isUserLoggedIn = this.userService.isUserLoggedIn();
        if(this.isUserLoggedIn){
            this.userName = "Patan Amrulla Khan";
            this.userDP = "images/yuna.jpg";
            this.userID = 1;
        }
     }

    onLogin(){
        this.error = "";
        if(this.email == "" || this.password == ""){
            this.error = "Invalid Email and password.";
        }
    }

    onRegistration(){
        console.log(this.router.url);
        this.router.navigateByUrl(this.router.url);

        this.error = "";
        if(this.email == ""){
            this.error = "Invalid Email.";
            return;
        }
        if(this.password == ""){
            this.error = "Invalid password.";
            return;
        }
        if(this.password_confirm == ""){
            this.error = "Invalid confirmation of password.";
            return;
        }
        if(this.password != this.password_confirm){
            this.error = "Passwords do not match.";
            return;
        }
        if(this.acceptance == 0){
            this.error = "Please accept our policy and terms and coditions.";
            return;
        }

        var response;
        
        // this.userService.RegisterUser(this.email, this.password)            
        //         .subscribe(
        //         o => response = o,
        //         err => console.log(err),
        //         () => { 
        //         if(response.isSuccess){
        //             this.router.navigate([''], { relativeTo: this.route.parent});
        //         }
        //         else{
        //             this.error = response.error;
        //             return;
        //         } });
    }

    private extractData(response: string) {
       
    }
}