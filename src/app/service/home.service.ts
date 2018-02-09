import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { ApocUser } from '../model/apocuser';
import {AppSettings} from '../app.settings';
@Injectable()
export class HomeServices{
    constructor(private http:Http){
        console.log('Task Service Initialized..');
    }

    getUsers(){
        return this.http.get(AppSettings.API_ENDPOINT + '/users')
        .map(res=>res.json());
    }

    getUser(userid){
        return this.http.get(AppSettings.API_ENDPOINT + '/user/'+userid)
        .map(res=>res.json());
    }

    
    getUsersCount(){
        return this.http.get(AppSettings.API_ENDPOINT + '/getusercount')
        .map(res=>res.json());
    }

    getApocID(){
        return this.http.get(AppSettings.API_ENDPOINT + '/getapocid')
        .map(res=>res.json());
    }

    updateUser(ApocUser, id){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        ApocUser.Updated_Dt = Date.now();
        return this.http.put(AppSettings.API_ENDPOINT + '/user/'+ id,JSON.stringify(ApocUser), {headers:headers})
        .map(res=>res.json());
    };

    saveUser(ApocUser){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        ApocUser.Added_Dt = Date.now();
        ApocUser.Updated_Dt = Date.now();
        return this.http.post(AppSettings.API_ENDPOINT + '/user',JSON.stringify(ApocUser), {headers:headers})
        .map(res=>res.json());
    };


    checkUserCredantials(userName: string, Password: string) {
        var headers = new Headers();
        let cred = {
            UserName: userName,
            Password: Password
        }

        headers.append('Content-Type', 'application/json');
        return this.http.post(AppSettings.API_ENDPOINT + '/checkUserCredantials', JSON.stringify(cred), { headers: headers })
            .map(res => res.json());
    };

    checkAdminCredantials(userName: string, Password: string) {
        var headers = new Headers();
        let cred = {
            UserName: userName,
            Password: Password
        }

        headers.append('Content-Type', 'application/json');
        return this.http.post(AppSettings.API_ENDPOINT + '/checkAdminCredantials', JSON.stringify(cred), { headers: headers })
            .map(res => res.json());
    };
}