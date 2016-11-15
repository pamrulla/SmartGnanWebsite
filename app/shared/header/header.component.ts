import { Component, OnInit, EventEmitter, Input, OnChanges, SimpleChange } from '@angular/core';
import {Location} from '@angular/common';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
    moduleId: module.id,
    selector: 'header-bar',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit, OnChanges {
    @Input() register : boolean;

    modalRegisterActions = new EventEmitter<string | MaterializeAction>();
    modalLoginActions = new EventEmitter<string | MaterializeAction>();

    isUserLoggedIn = false;
    userName = "";
    userDP = "";
    userID = 0;

    email = "";
    password = "";
    password_confirm = "";
    error = "";
    acceptance = 0;

    response = null;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.isUserLoggedIn = this.userService.isUserLoggedIn();
        if (this.isUserLoggedIn) {
            //this.userName = this.userService.getUserName();
            this.userDP = this.userService.getUserDP();//"images/yuna.jpg";
            this.userID = this.userService.getUserID();
        }
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        //console.log(changes["register"].currentValue);
        if(changes["register"].currentValue != changes["register"].previousValue){
            this.openRegisterModal();
        }
    }

    onLogin() {
        this.error = "";
        if (this.email == "" || this.password == "") {
            this.error = "Invalid Email and password.";
        }

        this.userService.LoginUser(this.email, this.password)
            .subscribe(
            o => this.response = o,
            err => console.log(err),
            () => {
                if (this.response.isSuccess) {
                    this.userService.setUserDetails(this.response);
                    this.userService.setUserLoggedIn(this.response.id);
                    this.isUserLoggedIn = this.userService.isUserLoggedIn();
                    this.userID = this.userService.id;
                    this.userDP = this.userService.getUserDP();
                    //this.userName = this.userService.getUserName();
                    this.email = "";
                    this.password = "";
                    this.password_confirm = "";
                    this.error = "";
                    this.closeLoginModal();
                    // $("#LoginModal").removeClass("open");
                    // $(".lean-overlay").remove();
                }
                else {
                    this.error = this.response.errorMessage;
                    return;
                }
            });
    }

    onRegistration() {
        this.error = "";
        if (this.email == "") {
            this.error = "Invalid Email.";
            return;
        }
        if (this.password == "") {
            this.error = "Invalid password.";
            return;
        }
        if (this.password_confirm == "") {
            this.error = "Invalid confirmation of password.";
            return;
        }
        if (this.password != this.password_confirm) {
            this.error = "Passwords do not match.";
            return;
        }
        if (this.acceptance == 0) {
            this.error = "Please accept our policy and terms and coditions.";
            return;
        }

        this.userService.RegisterUser(this.email, this.password)
            .subscribe(
            o => this.response = o,
            err => console.log(err),
            () => {
                if (this.response.isSuccess) {
                    this.userService.setUserLoggedIn(this.response.uid);
                    this.email = "";
                    this.password = "";
                    this.password_confirm = "";
                    this.error = "";
                    this.closeRegisterModal();
                    this.router.navigate(['user', this.response.uid, 'profile'], { relativeTo: this.route.parent });
                }
                else {
                    this.error = this.response.errorMessage;
                    return;
                }
            });
    }

    openRegisterModal() {
        this.modalRegisterActions.emit({ action: "modal", params: ['open'] });
    }
    closeRegisterModal() {
        this.modalRegisterActions.emit({ action: "modal", params: ['close'] });
    }

    openLoginModal() {
        this.modalLoginActions.emit({ action: "modal", params: ['open'] });
    }
    closeLoginModal() {
        this.modalLoginActions.emit({ action: "modal", params: ['close'] });
    }

    onLogout(){
        this.userService.logoutUser();
        this.isUserLoggedIn = false;
    }
}