import { Component } from '@angular/core';
import { AppSettings } from '../app.settings';
import {BehaviorSubject} from 'rxjs/Rx';
import { AuthenticationServices, UserService } from '../service/authentication.Service'
import { Console } from '@angular/core/src/console';
import {DataService} from '../service/dataService';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    providers: [AuthenticationServices, DataService]
})

export class NavbarComponent {
    isAdmin:string;
    isUser:string;
    message:string;
    isLoggedIn$: Observable<boolean>;  
    constructor(private authService : AuthenticationServices,
      private _dataservice: DataService
      ) { 
        // this.isAdmin = AppSettings.isAdmin;
        // this.isUser = AppSettings.isUser;
      
      }

      ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn; 
        // this.authService.currentAdminValue.subscribe(isAdmin => {
        //   console.log("isAdmin:" + isAdmin);
        //   //this.isAdmin = isAdmin
        // });
  
        // this.authService.currentUserValue.subscribe(isUser => {
        //   this.isUser = isUser
        // });

        // this._dataservice.currentMessage.subscribe(messgae => this.message = messgae);
      }

      recieveMessage($event){
        this.message = $event;
      }

      onLogout(){
        this.authService.logout();                      // {3}
      }
   
}