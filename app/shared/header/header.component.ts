import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

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
    constructor(private userService: UserService) { }

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
    }
}