import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/Rx';
import { ApocUser } from '../model/apocuser';

@Injectable()
export class AuthenticationServices {
    constructor(private http: Http) {

    }

    private isLogIn = new BehaviorSubject<boolean>(false);
    private isUser = new BehaviorSubject<string>("test");
    //isAdmin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   // isUser:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    //currentAdminValue = this.isAdmin.asObservable();
    currentUserValue = this.isUser.asObservable();
    public static UserRole:ApocUser;

    get isLoggedIn() {
        return this.isLogIn.asObservable(); // {2}
      }
   
   public getCredentials() {
        return AuthenticationServices.UserRole;
    }

    public setCredentials(userdata: ApocUser) {
        AuthenticationServices.UserRole = userdata;
    }

    // changeUser(data:string) {
    //     this.isUser.next("data");
    //     this.isAdmin.next(true);
    // }

    login() {                            // {4}
        this.isLogIn.next(true);
    }

    logout() {                            // {4}
        this.isLogIn.next(false);
    }


}

export class UserService {
    UserName: string;
    IsAdmin: boolean;
    IsUser: boolean;
    IsAuthenticated: boolean;
}