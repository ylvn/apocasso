import { Component } from '@angular/core';
import { HomeServices } from '../service/home.service';
import { AuthenticationServices, UserService } from '../service/authentication.Service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApocUser } from '../model/apocuser';

@Component ({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    providers: [
        AuthenticationServices,
        HomeServices
    ]
})

export class ContactComponent{
    userDetail: ApocUser;
    userid:string;
    constructor(
        private homeService: HomeServices,
        private authService: AuthenticationServices,
        private router: Router,
    ) {
        this.userDetail = this.authService.getCredentials();
        if (this.userDetail) {
           // this.userDetail = user;
            this.userid =this.userDetail._id;
        }
    }

    logOut() {
        this.authService.logout();
        let defUser = new ApocUser();
        this.authService.setCredentials(defUser);
        this.router.navigate(['/login']);
       }
}