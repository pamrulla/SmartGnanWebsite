"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var user_service_1 = require('../services/user.service');
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent(userService, router, route, location) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.isUserLoggedIn = false;
        this.userName = "";
        this.userDP = "";
        this.userID = 0;
        this.email = "";
        this.password = "";
        this.password_confirm = "";
        this.error = "";
        this.acceptance = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isUserLoggedIn = this.userService.isUserLoggedIn();
        if (this.isUserLoggedIn) {
            this.userName = "Patan Amrulla Khan";
            this.userDP = "images/yuna.jpg";
            this.userID = 1;
        }
    };
    HeaderComponent.prototype.onLogin = function () {
        this.error = "";
        if (this.email == "" || this.password == "") {
            this.error = "Invalid Email and password.";
        }
    };
    HeaderComponent.prototype.onRegistration = function () {
        console.log(this.router.url);
        this.router.navigateByUrl(this.router.url);
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
    };
    HeaderComponent.prototype.extractData = function (response) {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header-bar',
            templateUrl: 'header.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, router_1.ActivatedRoute, common_1.Location])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map