import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HomeServices } from '../service/home.service'
import { AuthenticationServices } from '../service/authentication.Service'

import 'rxjs/add/operator/map';
import { ApocUser } from '../model/apocuser';
import { AppSettings } from '../app.settings';
import { Console } from '@angular/core/src/console';


@Component({
    selector: 'app-editUserProfile',
    templateUrl: './editUserProfile.component.html',
    providers: [HomeServices, AuthenticationServices]
})

export class EditUserProfileComponent {
    userDetail: ApocUser;
    userid:string;
    isAdmin:boolean = false;
    constructor(private _formBuilder: FormBuilder,
        private http: Http,
        private router: Router,
        private route: ActivatedRoute,
        private homeService: HomeServices,
        private authService: AuthenticationServices
    ) {
     
    }

    ngOnInit() {
        let user = this.authService.getCredentials();
        if (!user) {
            this.router.navigate(['/login']);
        }
        else {
            if (user.IsAdmin) {
                this.isAdmin = true;
            }
        }

        let id = this.route.params.subscribe((params: Params) => {
            this.userid = params['id'];
            console.log(this.userid);
            this.homeService.getUser(this.userid)
                .subscribe(user => {
                    console.log(user);
                    this.userDetail = user;
                    this.userDetail.DOB = new Date(this.userDetail.DOB).toLocaleDateString();
                });
        });

    }

    updUser(){

    //   let uss = new TestApocUser();
    //   uss.AadharCardNum =  this.userDetail.AadharCardNum;
    //   uss.Addr1 =  this.userDetail.Addr1;
    //   uss.Addr2 =  this.userDetail.Addr2;
    //   uss.Cast =  this.userDetail.Cast;
    //   uss.Distict =  this.userDetail.Distict;
    //   uss.EmainID =  this.userDetail.EmainID;
    //   uss.FullName =  this.userDetail.FullName;
        this.homeService.updateUser(this.userDetail,this.userid )
        .subscribe(user => {
            console.log(user);
            //this.userDetail = user;
            //this.userDetail.DOB = new Date(this.userDetail.DOB).toLocaleDateString();
            if (user.n > 0) {
                alert('Updated Successful');
                console.log(this.userDetail._id)
                this.router.navigate(['/user/' + this.userid]);
            }
            else {
                alert('No Changes');
            }
        });
    }

    UpdateStatus(status:string){
        this.userDetail.Status = status;
        this.homeService.updateUser(this.userDetail,this.userid )
        .subscribe(user => {
            console.log(user);
            //this.userDetail = user;
            //this.userDetail.DOB = new Date(this.userDetail.DOB).toLocaleDateString();
            if (user.n > 0) {
                alert('Updated Successful');
                console.log(this.userDetail._id)
                this.router.navigate(['/admin']);
            }
            else {
                alert('No Changes');
            }
        });
    }
    
    logOut() {
        this.authService.logout();
        let defUser = new ApocUser();
        this.authService.setCredentials(defUser);
        this.router.navigate(['/login']);
       }
}

export class TestApocUser{
    FullName:string;
    FatherName:string;
    EmainID:string;
    AadharCardNum:string;
    DOB:string;
    Cast:string;
    Gender:string;
    Addr1:string;
    Addr2:string;
    Distict:string;
    State:string;
    Telephone:number;
    PostalCode:number;
    isPaymentMade:boolean;
    ApocID:string;
}