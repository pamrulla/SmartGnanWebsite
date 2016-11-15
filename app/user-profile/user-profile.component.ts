import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { UserDetails } from '../shared/classes/UserDetails';

@Component({
    moduleId: module.id,
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

    userId = 0;
    type = '';

    routerDashboardLink = '';
    routerProfileLink = '';

    db_userDetails = null;
    isEditProfile = false;
    form_userDetails = null;

    constructor(private route: ActivatedRoute, private router : Router, private userService: UserService) { }

    ngOnInit() {
        if(this.userService.isUserLoggedIn()){
            this.getAllDetails();
        }
        else{
            this.router.navigate(['/']);
        }
        this.userId = this.route.snapshot.params['id'];
        this.type = this.route.snapshot.params['type'];

        this.routerDashboardLink = '/user/' + this.userId + '/dashboard';
        this.routerProfileLink = '/user/' + this.userId + '/profile';
        console.log(this.routerDashboardLink);
     }

     getAllDetails(){
         this.db_userDetails = new UserDetails(this.userService.getFirstName(),
            this.userService.getLastName(),
            this.userService.getEmail(),
            this.userService.getDOJ(),
            this.userService.getAddr1(),
            this.userService.getAddr2(),
            this.userService.getAddr3(),
            this.userService.getDP());
     }

     oneEditClick(){
         this.isEditProfile = true;
         this.copyDetailsFromDBtoForm();
     }

     copyDetailsFromDBtoForm(){
         this.form_userDetails = new UserDetails(this.userService.getFirstName(),
            this.userService.getLastName(),
            this.userService.getEmail(),
            this.userService.getDOJ(),
            this.userService.getAddr1(),
            this.userService.getAddr2(),
            this.userService.getAddr3(),
            this.userService.getDP());
     }

     resetForm(){
         this.copyDetailsFromDBtoForm();
     }
     routingWithIn(t : string){
         this.type = t;
     }

     error = '';
     isSubmitting = false;

     onClickSubmit(){
         console.log(this.form_userDetails);
         return;
        //  let response = null;
        //  this.isSubmitting = true;
        //  this.userService.postUserDetails(this.form_userDetails.fName, this.form_userDetails.lName,
        //     this.form_userDetails.dp, this.form_userDetails.addr1, this.form_userDetails.addr2, this.form_userDetails.addr3)
        //     .subscribe(
        //     o => response = o,
        //     err => console.log(err),
        //     () => {
        //         this.isSubmitting = false;
        //         if (response.isSuccess) {
        //             this.isEditProfile = false;
        //         }
        //         else {
        //             this.error = response.errorMessage;
        //             return;
        //         }
        //     });
     }
}